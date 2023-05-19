import { useState } from "react"
import validation from "./Validation";

export default function Form(props) {

    const [userData, setuserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({})
    //errors {si no hay errores, esta vacio}
    //errors{email:---, password:----}(algo esta mal)


    const handleChange = event => {
        const {name, value} = event.target;
        setuserData({
            ...userData,
            [name] : value                  //*console.log(userData)
        })

        setErrors(validation({
            ...userData,
            [name] : value
        }))
    };

const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
}

return (
    <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text"
               name="email"
               value={userData.email}
               onChange={handleChange}/>
            <p>{errors.email ? errors.email : null}</p>

        <label>Password:</label>
        <input type="password"
               name="password"
               value={userData.password}
               onChange={handleChange}/>
            <p>{errors.password ? errors.password : null}</p>

        <button type="submit">Submit</button>
    </form>
)
}