import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInfo : {
                name : 'dummy',
                location : 'default'
            },
        };
        console.log('Child constructor Called');
    }
    async componentDidMount (){
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
    }
    
   
    render() {
    const {name,location,avatar_url}= this.state.userInfo;
   
    return (
       
        <div className='user m-4 p-4 bg-gray-50'>
            <img src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
        </div>
        )
    }
}

export default UserClass;