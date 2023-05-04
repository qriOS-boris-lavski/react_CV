import './App.css';


function App() {
  return (
    <div className="App">
      <header>
          <h1>VASYL BORYSLAVSKYI</h1>
          <img src="{img}" alt="candidate's photo" width="250px"/>

          <p> <strong>Web developer</strong> </p>
          <hr/>
      </header>

      <main>
          <section>
              <h3>Work experience</h3>

              <dl>
                  <dt><strong>2020 - present</strong> Individual entrepreneur</dt> 
                  <dd><em>Sale goods on marketplaces <a href="https://rozetka.com.ua/" target="_blank">ROZETKA</a> and <a href="https://prom.ua/" target="_blank">Prom</a></em></dd>

                  <dt><strong>2019 - 2020</strong> Supply manager at <a href="https://etool.com.ua/" target="_blank">ORCS Ltd.</a></dt> 
                  <dd><em>Supply powertools for a domestic market</em></dd>

                  <dt><strong>2017 - 2019</strong> Supply manager at <a href="https://deepnet.ua/" target="_blank">DeepNet Ukraine Ltd.</a></dt> 
                  <dd><em>Supply equipment for a Internet providers</em></dd>

                  <dt><strong>2016 - 2017</strong> Assistant of Supply manager at <a href="https://etalonk.com/" target="_blank">Etalon-K Ltd.</a></dt> 
                  <dd><em>Preparing documents for import operations</em></dd>

                  <dt><strong>2015 - 2016</strong> Sales manager at <a href="https://speak-up.com.ua/" target="_blank">SpeakUP</a></dt> 
                  <dd><em>Sales English courses</em></dd>
              </dl>
          </section>

          <section>
             <article>
                  <h3>Skills:</h3>

                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Java Script</li>
                      <li>React</li>
                      <li>Node JS</li>
                  </ul>
             </article>

             <article>
                  <h3>Achievements:</h3>

                  <ol>
                      <li>Started my own business</li>
                      <li>Born Ukrainian</li>
                      <li>Bought Bayraktar for Ukraine forces</li>
                  </ol>
             </article>
          </section>
      </main>
    </div>
  );
}

export default App;
