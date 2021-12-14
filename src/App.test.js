import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import App from "./App";
import tasks from "./tasks";

jest.mock("react-redux");

describe("App", () => {
  it("renders tasks", () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation(() => {
      return tasks;
    });
    const { container } = render(<App />);

    expect(dispatch).toBeCalled();
    expect(container).toHaveTextContent("강아지는 귀엽다!");
  });
});
