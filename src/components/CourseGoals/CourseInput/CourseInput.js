import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length !== 0) {
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    } else {
      setValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          className={!valid ? "error" : ""}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
