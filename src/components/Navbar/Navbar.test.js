import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests/helpers/rendeerWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe("navbar test", function () {
  test("about-link test", async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("main-link test", async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId("main-link");
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("users-link test", async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
