import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {

    // gsap animation for the pokemon logo//

    const imageRef = useRef(null);
    
    setTimeout(()=>{
        if(imageRef != null){
            gsap.set(imageRef.current, {
                transformOrigin : "50% 50%",
                width: "0%"
            });
            gsap.to(imageRef.current, {
                width: "50%",
                duration: 1,
                rotation : 360
            });
        };
    });

    // gsap animation for the pokemon logo//

    interface form {
        email : string;
        password : string;
    };
    
    const [values, setValues] = useState <form>({
        email: "",
        password : ""
    });
    const [first,setFirst] = useState (true);
    
    
    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
        const {name, value}  = event.target
        setValues({
            ...values,
            [name] : value
        });
    };

    
    const handleCheckForm = (data : any) => {
        if(data === "first"){
            if(first === true){
                localStorage.setItem("CheckBox", "true");
            }else{
                localStorage.clear();
            };

            setFirst(!first);

        };
    };
    
    const handleForm = (event : any) => {
        
        event.preventDefault();
        console.log(localStorage.getItem("CheckBox"));

        if(localStorage.getItem("CheckBox") === "true"){
            sessionStorage.clear();
            localStorage.setItem("password",values.password);
            localStorage.setItem("email",values.email);
        }else if(localStorage.getItem("CheckBox") === null){
            localStorage.clear();
            sessionStorage.setItem("password",values.password);
            sessionStorage.setItem("email",values.email);
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
            <img 
                ref={imageRef}
                src="pokemonLogo.png" 
                alt="Logo Pokemon" 
                style={{
                position : "relative" ,
                display :"block", 
                margin:"auto",
                top : -"3%",
                }}>
            </img>
            <div 
                style={{
                position : "relative", 
                marginLeft : "42%", 
                width: "20%",
                top : -"80"
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
                            htmlFor="exampleInputPassword1" 
                            style={{fontSize : 17}}>Password
                        </label>
                        <input 
                            type="password" 
                            name = "password"
                            value = {values.password}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                        />
                    </div>
                    <div 
                        className="form-check" 
                        style={{
                            fontSize : 20, 
                            right:12, 
                            padding: 15}}>
                        <input 
                            id="check"
                            type="checkbox"
                            value={"first"}
                            onChange={() => handleCheckForm("first")}
                            />Keep signed in
                    </div>

                    <Link to={"/create-account"}>
                        <a 
                            style={{
                                fontSize : 17, 
                                textDecoration: "underline", 
                                cursor : "pointer"}}>Create Account
                        </a>
                    </Link>
                    
                    <br  />
                    <br  />
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