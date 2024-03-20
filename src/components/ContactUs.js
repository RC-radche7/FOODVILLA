import { Link } from "react-router-dom";

const Contact= () => {
    
    return (
        <div>
        <h1 className="text-4xl bg-green-500 text-center m-4 p-3 text-white">Contact Us Page</h1>
        <p className=" m-4 p-3 text-3xl">Welcome to food villa. Please fill your details we will get back to you soon...</p>
      
        
        <div className="max-w-md mx-auto rounded p-6 m-8  bg-green-500 ">
        <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
        <form >
            <div className="felx flex-col">
              <input type="text"  name="name" className="p-2 mt-4 w-full border-gray-300 rounded-md" placeholder="Enter your name" />
              <input type="tel"  name="phoneNumber"  className=" mt-4 p-2 w-full border-gray-300 rounded-md" placeholder="Enter your phone number" />
              <textarea  name="issue" rows="4"  className="mt-4 p-2 w-full border-gray-300 rounded-md" placeholder="Describe your issue"></textarea>
              <button type="submit" className="px-4 py-2 bg-green-900 mt-4 text-white rounded" ><Link to='/message'> Submit </Link></button>
            </div>
        </form>
    </div>
    </div>
 
);
        

}
export default Contact;