 
import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
  CImg,
} from "@coreui/react";
import logoAuth from "../../../assets/logo_auth.png";
import APIGateway from "../../../utils/ApiCall";
import navigation from "../../../containers/_nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recaptcha from "react-google-invisible-recaptcha";
import cookie from "react-cookies";
import { getSelectedChild } from "../../../utils/Utils";
import { Nav, NavItem } from "react-bootstrap";
import { NonceProvider } from "react-select";
// import { seal } from "core-js/library/es7/object";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      err_msg: "",
      errors: {
        email: false,
        password: false,
      },
      response: "",
    };
  }
  toast = (type, msg) => {
    toast[type](msg);
  };
  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = () => {
    // this.recaptcha.execute()
    var re = /\S+@\S+\.\S+/;
    var { email, password } = this.state;
    var self = this;
    if (email === "" || !re.test(email))
      self.toast("error", "Please enter valid email");
    else if (password === "") self.toast("error", "Please enter password");
    else{
      "Success"
    }
    // else if (email && password) {
    //   var dataToSend = {
    //     email: email,
    //     password: password,
    //   };
    //   APIGateway.post("admin/auth/login", dataToSend, function (response) {
    //     if (response.success) {
    //       self.recaptcha.execute();
    //       var token = response.data.token;
    //       var adminData = response.data.admin;
    //       cookie.save("shoppy_admin", token, { path: "/", maxAge: 172800 });
    //       cookie.save("shoppy_adminType", adminData.admin_type, {
    //         path: "/",
    //         maxAge: 172800,
    //       });
    //       // cookie.save("shoppy_edit", adminData.is_edit ? 520997 : 799025, {
    //       //   path: "/",
    //       //   maxAge: 172800,
    //       // });
    //       localStorage.setItem(
    //         "admin_data",
    //         JSON.stringify({
    //           id: adminData.admin_id,
    //           name: adminData.username,
    //           type: adminData.admin_type,
    //           modules: adminData.role.modules,
    //           cities: adminData.cities,
    //         })
    //       );

    //       var nav = navigation;
    //       var admin = adminData;
    //       let items = {};
    //       let getModules = {};
    //       if (admin !== null) {
    //         let { modules } = admin.role;
    //         let result = [];
    //         let moduleArray = [];
    //         let resultItem;
    //         if (admin.admin_type === "sub_admin") {
    //           result = nav.filter((o1) =>
    //             modules.some((o2) => o1.key === o2.main)
    //           );
    //           for (let r = 0; r < result.length; r++) {
    //             resultItem = result[r];
    //             let children = [];
    //             for (let h = 0; h < modules.length; h++) {
    //               let module = modules[h];
    //               for (let j = 0; j < module.childs.length; j++) {
    //                 let child = module.childs[j];
    //                 getSelectedChild(child, resultItem);
    //                 if (
    //                   resultItem._children &&
    //                   resultItem._children.length > 0
    //                 ) {
    //                   for (let k = 0; k < resultItem._children.length; k++) {
    //                     let selectedChild = resultItem._children[k];
    //                     if (child === selectedChild.key) {
    //                       children.push(selectedChild);
    //                     }
    //                     getSelectedChild(child, selectedChild);
    //                   }
    //                 }
    //               }
    //             }
    //             if (children.length > 0) resultItem._children = children;
    //             moduleArray.push(resultItem);
    //           }
    //           items["items"] = moduleArray;
    //           getModules["getModules"] = modules;
    //           localStorage.setItem("items", JSON.stringify(items));
    //           localStorage.setItem("getModules", JSON.stringify(getModules));
    //         } else if (admin.admin_type === "admin") {
    //           items["items"] = nav;
    //           localStorage.setItem("items", JSON.stringify(items));
    //         }
    //       }
    //       window.location.reload();
    //     } else {
    //       self.toast("error", response.message);
    //       self.recaptcha.reset();
    //     }
    //   });
    // }
  };
  onResolved = () => {
    let self = this;
    self.recaptcha.getResponse();
  };
  onkeyDown = (e) => {
    if (e.key === "Enter") this.onSubmit();
  };
  render() {
    var { email, password, err_msg, errors } = this.state;

    return (
      <div className="whole-page">
        <div className="c-app c-default-layout flex-row Auth-page">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <CContainer>
            <CImg src={logoAuth} alt="logo" className="logo-auth" />
            <div className="logo-name">Admin</div>
            <CRow className="justify-content-center">
              <CCol md="5">
                <CCardGroup>
                  <CCard className="p-4 auth">
                    <CCardBody>
                      <Recaptcha
                        ref={(ref) => (this.recaptcha = ref)}
                        sitekey="6LfJpo4bAAAAAJ87_S9YT369LkEy_F4sveVG04RV"
                        onResolved={this.onResolved}
                        // badge="bottomleft"
                      />
                      <CForm>
                        <div className="auth-heading">Let's Get Start</div>
                        <CInputGroup className="mb-3">
                          <CInput
                            type="text"
                            placeholder="Email"
                            autoComplete="email"
                            name="email"
                            value={email}
                            onChange={this.onChangeHandler}
                            onKeyDown={this.onkeyDown}
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            name="password"
                            value={password}
                            onChange={this.onChangeHandler}
                            onKeyDown={this.onkeyDown}
                          />
                          <label
                            className={
                              errors.password ? "show_err" : "hide_err"
                            }
                          >
                            {err_msg}
                          </label>
                        </CInputGroup>
                        <CButton
                          className="auth-button"
                          onClick={() => this.onSubmit()}
                        >
                          Submit
                        </CButton>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </div>
    );
  }
}