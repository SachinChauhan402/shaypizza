import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/UserActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: "35px" }}>Login</h2>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <div>
            <input
              required
              type="text"
              placeholder="E-mail"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                {
                  setPassword(e.target.value);
                }
              }}
            />
            <button onClick={login} className="btn mt-3 mb-3">
              Login
            </button>{" "}
            <br />
            <a style={{ color: "black" }} href="/register">
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
