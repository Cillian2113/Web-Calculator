import React from 'react';
import './App.css';

function App() {
  return (
    <html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</head>
<body>

<div className="header">
  <h1>Web Calculator</h1>
  <p></p>
</div>
<div className="row">
  <div className="leftcolumn">
    <div className="wrapper">
    <button className="button-79" role="button">Classic</button>
    <button className="button-79" role="button">Matrix</button>
    <button className="button-79" role="button">Simultaneous equations</button>
    <button className="button-79" role="button">Polynomials</button>
    <button className="button-79" role="button">Probability distributions</button>
    <button className="button-79" role="button">Vectors</button>
    <button className="button-79" role="button">Physics</button>
    <button className="button-79" role="button">Finance</button>
    <button className="button-79" role="button">Conversion</button>
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
