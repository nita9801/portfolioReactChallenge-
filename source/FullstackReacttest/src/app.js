import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
