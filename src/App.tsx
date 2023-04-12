import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import "./styles/styles.scss";
import Formfield from "./components/formfield";
import Paggination from "./components/paggination";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/flexexe";
import Input from "./components/input";

import Card from "./components/card";

const App = () => {
  return (
    <div className="App">
      <Header />
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
        <div className="container--grid">
          <Card />
        </div>
        <div className="container--grid">
          <Card />
        </div>
        <div className="container--grid">
          <Card />
        </div>
        <div className="container--grid">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
