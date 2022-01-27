import React, { Component } from "react";
import "../components/dashboard.css";
import cookie from "react-cookies";

export default class Navbar2 extends Component {
  constructor() {
    super();
  }
  logout = () => {
    cookie.remove("token");
    window.location.href = "/#/";
    window.location.reload();
  };
  render() {
    return (
      <>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ fontSize: "18px" }}>Students Details </h2>
            </div>
            <button className="btn btn-primary" onClick={this.logout}>
              logout
            </button>
          </div>
        </div>
      </>
    );
  }
}
