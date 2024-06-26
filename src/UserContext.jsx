import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import dotenv from 'dotenv'
// dotenv.config();
export const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [username, setUsername] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [oneTimePass, setOneTimePass] = useState();
   

    // profile fetch function
    const fetchProfile = async () => {
        try { 
            const response = await axios.get("/profile");
            console.log("fetch profile : ", response);
            console.log("id : ", response.data.id);
            console.log("username : ", response.data.username);
            console.log("email : ", response.data.email);   

            setId(response.data.id);
            setUsername(response.data.username);
            setEmail(response.data.email);
            return;
        } catch (err) {
            console.log("error Occur during fetch profile data : ", err.message);
            return;
        }
    }
    useEffect(() => {
        fetchProfile();
    }, [])

    const value = {
        username,
        setUsername,
        id,
        setId,
        email,
        setEmail,
        oneTimePass,
        setOneTimePass
    }


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}