import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render Hello World", () => {
    // arrange
    render(<Greeting />);

    // act

    // assert
    const helloWorldEl = screen.getByText("Hello World", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("Nice to meet you", () => {
    // arrange
    render(<Greeting />);

    // act

    // assert
    const niceToMeetYouEl = screen.getByText("Nice to meet you", {
      exact: false,
    });
    expect(niceToMeetYouEl).toBeInTheDocument();
  });

  test("render after btn click", () => {
    // arrange
    render(<Greeting />);
    // act
    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);
    // assert
    const anotherParagraphEl = screen.getByText("Another paragraph", {
      exact: false,
    });
    expect(anotherParagraphEl).toBeInTheDocument();
  });

  test("notRender after btn click", () => {
    // arrange
    render(<Greeting />);
    // act
    const btnEl = screen.getByRole("button");
    userEvent.click(btnEl);
    // assert
    const notRenderEl = screen.queryByText("Nice to meet you", {
      exact: false,
    });
    expect(notRenderEl).toBeNull();
  });
});
