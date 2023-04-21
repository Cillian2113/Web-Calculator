import React from 'react';
import './App.css';

function App() {
  return (
    <html>
<head>

</head>
<body>

<div className="header">
  <h1>Web Calculator</h1>
  <p></p>
</div>



<div className="row">
  <div className="leftcolumn">
    <div className="wrapper">
    <button className="button-64" role="button"><span className="text">Button 64</span></button>
    <button className="button-64" role="button"><span className="text">Button 64</span></button>
</div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg"><p>Image</p></div>
      <div className="fakeimg"><p>Image</p></div>
      <div className="fakeimg"><p>Image</p></div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

<div className="topnav">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</div>

</body>
</html>
  );
}

export default App;
