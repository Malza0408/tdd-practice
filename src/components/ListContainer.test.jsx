import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import ListContainer from "./ListContainer";
import tasks from "../tasks";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";

jest.mock("react-redux");

describe("ListContainer", () => {
  it("renders tasks", () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation(() => {
      return tasks;
    });
    const { container, getAllByText } = render(<ListContainer />);

    expect(container).toHaveTextContent("강아지는 귀엽다!");

    const buttons = getAllByText("완료");

    userEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 },
    });
  });
});
