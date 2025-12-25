import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders Choose date label", () => {
  render(
    <BookingForm submitForm={jest.fn()} />
  );

  expect(screen.getByText("Choose date")).toBeInTheDocument();
});
