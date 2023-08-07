import React, { useState } from "react";
import RouteNav from "../components/RouteNav";
import "../css/thali.css";
import { showImage, deleteImage } from "../slices/productslice";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import { Card, Container} from "react-bootstrap";
import { Button} from 'antd';

const Thali = () => {
  const getdata = useSelector((state) => state.thaliapp.image);

  const dispatch = useDispatch();

  //show images when we click add button
  const handleShow = (ele) => {
    dispatch(showImage(ele));
  };

  //delete images when we click delete button
  const handleDelete = (index) => {
    // console.log(index)
    //console.log(getdata)
    let n = 0;
    for (let i = 0; i < getdata.length; i++) {
      if (getdata[i].id == index) {
        n = i;
      }
    }
    dispatch(deleteImage(n));
  };

  //customised data
  const [state, setState] = useState([
    {
      id: 1,
      title: "Chhapati",
      price: 10,
      images:
        "https://www.antoskitchen.com/wp-content/uploads/2017/01/Pulkha-Roti.jpg",
      quantity: 1,
      totalQuantityPrice: 1,
    },
    {
      id: 2,
      title: "Pickle ",
      price: 50,
      images:
        "https://vaya.in/recipes/wp-content/uploads/2019/01/Mango-pickle.jpg",
      quantity: 1,
      totalQuantityPrice: 1,
    },
    {
      id: 3,
      title: "Curd",
      price: 30,
      images: "https://static.toiimg.com/photo/msid-69960415/69960415.jpg",
      quantity: 1,
      totalQuantityPrice: 1,
    },
    {
      id: 4,
      title: "Sweet",
      price: 500,
      images: "https://im.hunt.in/local/Gallery/3030647/l/3030647_c5bf8.jpg",
      quantity: 1,
      totalQuantityPrice: 1,
    },
    {
      id: 5,
      title: " Daal",
      price: 100,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJ_bOtJ0Ix3KP4uUjANIZbR7Tat9FC5Aa0Pr7Ex93Lpa_yn4yJGIhML8ZiuDfAh0__wI&usqp=CAU",
      quantity: 1,
      totalQuantityPrice: 1,
    },
    {
      id: 6,
      title: "Paneer Dish",
      price: 150,
      images:
        "https://sangskitchen.b-cdn.net/wp-content/uploads/2020/03/Tofu-masala.jpg",
      quantity: 1,
      totalQuantityPrice: 1,
    },
  ]);
  return (
    <div className="thali_page ">
      <div className="row">
        <RouteNav />

        <div className="main_show">
          {getdata.map((items) => (
            <span className="image_show" key={items.id}>
              <Image
                width={250}
                height={150}
                className={"image_layout"}
                src={items.images}
              />

              <div className="title">{items.title}</div>

              <div className="price">Price: ₹{items.price}</div>
            </span>
          ))}
        </div>
        <Container>
          <div className="row">
            {state.map((ele) => (
              <div
                className="col-md-3"
                key={ele.id}
                style={{ marginBottom: "20px" }}
              >
                <Card className="h-100 text-center" style={{ width: "18rem" }}>
                  <div className="d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      src={ele.images}
                      style={{ width: "17rem", height: "8rem" }}
                    />
                  </div>

                  <Card.Body>
                    <Card.Title>{ele.title} </Card.Title>
                    <Card.Text>INR: {ele.price}</Card.Text>
                  </Card.Body>

                  <Card.Footer className="d-flex justify-content-between">
                    <Button type="primary" onClick={() => handleShow(ele)}>
                      Add
                    </Button>
                    <Button
                    type="primary" danger
                      onClick={() => handleDelete(ele.id)}
                    >
                      Delete
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Thali;
