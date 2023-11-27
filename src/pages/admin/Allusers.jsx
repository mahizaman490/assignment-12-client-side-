import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Allusertable from "./Allusertable";


const Allusers = () => {

    const alluser = useLoaderData()
    const [users, setUsers] = useState(alluser)
    console.log(users);




    return (
        <div>
            <h1 className="text-4xl text-center">
                All Users
            </h1>
           {
            users.map(user=><Allusertable key={user.email} user={user} ></Allusertable>)
           }
        </div>
    );
};

export default Allusers;