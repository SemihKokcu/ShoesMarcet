import React, { Component } from "react";
import {Navbar,Container} from "reactstrap"
import { Link } from "react-router-dom";
import "./Navi.css"
class Navi extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark"> <button class="navbar-toggler" type="button" data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item"><img src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/yellow-home-icon.png" width="40" height="40"/></li>
            <li class="nav-item active"> <Link style={{ textDecoration: 'none' }} to ="/product"><a  class="nav-link">  <h5>Ana Sayfa</h5></a></Link>   </li>
            <li class="nav-item"> <Link style={{ textDecoration: 'none' }} to ="/product"><a  class="nav-link">  <h5>Hakkımızda</h5></a></Link>  </li>
            <li id="shoes"className="nav-item">  <a class ="nav-link"> <img src="https://cdn3.iconfinder.com/data/icons/sports-140/50/48-512.png " width="50" height="50" /> </a> </li>
            <li  id="elma" class="nav-item"> <Link style={{ textDecoration: 'none' }} to ="/cart"><a  class="nav-link">  <h5>Sepete git</h5></a></Link> </li>
            {/* <li  class="nav-item"> <a href="#" class="nav-link"> <h5>Sepet</h5> </a> </li> */}
          
        </ul>

      
    </div>
   
</nav>
      </div>
    );
  }
}

export default Navi;
