import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      )
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "Employee", data: employee })
        );
      }
    } else {
      alert("invalid credintials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard  changeUser={setUser}/>
      ) : user == "employee" ? (
        <EmployeeDashboard />
      ) : null}
    </>
  );
};

export default App;
