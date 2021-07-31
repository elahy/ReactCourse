import React, { useEffect, useState } from "react";
import Members from "./Components/Members";
import AddMember from "./Components/AddMember";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import Loading from "./Components/Loading";
import NotFound from "./Components/NotFound";
import MemberDetails from "./Components/MemberDetails";
import data from "./data";
import { Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
            <Members member={data.members} />
          </Route>
          <Route path="/member/:id">
            <MemberDetails />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
