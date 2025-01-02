import React, { useState, useEffect } from 'react';

// Axios implementation
import axios from 'axios';

// JSON Data
import usersData from '../../users-database.json';

// Components
import { ClickUserComponent } from "../Component";

// Styling 
import "../index.css";

const UsersScreen = () => {

    const [users, setUsers] = useState();

    useEffect( () => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
                setUsers(res.data);
                console.log(res.data);
            } catch(err) {}
        }

        fetchData();
    }, [] )

    return (
        <div className="py-3.5">
            <h1 className="text-center text-2xl font-bold">Users List ({ usersData.length })</h1>

            <div className="border-2 lg:mx-48 md:mx-4 my-4 p-3 px-6 rounded-2xl">

                {
                    users && users.map( (item, key) => (
                        <div key={ key }>
                            <ClickUserComponent name={ item.name } email={ item.email } id={ item.id } />
                        </div>
                    ) )
                }

            </div>

        </div>
    )
}

export default UsersScreen;
