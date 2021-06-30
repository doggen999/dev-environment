import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(), 1000);
    });
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
