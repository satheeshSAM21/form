import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
export const login = () => {
    const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onLoginUpdate(true);
        navigate("/");
      }}
    >
      Login
    </button>
  );
};
