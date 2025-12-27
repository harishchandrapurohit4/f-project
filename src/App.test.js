import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import App from "./App";

test("renders the App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
