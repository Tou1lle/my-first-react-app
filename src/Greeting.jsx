import "./greeting.css"
import cyberpunkLogo from "./assets/cp-e-logo.png";

function Greeting() {
  return (
    <>
      <div>
        <h1>Hello, my Nigga!</h1>
      </div>
      <h2>These are your favourite animes:</h2>
      <ul>
        <li>
          Cyberpunk: Edgerunners
          <img className="anime-logo" src={cyberpunkLogo} alt="lucy and david from cyberpunk" />  
        </li>
      </ul>
    </>
  );
}

export default Greeting;
