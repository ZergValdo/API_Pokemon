import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function CreateAccount(){

    interface form {
        email : string;
        password : string;
        confirmPassword : string;
        tagName:string;
    };

    const [values, setValues] = useState <form>({
        email: "",
        password : "",
        confirmPassword : "",
        tagName : ""
    });

    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
        const {name, value}  = event.target
        setValues({
            ...values,
            [name] : value
        });
    };

    const navigate = useNavigate()

    const handleForm = (event : any) => {
        
        event.preventDefault();

        if(values.email === "" || values.password === "" || values.confirmPassword === "" || values.tagName === ""){
            alert("Favor de no dejar ningún campo vacio");
        }else if(values.password !== values.confirmPassword){
            alert("La contraseña no coincide, favor de volverlo a intentar");
        }else{
            sessionStorage.setItem("password2",values.password);
            sessionStorage.setItem("email2",values.email);
            sessionStorage.setItem("tagName",values.tagName);
            navigate("/aplicativo-pokemon");
            alert("Su cuenta ha sido creada!");
            alert("Acceso Confirmado!");
        };
    };

    return (
        <>
            <div 
                className="h-100 d-inline-block" 
                style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FFFF00",
                position : "fixed",
                }}>
            </div>

            <h1 style={{ 
                position : "absolute", 
                left : "38%", 
                top : "20%", 
                color : "blue"}}>Create Account
            </h1>
            
            <nav>
                <Link to={"/"}>
                    <img 
                        src="pokemonLogo.png" 
                        alt="Pokemon Logo"
                        style={{
                            position : "absolute",
                            maxHeight : "10%",
                            left : "1%"
                        }}
                    />
                </Link>
            </nav>      

            <div 
                style={{
                position : "absolute", 
                marginLeft : "38.5%", 
                width: "20%",
                top : "30%"
                }}>
                <form 
                    onSubmit={handleForm}
                    style={{
                    position : "absolute", 
                    width:"100%"}}>
                    <div 
                        className="form-group">
                        <label 
                            htmlFor="exampleInputEmail1" 
                            style={{fontSize : 17}}>Email address
                        </label>
                        <input 
                            type="email" 
                            name = "email"
                            value= {values.email} 
                            onChange={handleInputChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            style={{fontSize : 17}}
                        />
                    </div>
                    <div 
                        className="form-group">
                        <label 
                            htmlFor="exampleInputEmail1" 
                            style={{fontSize : 17}}>Tag Name
                        </label>
                        <input 
                            type="text" 
                            name = "tagName"
                            value= {values.tagName} 
                            onChange={handleInputChange}
                            className="form-control" 
                            id="exampleInputEmail2" 
                            aria-describedby="emailHelp" 
                            placeholder="Tag Name" 
                            style={{fontSize : 17}}
                        />
                    </div>
                    <div 
                    className="form-group">
                        <label 
                            htmlFor="exampleInputPassword1" 
                            style={{fontSize : 17}}>Password
                        </label>
                        <input 
                            type="password" 
                            name = "password"
                            value= {values.password}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                        />
                    </div>
                    <div 
                    className="form-group">
                        <label 
                            htmlFor="exampleInputPassword1" 
                            style={{fontSize : 17}}>Confirm Password
                        </label>
                        <input 
                            type="password" 
                            name = "confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            className="form-control" 
                            placeholder="Confirm Password"
                        />
                    </div>
                    <br/>
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{
                            height : 50, 
                            width : 100, 
                            fontSize : 17}}>Submit
                    </button>
                </form>
            </div>
        </>
    );
};