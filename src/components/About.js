import User from "./UserFunction"
import UserClass from "./UserClass"
const About = () => {
    return <div>
        <h1>Its about page</h1>
        <User name={"afsal kp manu"} place={"from functional component"}/>
        <UserClass name={"kp afsal"} place={"from class component"}/>
    </div>
}

export default About