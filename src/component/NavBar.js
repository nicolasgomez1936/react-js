import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";


const Container = styled.div`
    width: 100%;
    height: 100px;
`
const Lista = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: #34495E;    
    padding: 1.5rem;
    margin: 2rem 0; 
    list-style: none;   

`
const Enlace = styled.a`
    color: white;
    text-decoration: none;        
    
`

const NavBar = () => {

    return(
        <Container>
            <nav>
                <Lista>
                    <li><Enlace href="#">Inicio</Enlace></li>
                    <li><Enlace href="#">Blog</Enlace></li>
                    <li><Enlace href="#">Contacto</Enlace></li>
                    <CartWidget />

                </Lista>                
            </nav>

           
        </Container>


    );
}

export default NavBar