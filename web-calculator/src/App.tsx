import React from 'react';
import './App.css';
import ReactGA from "react-ga4";

ReactGA.initialize("G-QR20Y9QDY0");
ReactGA.send("pageview");

function App() {
  return (
    <html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</head>
<body>
<div className="header">
  <h1><button className="buttonx title" role="button">Web Calulator</button></h1>
  <p></p>
</div>
<div className="row">
  <div className="leftcolumn">
    <div className="wrapper">
    <button className="buttonx classic" role="button">Classic</button>
    <button className="buttonx matrix" role="button">Matrix</button>
    <button className="buttonx simequations" role="button">Simultaneous equations</button>
    <button className="buttonx polynomials" role="button">Polynomials</button>
    <button className="buttonx probability" role="button">Probability distributions</button>
    <button className="buttonx vectors" role="button">Vectors</button>
    <button className="buttonx physics" role="button">Physics</button>
    <button className="buttonx finance" role="button">Finance</button>
    <button className="buttonx conversion" role="button">Conversion</button>
    </div>
  </div>
  <div className="rightcolumn">
  <div className="card">
      <h2>Ad 1</h2>
      <div className="fakeimg">Image</div>
      <p>buy this</p>
    </div>
    <div className="card">
      <h3>Ad 2</h3>
      <div className="fakeimg"><p>Image</p></div>
    </div>
    <div className="card">
      <h3>Ad 3</h3>
      <p>buy that</p>
    </div>
  </div>
</div>
<div className="links">
  <a href="https://github.com/Cillian2113"><img src={require('./github-logo.png')} /></a>
</div>

</body>
</html>
  );
}

export default App;
