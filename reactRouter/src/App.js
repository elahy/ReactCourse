import React, { useEffect, useState } from "react";
import Members from "./Components/Members";
import AddMember from "./Components/AddMember";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import Loading from "./Components/Loading";
import NotFound from "./Components/NotFound";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [member, setMember] = useState([
    {
      _id: 1,
      name: "Abid Hasan",
      education: "BSc in CSE",
      age: 25,
      address: "Don Chamber, Narayanganj",
      image: "/images/sp1.jpg",
      phone: "01431298096",
    },
    {
      _id: 2,
      name: "Sakib Rahman",
      education: "HSC in Science",
      age: 19,
      address: "Changao, Kushtia",
      image: "/images/sp2.jpg",
      phone: "01531298378",
    },
    {
      _id: 3,
      name: "Aakash Haque",
      education: "BSc in EEE",
      age: 26,
      address: "Necklace",
      image: "/images/sp3.jpg",
      phone: "01312983429",
    },
    {
      _id: 4,
      name: "Rafiq Shikder",
      education: "BSc in CSE",
      age: 29,
      address: "Baluchar, Munshiganj",
      image: "/images/sp4.jpg",
      phone: "01731298942",
    },
    {
      _id: 5,
      name: "Al Amin Hasan",
      education: "BBA in Management",
      age: 25,
      address: "AB Housing, Khulna",
      image: "/images/sp5.jpg",
      phone: "01631759373",
    },
    {
      _id: 6,
      name: "Othoi Das",
      education: "BSc in CSE",
      age: 25,
      address: "Malibag, Dhaka",
      image: "/images/sp6.jpg",
      phone: "01931298342",
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/join">
            <AddMember />
          </Route>
          <Route path="/memberlist">
            <Members member={member} />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/nf">
            <NotFound />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
