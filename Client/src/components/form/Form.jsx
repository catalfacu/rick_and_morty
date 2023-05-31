import { useState } from "react"
import styles from "./Form.module.css"
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
        <form onSubmit={handleSubmit} className={styles.formStyle}>
        <img src="src\assets\Rick-morty-form.jpg" alt="Login" />
        <label>Email:</label>
        <input
            placeholder="Insert your email..." 
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}/>
            <p>{errors.email ? errors.email : null}</p>

        <label>Password:</label>
        <input
            placeholder="Insert your password..." 
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}/>
            <p>{errors.password ? errors.password : null}</p>

        <button type="submit"> <strong>Submit</strong> </button>
    </form>
    
)
}



//* En este componente Form se ingresan los datos para acceder a la pagina mediante un login de email y password.
//* Primero se crean dos estados: userData(los datos que el usuario ingresa) y errors(errores al ingresar datos)
//* Luego se crea la funcion HandleChange, que modifican los estados creados dependiendo si estan bien o mal ingresados ante cualquier cambio
//* Luego la funcion handleSubmit concede o no el acceso a la pagina al momento de pulsar el boton Submit
//*
//* Al final se renderiza el formulario con sus inputs,textos y el boton Submit.