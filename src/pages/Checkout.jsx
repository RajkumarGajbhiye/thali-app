import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteImage,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} from "../slices/productslice";
import "../css/checkout.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.thaliapp.image);

  const totalPrice = useSelector((state) => state.thaliapp.totalPrice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //back to thali page
  const handleclick = () => {
    navigate("/thali");
  };

  //add quantity
  const addHandler = (index) => {
    dispatch(increaseQuantity(index));
    dispatch(calculateTotal());
  };

  //minus quantity
  const minHandler = (index) => {
    if (state[index].quantity <= 1) {
      dispatch(deleteImage(index));
      dispatch(calculateTotal());
    } else {
      dispatch(decreaseQuantity(index));
      dispatch(calculateTotal());
    }
  };

  //delete item
  const handledelete = (index) => {
    dispatch(deleteImage(index));
    dispatch(calculateTotal());
  };

  // when we add items in thali so display unit price in checkout page
  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <div className="table_data">
      <span className="button">
        <button className="btn btn-success" onClick={handleclick}>
          Back to home page
        </button>
      </span>

      <div>
        <h1>Summary of your thali and the final price</h1>
      </div>

      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          width: "60%",
          margin: "auto",
          backgroundColor: "blue",
          boxShadow: " 0 0 10px rgba(14, 13, 13, 0.959)",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Index No</th>

            <th>Image</th>

            <th>Name</th>

            <th>Quantity</th>

            <th>Total</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {state.map((ele, index) => {
            return (
              <tr key={ele.id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={ele.images}
                    alt=""
                    className="img-fluid"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>

                <td>{ele.title}</td>

                <td>
                  <span style={{ display: "flex", justifyContent: "center" }}>
                    <span
                      className="btn btn-primary"
                      style={{ width: "10px" }}
                      onClick={() => minHandler(index)}
                    >
                      -
                    </span>
                    <span className="mx-2">{ele.quantity}</span>
                    <span
                      style={{ width: "10px" }}
                      className="btn btn-primary"
                      onClick={() => addHandler(index)}
                    >
                      +
                    </span>
                  </span>
                </td>

                <td>
                  <span>total: {ele.price * parseInt(ele.quantity)}</span>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    style={{ position: "relative", left: "40px" }}
                    onClick={() => handledelete(index)}
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>

            <td></td>

            <td></td>

            <td></td>

            <td>Rs-{totalPrice}</td>

            <td></td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default Checkout;
