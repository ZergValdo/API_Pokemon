import { Link } from "react-router-dom";
import {  useEffect, useState, useRef, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

export default function AplicativoPokemon(this: any){

    //imagen pokemon
    const pngPokemon = useRef(null);
    //imagen pokemon

    //lista pokemon
    const [listapokemon, setListaPokemon] = useState([]);
    //lista pokemon

    interface  dataForm {
        buscarPokemon : string;
    };

    const [values, setValues] = useState <dataForm>({
        buscarPokemon : ""
    });

    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
        const {name, value}  = event.target
        setValues({
            ...values,
            [name] : value
        });
    };

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                setListaPokemon(data.results);
        });
    }, []);


    const cargarAPI = (done :any) => {

        let url = "https://pokeapi.co/api/v2/pokemon";
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            done(data);
        });

    };

    let [imagenPokemon, setImagenPokemon] = useState ("")
    
    const handleFunction = (event : any) => {
        
        event.preventDefault();

        cargarAPI((data: any) => {
            let menuPokemon = data.results;
            for(let i = 0; i < menuPokemon.length; i++){
                if(menuPokemon[i].name === values.buscarPokemon){
                    let url = menuPokemon[i].url;
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            let movimientosPokemon = data.moves
                            let imagenPokemon = data.sprites.other.dream_world.front_default;
                            setImagenPokemon(imagenPokemon);
                            for(let j = 0 ; j < movimientosPokemon.length; j++){
                                console.log(movimientosPokemon[j].move.name);
                            };
                        });
                };
            };
        });
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

            <nav 
            className="navbar navbar-light justify-content-between" 
            style={{
                backgroundColor : 	"#B80000"
            }} >
                <Link to={"/"}>
                    <img 
                        className="navbar-brand"  
                        style={{
                            width : "10%"
                        }} 
                        src="pokemonLogo.png" 
                        alt="Logo-Pokemon"
                        >
                    </img>
                </Link>
                <div style={{
                    fontSize : 17, 
                    color : "white"}}>
                    Bienvenido {sessionStorage.getItem("tagName")} !
                </div>
            </nav>
            <br />
            <br />
            <div style={{ 
                position : "fixed",  
                display : "flex" , 
                maxWidth : "100%", 
                maxHeight: "100%" , 
                left : "35%", 
                alignItems :"center"}}>
                <h1 
                    style={{ 
                        position : "fixed" , 
                        display:"flex" , 
                        alignContent : "center", 
                        fontSize : 20}}>Escribe el nombre pokemón de la lista, que quieres conocer!
                </h1>
                <form 
                    onSubmit={handleFunction}
                    className="d-flex" 
                    style={{ 
                        position : "fixed", 
                        left : "36.5%", 
                        top : "25%",
                        width : "50%"}}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        name="buscarPokemon"
                        onChange={handleInputChange}
                        placeholder="Buscar Pokemon" 
                        aria-label="Search" 
                        style={{width : "50%"}} 
                    />
                    <button 
                            type="submit" 
                            className="btn btn-primary" 
                            style={{
                                height : 50, 
                                width : 100, 
                                fontSize : 17,
                                top : "35%",
                                left : "45%",
                                position :  "fixed"}}>Enviar
                    </button>
                </form>
            </div>
            
            
            if(imagenPokemon !== ""){
                <div className="card" style={{
                    width: "18rem",
                    left: "75%"}}>
                <img src={imagenPokemon} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{values.buscarPokemon}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            };
            
            
            if (listapokemon !== "") {
            <><></>
                <h1 style={{
                        top : "6.5%",
                        position: "fixed",
                        padding: 20,
                        fontSize: 20
                    }}>Lista Pokemon!</h1>
                <ul
                    className="div"
                    style={{
                        top : "11%",
                        position: "fixed",
                        padding: 20,
                        fontSize: 20
                    }}>{listapokemon.map((home: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => <div>{home.name}</div>)}
                </ul>
            </>
            };

        </>

    );

};


