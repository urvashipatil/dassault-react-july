import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CustomInputApp from "./custom-input-app";
import axios from "axios";

beforeEach(() => {
  render(<CustomInputApp />);
});

test.skip("Render Custom Input App", () => {
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test.skip("Typed text will get displayed on the screen", async () => {
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Dassault" } });

  // const para = screen.getByRole("paragraph");

  // screen.getByText(/Dassault/i);

  await screen.findByText(/Dassault/i);
  screen.debug();
});

test.skip("testing user.name with api call is displaying on the screen", async () => {
  await screen.findByText(/harry/i);
  screen.debug();
});

test.skip("testing user.name with api call is displaying on the screen", async () => {
  await waitFor(() => screen.getByText(/harry/i));
  screen.debug();
});

test("mock api", async () => {
  axios.get = jest.fn();
  axios.get.mockResolvedValue({
    data: [{ name: "Mannavi", city: "Mumbai" }],
  });
  render(<CustomInputApp />);
  await waitFor(() => screen.getByText(/Mannavi/i));
  screen.debug();
});

//mock the fetch
//  global.fetch = jest.fn(() =>
//  Promise.resolve({
//    json: () =>
//      Promise.resolve([{ name: "Mannavi", city: "Mumbai" }]),
//  })
