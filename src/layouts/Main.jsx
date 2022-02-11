import React from "react";

import { Routes, Route } from "react-router-dom";

import routes from "../routes";

const Main = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} key={key} element={<prop.element />} />;
    });
  };

  return (
    <div>
      <Routes>{getRoutes(routes)}</Routes>
    </div>
  );
};

export default Main;
