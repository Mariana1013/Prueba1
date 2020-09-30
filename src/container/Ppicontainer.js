import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Inicio from "../components/Inicio";
import Card from "../components/Card";

export default function Ppiconainer() {
  return (
    <BrowserRouter>
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Card" exact component={Card} />
      <Route path="/" exact component={Inicio} />
    </BrowserRouter>
  );
}
