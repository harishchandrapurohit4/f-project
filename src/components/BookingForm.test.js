import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("JavaScript form validation", () => {
  test("submit button is disabled when form is invalid", () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("submit button is enabled when form is valid", () => {
    render(
      <BookingForm availableTimes={["17:00", "18:00"]} />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-01-01" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).not.toBeDisabled();
  });

  test("form submission calls submitForm when valid", () => {
    const mockSubmit = jest.fn();

    render(
      <BookingForm
        availableTimes={["17:00"]}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-01-01" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /make your reservation/i,
      })
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
