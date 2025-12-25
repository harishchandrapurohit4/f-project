import "@testing-library/jest-dom";

global.fetchAPI = jest.fn(() => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
]);

global.submitAPI = jest.fn(() => true);
