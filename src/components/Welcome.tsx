import "../App.css";
import FuturisticText from "./FuturisticText";

const title = "Welcome";

function Welcome() {
    return(         
        <div className="text-box animate-on-scroll">
          <h1>
          <FuturisticText text={title} />
          </h1>
        </div>
        )
        }

export default Welcome;