import React from 'react';
import '../App.css';


function AboutMe() {
  return (
    <section id="landing-section" className="mt-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="./Pictures/prof.jpg" className="img-fluid rounded" alt="Placeholder Image" />
          </div>
          <div className="col-md-6 text-white">
            <h1 className="display-4">About Me</h1>
            <h2 className="lead">Aaron Ian Rosales</h2>
            <h4>Info</h4>
            <ul className="list-group text-white">
              <li className="list-group-item">Age: 25 Years Old</li>
              <li className="list-group-item">Address: Gumaca Quezon</li>
              <li className="list-group-item">Nationality: Filipino</li>
            </ul>
            <h4>Skills</h4>
            <ul className="list-group text-white">
              <li className="list-group-item">Computer Languages</li>
              <li className="list-group-item">Math</li>
              <li className="list-group-item">Science and Logic</li>
            </ul>
            <p className="container border border-3">
              Welcome to my developer portfolio! I am a passionate and dedicated full-stack web developer with expertise in front-end and back-end technologies. I have successfully delivered various projects, ranging from responsive websites to complex web applications. My skillset includes proficiency in HTML, CSS, JavaScript, and popular frameworks like React and Node.js. I am constantly learning and staying updated with the latest trends and technologies in the web development field. In my portfolio, you will find a showcase of my projects, demonstrating my problem-solving abilities, attention to detail, and clean coding practices. I am excited to collaborate on innovative projects and contribute to the success of your business. Feel free to explore my portfolio and reach out to discuss potential opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
