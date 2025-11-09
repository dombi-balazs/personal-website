import profileImage from "../assets/profile.jpg";
import "../App.css";

function AboutMe() {
    return(
            <div className="text-box animate-on-scroll">
                <section id="aboutme">
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
          </section>
        </div>
    )
}

export default AboutMe