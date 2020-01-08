import React from "react";
import axios from "axios";
import "./App.scss";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import SearchForm from "./SearchForm";
import ActiveRequests from "./ActiveRequests";
import useVisualMode from "./hooks/useVisualMode";
import SideBar from "./SideBar";
import RegisterABusiness from "./RegisterABusiness";

const LANDINGPAGE = "LANDINGPAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const HOMEPAGE = "HOMEPAGE";
const SEARCHFORM = "SEARCHFORM";
const ACTIVEREQUESTS = "ACTIVEREQUESTS";
const REGISTERABUSINESS = "REGISTERABUSINESS";

function App() {
  const { mode, transition, back } = useVisualMode(REGISTER);


  return (
    <main className="layout">
      {mode !== LANDINGPAGE && mode !== REGISTER && mode !== LOGIN && (
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          RegisterABusiness={RegisterABusiness}
          transition={transition}
        />
      )}

      {(mode === REGISTER ||
        mode === LOGIN ||
        mode === SEARCHFORM ||
        mode === ACTIVEREQUESTS) && (
        <i
          className="far fa-arrow-alt-circle-left back"
          onClick={() => back()}
        />
      )}
      {mode === LANDINGPAGE && (
        <LandingPage
          transition={transition}
          login={LOGIN}
          register={REGISTER}
        />
      )}
      {mode === LOGIN && <LoginPage />}
      {mode === REGISTER && <RegisterPage />}
      {mode === HOMEPAGE && (
        <HomePage
          transition={transition}
          searchForm={SEARCHFORM}
          activeRequests={ACTIVEREQUESTS}
        />
      )}

      {mode === SEARCHFORM && <SearchForm />}

      {mode === ACTIVEREQUESTS && <ActiveRequests transition={transition} />}

      {mode === REGISTERABUSINESS && <RegisterABusiness />}
    </main>
  );
}

export default App;
