import Header from "./components/header";

import "./styles/styles.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0205 from "./pages/vjezba0205";
import Vjezba0305 from "./pages/vjezba0305";
import Breweries from "./pages/breweries";
import Pokemon from "./pages/pokemon";

import Europe from "./pages/europe";
import Africa from "./pages/africa";
import Vjezba1505 from "./pages/vjezba1510";
import Todo from "./pages/todo";
import Ispitjava from "./pages/ispitjava";
import Ufc from "./pages/ufc";
import Bootstrap from "./pages/bootstrap";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/vjezba0205",
      element: <Vjezba0205 />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemon",
      element: <Pokemon />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/africa",
      element: <Africa />,
    },
    {
      path: "/vjezba1510",
      element: <Vjezba1505 />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/ispitjava",
      element: <Ispitjava />,
    },
    {
      path: "/ufc",
      element: <Ufc />,
    },
    {
      path: "/bootstrap",
      element: <Bootstrap />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
