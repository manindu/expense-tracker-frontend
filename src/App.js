import React from "react";
import { Router } from "@reach/router";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
