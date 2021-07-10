import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First Fake" },
        { id: "p2", title: "Second Fake" },
      ],
    });
    // arrange
    render(<Async />);
    // action
    const listItemEls = await screen.findAllByRole("listitem");
    // assert
    expect(listItemEls).not.toHaveLength(0);
  });
});
