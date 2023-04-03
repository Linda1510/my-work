import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import "./styles/styles.scss";
import Formfield from "./components/formfield";
import Paggination from "./components/paggination";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/flexexe";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
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

      <div className="container"></div>
    </div>
  );
};

export default App;
