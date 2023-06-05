import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from "./store/index";
import App from './App';


test("renders learn react link / Buscar texto cuando renderiza", () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const textElement = screen.getByText(/¡Atrápalos a todos!/i);

  expect(textElement).toBeInTheDocument();
});