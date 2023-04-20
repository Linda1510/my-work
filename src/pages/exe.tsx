import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/card";
import Card2 from "../components/card2";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/flexexe";
import Formfield from "../components/formfield";

import Input from "../components/input";
import Navigation from "../components/navigation";
import Paggination from "../components/paggination";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <div className="container">
      <Navigation />
      <Button value="Animate me" animate={true} />
      <Button />
      <Checkbox />
      <Formfield />
      <Paggination />
      <div className="container--component">
        <TransformExe />

        <h2>Transform property excersise</h2>
        <h4>Translate</h4>
        <div className="box box--translate"></div>
      </div>
      <div className="flexExe"></div>
      <FlexExe />
      <h4>FlexExe</h4>

      <div className="container">
        <div className="container--component">
          <h2>Input</h2>
          <Input label="first name" validation="my name" />
          <Input label="last name" rounded={true} />
        </div>
      </div>
      <div className="container">
        <div className="container__grid">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container">
        <div className="container__grid2">
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default Exe;
