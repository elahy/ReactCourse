import React, { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <div>Hi bye</div>
      {user}
    </div>
  );
}

export default App;
