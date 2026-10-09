import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import store from "../features/store";

test("renders 25 + 5 Clock title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/25 \+ 5 Clock/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders BreakControl component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const breakControlElement = screen.getByText(/Break Length/i);
  expect(breakControlElement).toBeInTheDocument();
});

test("renders SessionControl component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const sessionControlElement = screen.getByText(/Session Length/i);
  expect(sessionControlElement).toBeInTheDocument();
});

test("renders TimerControl component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const startStopButton = screen.getByText(/Start/i);
  const resetButton = screen.getByText(/Reset/i);
  expect(startStopButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});
