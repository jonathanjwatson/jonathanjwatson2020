import React, { useState } from "react";
import NavBarBright from "../../components/NavBarBright/NavBarBright";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let validEmail = new RegExp(
      //eslint-disable-next-line
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ).test(email.value);
    if (!validEmail) {
      setEmail({ ...email, error: "Please enter a valid email address." });
      setIsLoading(false);
    } else {
      axios
        .post("/api/mail", { email: email.value, message })
        .then((response) => {
          setEmail({ value: "", error: "" });
          setMessage("");
          setResponse(response.data.message);
          setIsLoading(false);
        })
        .catch((err) => {
          setResponse(err.response.data.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <NavBarBright />
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1>Let's Connect</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center">
            <h5 style={{ color: "#a71d52" }}>{response}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col m8 offset-m2 s12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={email.value}
                    onChange={(e) => {
                      setEmail({ ...email, value: e.target.value });
                    }}
                  />
                  <label htmlFor="email">Your Email Address</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                    style={{ color: "#a71d52" }}
                  >
                    {email.error}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    className="materialize-textarea"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12 center-align">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    disabled={isLoading}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
