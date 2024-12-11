/* eslint-disable react/prop-types */
// style
import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ addUser, SetShowModal }) {
  const [datas, setDatas] = useState({
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    image: "",
    job: "",
    gender: "",
    id: uuidv4(),
  });

  //submit handle
  const submitHandle = (e) => {
    e.preventDefault();
    addUser(datas);
    SetShowModal(false);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={submitHandle}>
            <label>
              <span>Image URL:</span>
              <input
                type="url"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, image: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                type="number"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>From:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setDatas((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    setDatas((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    setDatas((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
