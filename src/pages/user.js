import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./user.css";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Navbar2 from "./Navbar2";

export default function Demo() {
  const { id } = useParams();

  // const [user, setUser] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("API CALLING ::::::");
    // apicall
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data);
    //   });
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <div className="dash">
          <Sidebar />
        </div>
        <div className="Main" style={{ height: "100vh", padding: "10px 30px" }}>
          <div>
            <Navbar2 />
          </div>

          <div style={{ marginBottom: "545px" }}>
            <div>
              <div className="stu1">
                <div className="detail">
                  <h5 className="style">Name:</h5>
                  <p className="style">{data.name && data.name}</p>
                </div>
                <div className="detail">
                  <h5 className="style">Email:</h5>
                  <p className="style">{data.email && data.email}</p>
                </div>
              </div>
              <div className="stu1">
                <div className="detail">
                  <h5 className="style">Address:</h5>
                  <p className="style">
                    {data.address && data.address.city && data.address.city}
                  </p>
                </div>
                <div className="detail">
                  <h5 className="style">Phone:</h5>
                  <p className="style">{data.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
