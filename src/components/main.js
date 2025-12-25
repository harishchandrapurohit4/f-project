import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI } from "../api";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

function Main() {
  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <BookingForm submitForm={submitForm} />
    </main>
  );
}

export default Main;
