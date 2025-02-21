import { useState } from "react";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
        localStorage.setItem("token", res.data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
