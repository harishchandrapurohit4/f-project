
import { initializeTimes, updateTimes } from "./main";

// ✅ mock the correct router package
jest.mock("react-router", () => ({
  useNavigate: () => jest.fn(),
}));

test("initializeTimes returns available times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns updated times", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: "2025-01-01",
  };

  const result = updateTimes(state, action);
  expect(result.length).toBeGreaterThan(0);
});
