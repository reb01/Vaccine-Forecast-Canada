import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import VaccinePage from "./VaccinePage";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Wrapper2>
          <Sidebar />
          <Switch>
            <Route exact path="/vaccinepage/:province">
              <VaccinePage />
            </Route>
          </Switch>
        </Wrapper2>
        <Footer />
      </Router>{" "}
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`;
const Wrapper2 = styled.div`
  display: flex;
`;

export default App;
