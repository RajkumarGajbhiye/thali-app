import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button} from 'antd';
import "../css/routeNav.css";
import Form from 'react-bootstrap/Form';

const RooteNav = () => {
  const getdata = useSelector((state) => state.thaliapp.image);

  const navigate = useNavigate();

  //when we add one item in thali give alert and add more than one items so go to checkout page
  const handleclick = () => {
    if (getdata.length < 2) {
      alert("Atleast two items should be present in Thali");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <Navbar
      bg="dark"
      sticky="top"
      className="bg-body-tertiary mb-5"
      expand="lg"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo_effect" src="yummy-1.png" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Form inline >
        <img
              max-width="100px"
              height="35px"
              src="https://images.all-free-download.com/images/graphiclarge/shopping_cart_icon_vector_red_background_280670.jpg"
              alt="load image"
            />
            <span
              style={{
                border: "2px solid red",
                borderRadius: "50%",
                backgroundColor: "red",
                position: "relative",
                bottom: "1rem",
                right: "1.4rem",
                color: "black",
              }}
            >
              {getdata.length}
            </span>
            <Button type="primary" onClick={handleclick}>Checkout</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RooteNav;
