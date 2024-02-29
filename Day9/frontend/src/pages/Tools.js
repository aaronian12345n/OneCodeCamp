import React from 'react';
import html5Logo from './Pictures/logo-html5.PNG';
import css3Logo from './Pictures/logo-css3.PNG';
import javascriptLogo from './Pictures/logo-javascript.PNG';
import bootstrapLogo from './Pictures/logo-bootstrap.PNG';
import expressjsLogo from './Pictures/logo-expressjs.PNG';
import mongodbLogo from './Pictures/logo-mongodb.PNG';
import reactLogo from './Pictures/logo-react.PNG';
import nodejsLogo from './Pictures/logo-nodejs.PNG';
import herokuLogo from './Pictures/logo-heroku.PNG';
import gitLogo from './Pictures/logo-git.PNG';
import postmanLogo from './Pictures/logo-postman.PNG';
import sublimeTextLogo from './Pictures/logo-sublime-text-3.PNG';

function Tools() {
  return (
    <section id="tools-section" className="mt-5">
      <div>
        <div className="text-black text-center">
          <h1 className="display-4">Tools</h1>
        </div>
        <div className="container text-black text-center mt-5">
          <div className="row">
            {/* Frontend tools */}
            <div className="col-md-4">
              <h2>Frontend</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={html5Logo} className="img-fluid rounded" alt="HTML5 Logo" />
                </div>
                <div className="col-md-6">
                  <img src={css3Logo} className="img-fluid rounded" alt="CSS3 Logo" />
                </div>
                <div className="col-md-6">
                  <img src={javascriptLogo} className="img-fluid rounded" alt="JavaScript Logo" />
                </div>
                <div className="col-md-6">
                  <img src={bootstrapLogo} className="img-fluid rounded" alt="Bootstrap Logo" />
                </div>
              </div>
            </div>
            {/* Backend tools */}
            <div className="col-md-4">
              <h2>Backend</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={expressjsLogo} className="img-fluid rounded" alt="Express.js Logo" />
                </div>
                <div className="col-md-6">
                  <img src={mongodbLogo} className="img-fluid rounded" alt="MongoDB Logo" />
                </div>
                <div className="col-md-6">
                  <img src={reactLogo} className="img-fluid rounded" alt="React Logo" />
                </div>
                <div className="col-md-6">
                  <img src={nodejsLogo} className="img-fluid rounded" alt="Node.js Logo" />
                </div>
              </div>
            </div>
            {/* Fullstack tools */}
            <div className="col-md-4">
              <h2>Fullstack</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={herokuLogo} className="img-fluid rounded" alt="Heroku Logo" />
                </div>
                <div className="col-md-6">
                  <img src={gitLogo} className="img-fluid rounded" alt="Git Logo" />
                </div>
                <div className="col-md-6">
                  <img src={postmanLogo} className="img-fluid rounded" alt="Postman Logo" />
                </div>
                <div className="col-md-6">
                  <img src={sublimeTextLogo} className="img-fluid rounded" alt="Sublime Text 3 Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
