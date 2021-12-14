import { render } from "@testing-library/react";
import List from "./List";
import tasks from "../tasks";
import context from "jest-plugin-context";
import userEvent from "@testing-library/user-event";

describe("List", () => {
  const handleClick = jest.fn();
  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }
  context("with tasks", () => {
    it("renders tasks", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("강아지는 귀엽다!");
      expect(container).toHaveTextContent("고양이는 귀엽다!");
    });

    it("renders '완료' buttons to delete a task", () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText("완료");

      userEvent.click(buttons[0]);

      expect(handleClick).toBeCalledWith(1);
    });
  });

  context("without tasks", () => {
    it("renders no task message", () => {
      const emptyTask = [];
      const { container } = renderList(emptyTask);

      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
