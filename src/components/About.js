//import {Component} from "react";
import UserClass from "./UserClass";
const About = () => {
// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count : 0,
//             count1 : 2
//         };
//         console.log('Parent constructor Called');
//     }
//     componentDidMount (){
//         console.log('Parent Mount called');
//     }
//     render() {
//         console.log('Parent render called');
    return (
    <div>
        
        <h1 className="bg-green-500 text-white p-10 m-10 text-4xl">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience.
         Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h1>
         <img className="m-20 p-2" src='https://cdn.unenvironment.org/s3fs-public/2023-07/Journey-of-Food.JPG'></img>
         <img className="m-20 p-4 w-[1370] " src='https://reliefweb.int/sites/default/files/styles/large/public/previews/6e/81/6e8181db-b841-48cf-82a6-0f6dde49e70e.png'></img>
    </div>
    )
}

export default About;