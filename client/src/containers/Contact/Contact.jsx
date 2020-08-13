import React, { useState } from "react";
import NavBarBright from "../../components/NavBarBright/NavBarBright";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="col s8 offset-s2">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Your Email Address</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
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
