import { Col, Image, Row } from "antd";
import CommonLayout from "../../components/layout/CommonLayout";
import Container from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../redux/featues/CartSlice";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Footer from "../Footer/Footer";

const Detail = () => {
  const types = {
    name: "",
    price: "",
    category: "",
    description: "",
    stockQuantity: "",
    imageUrl: "",
    _id: "",
  };

  const { id } = useParams();
  const [plants, setProduct] = useState(types);

  useEffect(() => {
    axios
      .get(`https://assignment04-backend.vercel.app/api/v1/product/${id}`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddtoCart = (plants: any) => {
    dispatch(addToCart(plants));
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  const cart = useSelector((state: any) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div>
      <CommonLayout />
      <ToastContainer />
      <div className="pb-10 pt-36 bg-gray-100">
        <Container>
          <Row className="mx-auto gap-10  w-full flex flex-col md:flex-row">
            <Col md={11} xs={24} className="flex justify-center">
              <Image
                style={{ maxWidth: "100%", height: "auto" }}
                src={plants.imageUrl}
                alt={plants.name}
              />
            </Col>
            <Col md={11} xs={24} className="mt-4  md:mt-0">
              <div className="mx-auto xs:ml-10 lg:py-4 ">
                <h1 className="text-2xl text-green-800 font-serif font-bold border-b-2 inline-block pb-2 border-black">
                  {plants.name}
                </h1>
                <p className="mt-4 text-green-800 text-base font-semibold">
                  Category: <span className="text-sm">{plants.category}</span>
                </p>
                <h4 className="text-lg text-green-800 font-serif font-semibold mt-3">
                  Price: ${plants.price}
                </h4>
                <p className="mt-3 text-base text-green-700 font-semibold font-serif">
                  {plants.description}
                </p>
                <Button
                  onClick={() => handleAddtoCart(plants)}
                  className="bg-purple-500 w-full font-serif font-semibold text-base mt-10"
                >
                  ADD TO CART
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
