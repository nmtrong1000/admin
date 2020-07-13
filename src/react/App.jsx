import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import css from "@assets/scss/layout/index.scss";

import Navigation from "@react/layout/Navigation.jsx";
import Header from "@react/layout/Header.jsx";

import Dashboard from "@react/page/Dashboard.jsx";
import ButtonPage from "@react/page/ButtonPage.jsx";
import InputPage from "@react/page/InputPage.jsx";

const navLinks = [
  {
    name: "Buttons",
    icon: "success",
    url: "/button",
  },
  {
    name: "Input",
    icon: "success",
    url: "/input",
  },
  {
    name: "Parent 01",
    icon: "success",
    childrens: [
      {
        name: "Child 01",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 02",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 03",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 04",
        icon: "success",
        url: "/"
      },
    ],
  },
  {
    name: "Parent 02",
    cap: "IA",
    url: "/"
  },
  {
    name: "Parent 03",
    icon: "success",
    childrens: [
      {
        name: "Child 01",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 02",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 03",
        icon: "success",
        url: "/"
      },
      {
        name: "Child 04",
        icon: "success",
        url: "/"
      },
    ],
  },
];

const App = () => {
  const [toggleNav, setToggleNav] = useState( false );
  return(
    <HashRouter>
      <Header toggle={ toggleNav } />
      <main className={ `${ css.index } ${ toggleNav ? css.index__min: "" }` }>
        <div className={ css.index__nav }>
          <button className={ css.index__btn } onClick={ e => setToggleNav( !toggleNav ) }></button>
          <Navigation links={ navLinks } toggle={ toggleNav } />
        </div>
        <div className={ css.index__main }>
          <Switch>
            <Route path="/" exact component={ Dashboard } />
            <Route path="/button" exact component={ ButtonPage } />
            <Route path="/input" exact component={ InputPage } />
          </Switch>
        </div>
      </main>
    </HashRouter>
  );
};

export default App;