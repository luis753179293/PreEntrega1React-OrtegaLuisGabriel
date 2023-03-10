import CardWidget from "../CardWidget/CardWidget";
import Flex from "../Flex";
import './NavBar.css';


function NavBar(){
    return(
        <div>
        <div class="botoninicio">
            <a class="botoninicio" href="./index.html"><h2 class="logo">Tienda de Bebidas</h2></a>
        </div>
        
        
        <nav >
                <ul class="navbar">
                    <li ><a  href="#">Vinos</a></li>
                    <li ><a  href="#">Ron</a></li>
                    <li ><a  href="#">Tequila</a></li>
                    <li ><a  href="#">Vodka</a></li>
                    <li ><a  href="#">Licores</a></li>
                </ul>
        </nav>
        

        <CardWidget/>
        </div>
    )
}

export default NavBar;