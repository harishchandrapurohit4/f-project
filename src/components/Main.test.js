import { initializeTimes, updateTimes } from "./main";

test("initializeTimes returns non-empty array", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns non-empty array for selected date", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: "2025-01-01"
  };

  const result = updateTimes(state, action);
  expect(result.length).toBeGreaterThan(0);
});
