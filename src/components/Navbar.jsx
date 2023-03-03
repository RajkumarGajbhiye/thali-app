
//Navbar ant desing se banaya

import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;
import "../css/navbar.css";

const Navbar = () => {
  const items = [

    //thali route
    {
      key: 1,
      label: <Link style={{fontFamily: 'Lobster, cursive'}} to={"/thali"}>Thali</Link>
    },
    
  ];

  return (
    <div className={"header_content"}>
      <Header
        style={{
        display:"flex",
        justifyContent:"center"
      }}>
        
    <div className="logo"/>
  
       <Menu
        mode="horizontal"
        style={{color:"red",textDecoration:"none",fontWeight:"bolder",fontSize:"40px"}}
        items={items}
      />
      
     
    </Header> 
    <div className="image_effect">
      <img src="yummy-1.png"/>
      </div> 
         <div className={"heading_name"}>
      <h1>Thali App</h1>
    </div>
  </div>
);
}

export default Navbar;

