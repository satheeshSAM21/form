import React from "react";
import "../components/dashboard.css";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillTablet, AiOutlineFileText } from "react-icons/ai";
import { MdDashboard, MdBubbleChart } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { GiArmorUpgrade } from "react-icons/gi";
import cookie from "react-cookies";

export default class Sidebar extends React.Component {
  constructor() {
    super();
  }
  logOut = ()=>{
    cookie.remove('token');
    window.location.reload();
 }
  render() {
   
    return (
      <>
        <div>
          <div className="color">
            <div className="Sidebar">
              <h3>CREATIVE TIM</h3>

              <p className="active">
                <MdDashboard className="icon" /> Dashboard
              </p>
              <p>
                <FaUserAlt className="icon" /> User Profile
              </p>
              <p>
                <AiFillTablet className="icon" /> Table List
              </p>
              <p>
                <AiOutlineFileText className="icon" />
                Typography
              </p>
              <p>
                <MdBubbleChart className="icon" /> Icons
              </p>
              <p>
                <FaMapMarkerAlt className="icon" />
                Maps
              </p>
              <p>
                <IoIosNotifications className="icon" /> Notifications
              </p>
              <button className="logout"  onClick={() => this.logOut()}>Logout</button>
              <p style={{ marginTop: "310px" }}>
                <GiArmorUpgrade className="icon" /> Upgrade To PRO
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
