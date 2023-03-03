//RouteNav ant desing se banaya

import { useSelector } from "react-redux";
import { Layout, Menu} from "antd";
import React from "react";
const { Header } = Layout;
import { useNavigate } from "react-router-dom";
import "../css/routeNav.css";

const RouteNav = () => {

const getdata=useSelector(state=>state.thaliapp.image);

const navigate = useNavigate();

//when we add one item in thali give alert and add more than one items so go to checkout page
const handleclick=()=>{
  if(getdata.length<2){
            alert("Atleast two items should be present in Thali")
    }
       else{
            navigate("/checkout");
    }
  }

  
  const items = [
    
    //checkout button
    {
      key: 1,
      label: <button className="btn btn-info" style={{padding:"10px"}} onClick={handleclick}>Checkout</button>
    },

    //display cart image and add item in it
    {
      key: 2,
      label: <span className="logo_and_length"><img width={"50px"} height={"50px"} src={"https://images.all-free-download.com/images/graphiclarge/shopping_cart_icon_vector_red_background_280670.jpg"}/><span className="cart">{getdata.length}</span></span>
    }
  
  ];

  return (
    <div className="pages">
      <Header
      style={{
       color:"red",
        bottom: "10px",
        position: "relative",
        marginTop:"10px"
      }}
      
      >
    <div className="logo"/>
  
      <Menu
        theme="default"
        mode="horizontal"
        style={{color:"blue",fontWeight:"bolder",textDecoration:"none",fontSize:"20px" ,display:"flex",justifyContent:"end"}}
        items={items}
      />
      
     
    </Header> 
    <div className="logo_effect">
      <img style={{width:"200px"}} src="yummy-1.png"/>
    </div> 
  </div>
);
}

export default RouteNav;
