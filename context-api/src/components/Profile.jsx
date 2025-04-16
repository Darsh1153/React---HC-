import React from "react";
import userContext from "../context/UserContext";
import { useContext } from 'react'

function Profile(){
    const {user} = useContext(userContext);

    if(!user) return <div>please login</div>
    else return <div>Welcome {user.username}</div>
}
export default Profile;