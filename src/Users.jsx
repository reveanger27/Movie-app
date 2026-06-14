import { useState, useEffect } from "react";

function Users () {
    const [users, setUsers] = useState ([]);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Daftar Users</h2>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Users;
