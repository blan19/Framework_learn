import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");

  const increaseButton = screen.getByTestId("increase");
  expect(increaseButton).toHaveTextContent("+");
});

test("increase button has correct text", () => {
  render(<App />);

  const increaseButton = screen.getByTestId("increase");
  expect(increaseButton).toHaveTextContent("+");
});

test("decrease button has correct text", () => {
  render(<App />);

  const decreaseButton = screen.getByTestId("decrease");
  expect(decreaseButton).toHaveTextContent("-");
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);

  const increaseButton = screen.getByTestId("increase");

  fireEvent.click(increaseButton);

  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent("1");
});

test("when the - button is pressed, the counter changes to 2", () => {
  render(<App />);

  const decreaseButton = screen.getByTestId("decrease");

  fireEvent.click(decreaseButton);

  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent("-1");
});

test("on/off button has blue color and correct text", () => {
  render(<App />);

  const disableButton = screen.getByTestId("disable");
  expect(disableButton).toHaveStyle({ backgroundColor: "blue" });
  expect(disableButton).toHaveTextContent("on/off");
});

test("when on/off button is pressed, the on/off button change in/decrease button actiove state", () => {
  render(<App />);

  const disableButton = screen.getByTestId("disable");

  fireEvent.click(disableButton);
  const increaseButton = screen.getByTestId("increase");
  expect(increaseButton).toBe(disableButton);
  const decreaseButton = screen.getByTestId("decrease");
  expect(decreaseButton).toBe(disableButton);
});
