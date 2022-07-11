import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/counter";

beforeEach(() => {
  render(<Counter />);
});

describe("All Counter test cases", () => {
  test.skip("check counter is rendered", () => {
    // let result = 1 + 2;
    // expect(result).toBe(3);
    // render(<Counter />); //implicit test case
    // screen.debug();

    // const [incr, decr] = screen.getAllByRole("button");
    // expect(incr).toBeInTheDocument();
    // expect(decr).toBeInTheDocument();

    // const incrementButton = screen.getByRole("button", { name: "Increment" });
    const incr = screen.getByRole("button", { name: /increment/i });
    expect(incr).toBeInTheDocument();
  });

  test.skip("check counter incremnt by 1", () => {
    render(<Counter />);
    // screen.debug();
    // [incr, decr] = scren.getAllByRole("button");
    const incr = screen.getByRole("button", { name: /increment/i });
    userEvent.click(incr);
    userEvent.click(incr);
    const resultDiv = screen.getByText(/Current count/i);
    expect(resultDiv).toHaveTextContent(2);

    //const { container } = render(<Counter />);
    // container.getElementsByTagName
  });

  test.skip("check error when counter goes below 0", () => {
    // render(<Counter />);
    const decr = screen.getByRole("button", { name: /Decrement/i });
    userEvent.click(decr);
    let error = screen.getByText(/Count can not be less than 0/i);
    expect(error).toBeInTheDocument();
  });

  test("check error goes when counter >= 0", () => {
    // render(<Counter />);
    const decr = screen.getByRole("button", { name: /Decrement/i });
    userEvent.click(decr);
    const incr = screen.getByRole("button", { name: /Increment/i });

    userEvent.click(incr);
    const error = screen.queryByText(/Count can not be less than 0/i);
    expect(error).not.toBeInTheDocument();
  });
});
