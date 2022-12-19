import { render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";

jest.mock("axios");

describe("Users test", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
        },
      ],
    };
  });
  test("mock axios", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
