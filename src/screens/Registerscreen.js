import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/UserActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Registerscreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const registerstate = useSelector((state) => state.registerUserReducer) || {};
  const { loading, success, error } = registerstate;

  // const error = registerstate && registerstate.error;
  // const loading = registerstate && registerstate.loading;
  // const success = registerstate && registerstate.success;

  function register() {
    if (password != cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
      alert("User Registered succesfully");
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: "35px" }}>Register</h2>
          {loading && <Loading />}
          {success && <Success success="User is successfully registered" />}
          {error && <Error error="Email already registered" />}
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="E-mail"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>{" "}
            <br />
            <a style={{ color: "black" }} href="/login">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
