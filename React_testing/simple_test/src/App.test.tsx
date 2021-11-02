import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);

  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent("0");
});

test("plus button has correct text", () => {
  render(<App />);

  const plusButtonElement = screen.getByTestId("plus-button");

  expect(plusButtonElement).toHaveTextContent("+");
});

test("minus button has correct text", () => {
  render(<App />);

  const minusButtonElement = screen.getByTestId("minus-button");

  expect(minusButtonElement).toHaveTextContent("-");
});

test("when plus button is clicked, the counter change to 1", () => {
  render(<App />);

  const plusButtonElement = screen.getByTestId("plus-button");

  fireEvent.click(plusButtonElement);

  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent("1");
});

test("when minus button is clicked, the counter change to -1", () => {
  render(<App />);

  const minusButtonElement = screen.getByTestId("minus-button");

  fireEvent.click(minusButtonElement);

  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent("-1");
});

test("on/off button has correct text", () => {
  render(<App />);

  const disableButtonElement = screen.getByTestId("disable-button");

  expect(disableButtonElement).toHaveTextContent("on/off");
});

test("the on/off button color is correct", () => {
  render(<App />);

  const disableButtonElement = screen.getByTestId("disable-button");

  expect(disableButtonElement).toHaveStyle({ backgroundColor: "gray" });
});

test("prevent the plus and minus button from being pressed when the on/off button is clicked", () => {
  render(<App />);

  const disableButtonElement = screen.getByTestId("disable-button");

  fireEvent.click(disableButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");

  expect(plusButtonElement).toBeDisabled();
});

export {};
