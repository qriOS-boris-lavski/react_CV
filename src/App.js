import './App.css';
import image from './cv_img.jpg';
import { Image, Contacts, Experience } from './components/Resume';
import { Counter } from './components/Counter';
import Repos from './components/Repos';


function App() {
    
  return (
    <div className="App">
      <header>
          <div className="name-position">
              <h2 className="name">Vasyl</h2>
              <h2 className="surname">Boryslavskyi</h2>
          </div>
          <Image imgSrc={image}/>
          <Contacts/>
      </header>

      <main>
          <section className="wrapper">
              <div className="summary">
                <Counter/>
                  <h3>Summary</h3>
                  <p>I'm Individual entrepreneur now, and I was a Manager of foreign activity and Supply manager with 6 years of experience and all this time I've been helping 
                      businesses to reach their goals. And now I'm junior Web Developer with different technical knowledges. I have experience with back-end (Node JS), front-end (JS, React) and I'm not going to stop and expand my knowledges.
                      I'm highly motivated to become Web Developer.
                  </p>
              </div>
              <div className="skills">
                  <h3>Skills Highlights:</h3>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Java Script</li>
                      <li>React</li>
                      <li>Node JS</li>
                  </ul>
              </div>
              <Experience/>
              <div className="education">
                  <h3>Education</h3>
                  <div className="education-item">
                      <p>
                          <span>Dates of studying:</span> from 2010 – to 2015<br/>
                          <span>Name of institution:</span> National university of food technologies<br/>
                          <span>Degree and major:</span> MS, Manager of foreign activity
                      </p>
                  </div>
              </div>
              <Repos/>

              </section>
      </main>
    </div>
  );
}

export default App;
