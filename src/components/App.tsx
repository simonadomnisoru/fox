import React from "react";
import "../style/App.css";
import Posts from "./Posts";
import Create from "./Create";

const App = () => (
  <React.Fragment>
    <Posts /> <Create />
  </React.Fragment>
);

export default App;
