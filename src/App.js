import React from 'react';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />      
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

const Home = () => (
  <div className="home section" id="home">
    <div className="home-content">
      <div className="summary align-right">
        <div className="summary-content">
          
          <h1>
            Ayush Rana
          </h1>
          <p>
            MCA student specializing in Web Development and Software Engineering with skills in React.js, JavaScript, C++, Python, HTML, and CSS. Passionate about problem-solving, building user-friendly applications, and continuously improving technical and communication skills. Aspiring Software Developer seeking opportunities to contribute and grow in a dynamic technology environment.
          </p>
          
          <Connect linkedin="https://www.linkedin.com/in/meetayushrana/" github="https://github.com/rxayushh"  Contact="contact"></Connect>
           
          
        </div>
      </div>
      <Animation fileName="home.json"/>
    </div>
    <div id="skills-marker"/>
  </div>
);



export default App;
