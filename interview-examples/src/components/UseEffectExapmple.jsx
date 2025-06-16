import React, { useState, useEffect } from 'react';

function UseEffectExapmple() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        async function getUsers() {
            const result=await fetch('https://jsonplaceholder.typicode.com/users');
            const data=await result.json();
            setUsers(data);
        }

        getUsers()
    },[])

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user=>(<li key={user.id}>
                    {user.name}
                </li>))}
            </ul>
        </div>
    )
}

export default UseEffectExapmple
