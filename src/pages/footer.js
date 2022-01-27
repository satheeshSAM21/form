import React from "react";
import "../components/dashboard.css";
export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>
          <div className="foot">
            <div className="footer">
              <div className="f1">
                <p>CREATIVE TIM</p>
                <p>ABOUT US</p>
                <p>BLOG</p>
                <p>LICENSES</p>
              </div>
              <div className="f1">
                <p>
                  © 2022 , made with favorite by{" "}
                  <span style={{ color: "white" }}>Creative Tim </span>for a
                  better web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
