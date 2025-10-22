import "./App.css";
import profileImage from "./assets/profile.jpg";
function App() {
  return (
    <>
      <div className="div-container">
        <div className="text-box">
          <h1>Welcome to my website!</h1>
        </div>
        <div className="text-box centerThat">
          <h2>Who am I?</h2>
          <p>
            My name is Dombi Balázs Sándor and this is my personal website. I
            made it to
            <br />
            introduce myself and get all of my profiles at one place. I am a
            computer
            <br />
            science enthusiast software developer passionate about building
            performant
            <br />
            and scalable solutions across platforms. Exploring the potential of
            modern
            <br />
            technologies to solve real-world problems. 🌌
          </p>
          <br />
          <p>
            <img
              className="profile-image"
              src={profileImage}
              alt="Profile photo"
            />
            <br />
            Me
          </p>
        </div>
        <div className="text-box justified">
          <h2 className="centerThat">Studies</h2>

          <h3>Schools</h3>

          <ul>
            <li>
              <p>
                <strong>
                  Lévay József Reformed Secondary School (2014-2019)
                </strong>
              </p>
            </li>
            <p>
              I won at a local{" "}
              <a
                href="https://levay.tirek.hu/hirek/h%C3%ADr-arch%C3%ADvum/hirek-2018-2019/a-levay-jog-aszok-csapata-nyerte-meg-a-perszimulacios-versenyt/"
                target="_blank"
              >
                {" "}
                legal competition
              </a>
              for students, I was in the role of a lawyer.
            </p>
            <br />
            <li>
              <p>
                <strong>
                  University of Miskolc, Faculty of Law, law studies master
                  (2019-)
                </strong>
              </p>
            </li>
            <p>
              I took part at the{" "}
              <a
                href="https://jogikar.uni-miskolc.hu/tdk_programfuzet"
                target="_blank"
              >
                Student’s Scientific Research Conference
              </a>{" "}
              with my research about the Generative Artificial Intelligence
              according to the Charter of Fundamental Rights of the European
              Union. You can download my work from{" "}
              <a
                href="https://docs.google.com/document/d/1YFxo6QXVthy_VYWdT8PLdna9hM45rDed/edit?usp=sharing&ouid=108044016053514114860&rtpof=true&sd=true"
                target="_blank"
              >
                here
              </a>
              .
            </p>

            <br />
            <li>
              <p>
                <strong>
                  University of Tokaj, Computer Science BSc (2024-)
                </strong>
              </p>
            </li>
            <p>Software developer and tester vocational training (2025-)</p>
          </ul>

          <br />

          <h3>
            <strong>Courses</strong>
          </h3>

          <ul>
            <li>
              <p>
                <strong>
                  Artificial Intelligence course I. held by Miklós Póth (2024)
                </strong>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  UN Sustainable development goals (SDG) course (2024)
                </strong>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  FreeCodeCamp foundational c# course with Microsoft{" "}
                  <a
                    href="https://www.freecodecamp.org/certification/dombi-balazs/foundational-c-sharp-with-microsoft"
                    target="_blank"
                  >
                    certification
                  </a>
                </strong>
                <strong> (2025)</strong>
              </p>
            </li>
          </ul>
          <br />

          <h3>
            <strong>Skills</strong>
          </h3>

          <ul>
            <li>
              <h4>
                <strong>Spoken languages</strong>
              </h4>
            </li>
            <p>Hungarian (native), English (B2), Chinese (HSK1)</p>

            <li>
              <h4>
                <strong>Stack</strong>
              </h4>
            </li>
            <p>Languages: 🛠️ C#, 🌐 TypeScript, 📊 Julia</p>

            <p>
              Frameworks and libraries: React, ASP.NET, ML.NET, MAUI, Avalonia,
              Fluent 2, Lux.jl, Makie.jl, Agents.jl
            </p>

            <p>Developer environments: JetBrains Rider, Zed, Nano</p>

            <p>Other technologies: Linux (Ubuntu), Git, NodeJS, Bun</p>
          </ul>

          <br />

          <h3>
            <strong>Hobbies</strong>
          </h3>

          <ul>
            <li>Hiking 🏞️</li>
            <li>Gaming 🎮</li>
            <li>Reading 📚</li>
          </ul>
        </div>
        <div className="text-box">
          <h2>Profiles</h2>
          <p>
            <a href="https://github.com/dombi-balazs" target="_blank">
              GitHub
            </a>
          </p>

          <p>
            <a
              href="https://learn.microsoft.com/en-us/users/dombi-balazs/"
              target="_blank"
            >
              Microsoft Learn
            </a>
          </p>

          <p>
            <a href="https://www.freecodecamp.org/dombi-balazs" target="_blank">
              FreeCodeCamp
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/dombibalazssandor"
              target="_blank"
            >
              Facebook
            </a>
          </p>

          <p>
            <a href="https://www.instagram.com/dombibalazs/" target="_blank">
              Instagram
            </a>
          </p>

          <p>
            <a href="http://www.linkedin.com/in/bdombi" target="_blank">
              LinkedIn
            </a>
          </p>

          <p>
            <a href="https://www.reddit.com/user/balazs-dombi/" target="_blank">
              Reddit
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
