import React, { useState, useEffect } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const VaccinePage = () => {
  const [dataSummary, setDataSummary] = useState([]);
  const [dataSummary1, setDataSummary1] = useState([]);
  const [
    sevenDayAverageAdminVaccines,
    setSevenDayAverageAdminVaccines,
  ] = useState([]);
  const [
    totalPopOneVaccineAdministered,
    setTotalPopOneVaccineAdministered,
  ] = useState("");

  const { province } = useParams();
  // Total Population

  let totalPopulation = 0;
  if (province === "Quebec") {
    totalPopulation = 8574571;
  } else if (province === "NL") {
    totalPopulation = 522103;
  } else if (province === "Ontario") {
    totalPopulation = 14734014;
  } else if (province === "PEI") {
    totalPopulation = 159625;
  } else if (province === "NovaScotia") {
    totalPopulation = 979351;
  } else if (province === "NewBrunswick") {
    totalPopulation = 781476;
  } else if (province === "Manitoba") {
    totalPopulation = 1379263;
  } else if (province === "Saskatchewan") {
    totalPopulation = 1178681;
  } else if (province === "Alberta") {
    totalPopulation = 4421876;
  } else if (province === "BC") {
    totalPopulation = 5147712;
  } else if (province === "Yukon") {
    totalPopulation = 42052;
  } else if (province === "NWT") {
    totalPopulation = 45161;
  } else {
    totalPopulation = 39353;
  }

  // Populations at x %
  const fortyPercentTotalPopulation = totalPopulation * 0.4;
  const fiftyPercentTotalPopulation = totalPopulation / 2;
  const sixtyPercentTotalPopulation = totalPopulation * 0.6;
  const seventyPercentTotalPopulation = totalPopulation * 0.7;
  const eightyPercentTotalPopulation = totalPopulation * 0.8;
  const ninetyPercentTotalPopulation = totalPopulation * 0.9;

  // Difference now and x %
  const diffNowAndFortyPercent =
    fortyPercentTotalPopulation - totalPopOneVaccineAdministered;
  const diffNowAndFiftyPercent =
    fiftyPercentTotalPopulation - totalPopOneVaccineAdministered;
  const diffNowAndSixtyPercent =
    sixtyPercentTotalPopulation - totalPopOneVaccineAdministered;
  const diffNowAndSeventyPercent =
    seventyPercentTotalPopulation - totalPopOneVaccineAdministered;
  const diffNowAndEightyPercent =
    eightyPercentTotalPopulation - totalPopOneVaccineAdministered;
  const diffNowAndNinetyPercent =
    ninetyPercentTotalPopulation - totalPopOneVaccineAdministered;

  // Number of days until x %
  const daysUntilFortyPercent =
    diffNowAndFortyPercent / sevenDayAverageAdminVaccines;
  const daysUntilFiftyPercent =
    diffNowAndFiftyPercent / sevenDayAverageAdminVaccines;
  const daysUntilSixtyPercent =
    diffNowAndSixtyPercent / sevenDayAverageAdminVaccines;
  const daysUntilSeventyPercent =
    diffNowAndSeventyPercent / sevenDayAverageAdminVaccines;
  const daysUntilEightyPercent =
    diffNowAndEightyPercent / sevenDayAverageAdminVaccines;
  const daysUntilNinetyPercent =
    diffNowAndNinetyPercent / sevenDayAverageAdminVaccines;

  // const today = moment().format("DD-MM-YYYY");
  const minusOne = moment().subtract(1, "days").format("DD-MM-YYYY");
  const minusSeven = moment().subtract(7, "days").format("DD-MM-YYYY");
  //   console.log("today", today);
  //   console.log("minusOne", minusOne);
  //   console.log("minusSeven", minusSeven);
  //   console.log("fortyPercentTotalPopulation", fortyPercentTotalPopulation);

  //   console.log("fiftyPercentTotalPopulation", fiftyPercentTotalPopulation);
  //   console.log("diffNowAndFiftyPercent", diffNowAndFiftyPercent);
  //   console.log("daysUntilFiftyPercent", daysUntilFiftyPercent);
  //   console.log("province", province);
  useEffect(() => {
    const url1 = `https://api.opencovid.ca/summary`;
    fetch(url1)
      .then((response) => response.json())
      .then((response) => {
        setDataSummary(response.summary);
        console.log("response.summary", response.summary);

        setTotalPopOneVaccineAdministered(
          province === "Quebec"
            ? parseInt(
                response.summary
                  .filter(
                    (item) => item.province.replace(/\s/g, "") === province
                  )
                  .map((items, i) => items.cumulative_avaccine)
              )
            : parseInt(
                response.summary
                  .filter(
                    (item) => item.province.replace(/\s/g, "") === province
                  )
                  .map((items) => items.cumulative_avaccine)
              ) -
                parseInt(
                  response.summary
                    .filter(
                      (item) => item.province.replace(/\s/g, "") === province
                    )
                    .map((items) => items.cumulative_cvaccine)
                )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [province]);
  //   console.log("dataSummary", dataSummary);
  //   console.log("totalPopOneVaccineAdministered", totalPopOneVaccineAdministered);

  useEffect(() => {
    const url1 = `https://api.opencovid.ca/summary?after=${minusSeven}&before=${minusOne}`;
    fetch(url1)
      .then((response) => response.json())
      .then((response) => {
        setDataSummary1(response.summary);
        // console.log("response.summary1", response.summary);
        const sevenDayAverage0 = response.summary.filter(
          (item) => item.province.replace(/\s/g, "") === province
        );

        const sevenDayAverage = (
          (sevenDayAverage0[0].avaccine -
            sevenDayAverage0[0].cvaccine +
            sevenDayAverage0[1].avaccine -
            sevenDayAverage0[1].cvaccine +
            sevenDayAverage0[2].avaccine -
            sevenDayAverage0[2].cvaccine +
            sevenDayAverage0[3].avaccine -
            sevenDayAverage0[3].cvaccine +
            sevenDayAverage0[4].avaccine -
            sevenDayAverage0[4].cvaccine +
            sevenDayAverage0[5].avaccine -
            sevenDayAverage0[5].cvaccine +
            sevenDayAverage0[6].avaccine -
            sevenDayAverage0[6].cvaccine) /
          7
        ).toFixed(2);
        setSevenDayAverageAdminVaccines(sevenDayAverage);
        // console.log("sevenDayAverage0", sevenDayAverage0);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [province, minusOne, minusSeven]);

  //   console.log("sevenDayAverageAdminVaccines", sevenDayAverageAdminVaccines);

  const useStyles = makeStyles({});

  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const rows = [
    createData(
      "40 %",
      moment()
        .add(daysUntilFortyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilFortyPercent.toFixed(0)
    ),
    createData(
      "50 %",
      moment()
        .add(daysUntilFiftyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilFiftyPercent.toFixed(0)
    ),
    createData(
      "60 %",
      moment()
        .add(daysUntilSixtyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilSixtyPercent.toFixed(0)
    ),
    createData(
      "70 %",
      moment()
        .add(daysUntilSeventyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilSeventyPercent.toFixed(0)
    ),
    createData(
      "80%",
      moment()
        .add(daysUntilEightyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilEightyPercent.toFixed(0)
    ),
    createData(
      "90%",
      moment()
        .add(daysUntilNinetyPercent.toFixed(0), "days")
        .format("DD-MM-YYYY"),
      daysUntilNinetyPercent.toFixed(0)
    ),
  ];
  const classes = useStyles();
  if (
    !dataSummary ||
    !totalPopOneVaccineAdministered ||
    !province ||
    !dataSummary1
  ) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <>
        {dataSummary
          .filter((item) => item.province.replace(/\s/g, "") === province)
          .map((items, i) => (
            <WrapperPage key={i}>
              <Text2>
                Total Vaccines Administered as of Today in {province}
                <Bold1>{items.cumulative_avaccine}</Bold1>
              </Text2>
              <Text2>
                Total Population of {province} <Bold1>{totalPopulation}</Bold1>
              </Text2>{" "}
              <AllProgressBarWrapper>
                <ProgressBarWrapper1>
                  <SemiCircleProgressBar
                    percentage={(
                      (totalPopOneVaccineAdministered / totalPopulation) *
                      100
                    ).toFixed(2)}
                    showPercentValue
                    // percentage={10}
                    stroke={"#db2a16"}
                    strokeWidth={40}
                    background={"#666566"}
                    diameter={300}
                  />
                  <Text3>
                    Currently,{" "}
                    <Bold>
                      {(
                        (totalPopOneVaccineAdministered / totalPopulation) *
                        100
                      ).toFixed(2)}
                    </Bold>
                    % of the population in {province} have been vaccinated (at
                    least one dose)
                  </Text3>
                </ProgressBarWrapper1>{" "}
              </AllProgressBarWrapper>
              <Text2>
                At the current rate of vaccine administration, the province of{" "}
                {province} will be:
              </Text2>
              <AllProgressBarWrapper>
                <ProgressBarWrapper>
                  <SemiCircleProgressBar
                    percentage={50}
                    showPercentValue
                    stroke={"#db2a16"}
                    strokeWidth={40}
                    background={"#666566"}
                    diameter={300}
                  />
                  <Text>
                    <Bold>50%</Bold> vaccinated in{" "}
                    <Bold>{daysUntilFiftyPercent.toFixed(0)} days</Bold> on the{" "}
                    <Bold>
                      {moment()
                        .add(daysUntilFiftyPercent.toFixed(0), "days")
                        .format("DD-MM-YYYY")}
                    </Bold>
                  </Text>
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                  <SemiCircleProgressBar
                    percentage={70}
                    showPercentValue
                    stroke={"#db2a16"}
                    strokeWidth={40}
                    background={"#666566"}
                    diameter={300}
                  />
                  <Text>
                    <Bold>70%</Bold> vaccinated in{" "}
                    <Bold>{daysUntilSeventyPercent.toFixed(0)} days</Bold> on
                    the{" "}
                    <Bold>
                      {moment()
                        .add(daysUntilSeventyPercent.toFixed(0), "days")
                        .format("DD-MM-YYYY")}
                    </Bold>
                  </Text>
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                  <SemiCircleProgressBar
                    percentage={90}
                    showPercentValue
                    stroke={"#db2a16"}
                    strokeWidth={40}
                    background={"#666566"}
                    diameter={300}
                  />
                  <Text>
                    <Bold>90%</Bold> vaccinated in{" "}
                    <Bold>{daysUntilNinetyPercent.toFixed(0)} days</Bold> on the{" "}
                    <Bold>
                      {moment()
                        .add(daysUntilNinetyPercent.toFixed(0), "days")
                        .format("DD-MM-YYYY")}
                    </Bold>
                  </Text>
                </ProgressBarWrapper>
              </AllProgressBarWrapper>
              <Divider />
              <TableContainer1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Percentage of Total population in {province} who are{" "}
                          vaccinated
                        </TableCell>
                        <TableCell align="center">
                          Expected date to reach population vaccination
                          administration %
                        </TableCell>
                        <TableCell align="center">
                          Expected number of days until population vaccination
                          administration % reached
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {rows.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableContainer1>
              <Divider />
            </WrapperPage>
          ))}{" "}
      </>
    </Wrapper>
  );
};
const AllProgressBarWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    resize: vertical;
    flex-wrap: nowrap;
  }
`;
const Text = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  color: #666566;
  justify-content: center;
  margin-left: 0px;
  @media (max-width: 960px) {
    width: 320px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;
const Text2 = styled.div`
  display: flex;
  margin-bottom: 40px;
  color: #666566;
  margin-left: 50px;
  @media (max-width: 960px) {
    display: flex;
    margin-left: 0px;
    margin-right: 0px;
    width: 320px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const Text3 = styled.div`
  margin-bottom: 40px;
  color: #666566;
  margin-top: 40px;
  margin-left: 50px;
  align-items: center;
  justify-content: center;
  width: 800px;
  @media (max-width: 960px) {
    margin-left: 0px;
    width: 320px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;
const TableContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 60px;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 60px;
  }
`;
const ProgressBarWrapper = styled.span`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  align-items: center;
  justify-content: center;
`;
const ProgressBarWrapper1 = styled.span`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Bold1 = styled.span`
  font-weight: 800;
  margin-left: 25px;
  @media (max-width: 960px) {
    margin-left: 10px;
  }
`;
const Bold = styled.span`
  font-weight: 800;
`;
const Wrapper = styled.div`
  width: 90%;
  padding-top: 20px;
  font-size: 20px;
`;
const WrapperPage = styled.div`
  padding-top: 20px;
  font-size: 18px;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    font-size: 16px;
    width: 100%;
  }
`;
const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 1px;
  background-color: #999999;
  margin-top: 20px;
  margin-bottom: 60px;
  margin-left: 100px;
  margin-right: 100px;
`;
export default VaccinePage;
