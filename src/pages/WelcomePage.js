import "./WelcomePage.css";
import { AiOutlineSmile } from 'react-icons/ai';

export default function WelcomePage() {
    return (
     <>
        <div className="containerWelcome">
            <h1 id="welcome">Halo!</h1>
            <AiOutlineSmile id="welcome" className="welcomeIcon" size="50px"/>
            <h3>Homeyapp disini akan membantumu mencatat To-do list dan notes kamu!</h3>
        </div>
     </>  
    );
}