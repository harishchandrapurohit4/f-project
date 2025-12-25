// src/api.js

export const fetchAPI = (date) => {
  let times = [];
  for (let i = 17; i <= 23; i++) {
    times.push(`${i}:00`);
    times.push(`${i}:30`);
  }
  return times;
};

export const submitAPI = (formData) => {
  return true;
};
