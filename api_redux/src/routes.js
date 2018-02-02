import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "",
  }
];

export default routes;
