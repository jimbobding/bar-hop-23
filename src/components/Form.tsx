import { useState } from "react";

const Form: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("fast");
  const [calsBun, setCalsBun] = useState<number | string>("");
  const [name, setName] = useState<string>("");

  const handleGetSpeed = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    const weightValue = parseFloat(weight);
    const timeValue = parseFloat(time);
    const dropdownValue = parseFloat(dropdown);

    // Check if the parsed values are valid numbers
    if (isNaN(weightValue) || isNaN(timeValue) || isNaN(dropdownValue)) {
      setCalsBun("Invalid input");
    } else {
      const calculatedCalsBun =
        ((dropdownValue * 3.5 * weightValue) / 200) * timeValue;
      setCalsBun(Math.ceil(calculatedCalsBun));
    }
  };

  return (
    <>
      <div className="row">
        <div className="column col2">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-25">
                  <label>Name</label>
                </div>
                <div className="col-75">
                  {" "}
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name..."
                    type="text"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Weight</label>
                </div>
                <div className="col-75">
                  <input
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight in kg's"
                    type="text"
                    name="weight"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Time</label>
                </div>
                <div className="col-75">
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time"
                    type="text"
                    name="time"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Walking Speed</label>
                </div>
                <div className="col-75">
                  <select
                    value={dropdown}
                    onChange={(e) => {
                      setDropdown(e.target.value);
                    }}
                  >
                    <option value="2.3">Slow: 1.7 mph</option>
                    <option value="2.5">Medium: 2.9 mph</option>
                    <option value="3.3">Fast: 3 mph</option>
                    <option value="3.8">Faster 3.6 mph </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <input
                  className="submitBtn"
                  onClick={handleGetSpeed}
                  type="submit"
                />
              </div>

              <div className="row"></div>
            </form>
          </div>
        </div>
        <div className="column col1">
          <div className="card">
            <div className="container">
              <h4>
                <b className="name">{name}</b>
              </h4>
              <p>
                You burn {calsBun} calories on a {""}
                {time} minute walk{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
