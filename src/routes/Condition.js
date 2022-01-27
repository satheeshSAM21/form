import cookie from "react-cookies";

export default function () {
  if (
    cookie.load("token") === "" ||
    cookie.load("token") === undefined ||
    cookie.load("token") === null
  ) {
    return false;
  } else {
    return true; 
  }
}
