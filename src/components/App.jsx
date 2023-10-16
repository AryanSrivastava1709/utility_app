import { useState } from "react";
import Login from "./Login";
import Main from "./Main";
import toast from "react-hot-toast";
const userDetails = [
  {
    name: "Aryan",
    password: "WESTeast",
    key: 1,
  },
  {
    name: "Sayiam",
    password: "WESTeast1",
    key: 2,
  },
  {
    name: "Rishi",
    password: "WESTeast2",
    key: 3,
  },
  {
    name: "Pulkit",
    password: "WESTeast3",
    key: 4,
  },
];
export default function App() {
  const [page, setPage] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function handlleLogin(e) {
    userDetails.map((user) => {
      if (
        name.toLowerCase() === user.name.toLowerCase() &&
        password.toLowerCase() === user.password.toLowerCase()
      ) {
        setPage("Main");
        e.preventDefault();
        toast.success("You are logged in");
      } else {
        toast.error("You are not registered");
      }
    });
  }
  if (page === "Login") {
    return (
      <Login
        onChangePage={handlleLogin}
        name={name}
        onChangeName={setName}
        password={password}
        onChangePassword={setPassword}
      />
    );
  }
  if (page === "Main") {
    return <Main name={name} />;
  }
}
