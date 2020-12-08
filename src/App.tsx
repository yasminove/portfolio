import React from 'react';
// 
// import './blue.css';
import './App.css';


// import './green.css';

import { Post } from './Post'
import { Link, BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import ProfilePic from './images/yasmin.jpeg';
import Resume from './images/resume.pdf';
import Follow from './images/follow.png';
import Dash from './images/dash.jpg';


   
      // <Router>
      //    <Switch>
      // <Route exact path="/" component={App} />
      // <Route exact path="/post" component={Post} />
      // </Switch>
      // </Router>



function App() {
  return (
    <div className='App'>
      <section className='s1'>
        <div className='main-container'>
          <div className='greeting-wrapper'>
            <h1>Hi, I'm Yasmin Hillis</h1>
          </div>
          <div className='intro-wrapper'>
            <div className='nav-wrapper'>
              <div className='dots-wrapper'>
                <div id='dot-1' className='browser-dot'></div>
                <div id='dot-2' className='browser-dot'></div>
                <div id='dot-3' className='browser-dot'></div>
              </div>
              <ul id='navigation'>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </div>

            <div className='left-column'>
              <img id='profile-pic' src={ProfilePic} />
              <h5 style={{ textAlign: 'center', lineHeight: 0 }}>
                Personalize Theme
              </h5>
              <div id='theme-options-wrapper'>
                <div id='light-mode' className='theme-dot'></div>
                <div id='blue-mode' className='theme-dot'></div>
                <div id='green-mode' className='theme-dot'></div>
                <div id='purple-mode' className='theme-dot'></div>
              </div>
              <p id='settings-note'>
                Theme options will be saved <br />
                for your next visit
              </p>
            </div>
            <div className='right-column'>
              <div>
                <div id='preview-shadow'>
                  <div id='preview'>
                    <div id='corner-tl' className='corner'></div>
                    <div id='corner-tr' className='corner'></div>

                    <h3>What I Do</h3>
                    <p> I am a Web Developer</p>
                    <div id='corner-bl' className='corner'></div>
                    <div id='corner-br' className='corner'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s2'>
        <div className='main-container'>
          <div className='about-wrapper'>
            <div className='about-me'>
              <h4>More About Me</h4>
              <p>
                I love to build new projects that contribute to the overall good
                of humanity
              </p>
              <p>
                While I keep working on projects, I still teach myself about
                cutting-edge technologies every day
              </p>

              <hr />

              <h4>TOP EXPERTISE</h4>
              <p>
                Fullstack developer with primary focus on Django and React:{' '}
                <a target='__blank' href={Resume}>
                  Download Resume
                </a>
              </p>

              <div id='skills'>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Node</li>
                  <li>React | Redux | Hooks</li>
                  <li>MongoDB</li>
                  <li>Postgres</li>
                  <li>Redis</li>
                </ul>
                <ul>
                  <li>TypeScript</li>
                  <li>Django</li>
                  <li>Python</li>
                  <li>AWS(S3)</li>
                  <li>Heroku</li>
                  <li>Google Maps API</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
            <div className='social-links'>
              <img id="social-img" src={Follow}/>
              <h3>Connect with me on LinkedIn and GitHub</h3>
              <p>
              <a href="https://github.com/yasminhillis" target="__blank">LinkedIn: Yasmin Hillis</a>
              </p>
              <p> 
              <a href="https://www.linkedin.com/in/yasmin-hillis-66088515a/" target="__blank">GitHub: Yasmin Hillis</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='s1'>
        <div className='main-container'>
          <h3 style={{textAlign: 'center'}}>Some of my past projects</h3>
          <div className="post-wrapper">
            <div className="post">
              <img className="thumbnail" src={Dash}/>
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">Designed built & mantained a the lab managment system for FOI Laboratories</p>

                {/* <Router>
                <Link push strict exact to="/post" component={Post}>Read More</Link>
                </Router> */}
              </div>
            </div>

            <div className="post">
              <img className="thumbnail" src={Dash}/>
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">Designed built & mantained a the lab </p>
              </div>
            </div>

            <div className="post">
              <img className="thumbnail" src={Dash}/>
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s2'>
        <div className='main-container'>
          <h3 style={{textAlign: 'center'}}>Get In Touch</h3>
          <form id="contact-form">

            <label>Name</label>
            <input id="input-field" type="text" name="name"/>

            <label>Subject</label>
            <input id="input-field" type="text" name="subject"/>

            <label>Email</label>
            <input id="input-field" type="text" name="email"/>

            <label>Message</label>
            <textarea id="input-field" name="messgae"></textarea>

            <input id="submit-btn" type="submit" value="send" />

          </form>
        </div>
        
      </section>
    </div>
  );
}

export default App;
