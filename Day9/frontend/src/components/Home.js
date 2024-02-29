// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my website.</p>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/tools">Tools</Link>
    </div>
  );
}

export default Home;
