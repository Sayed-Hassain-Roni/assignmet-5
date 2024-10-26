import { Button, Flex, Image, Layout, Pagination, Rate } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Container from "../../components/ui/container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "../../components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { addToCart, getTotals } from "../../redux/featues/CartSlice";
import Search from "antd/es/input/Search";
import CommonLayout from "../../components/layout/CommonLayout";

const AllProducts = () => {
  const types = {
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    _id: "",
    rating: 0,
  };

  const [products, setProduct] = useState([types]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const fetchRecords = (page: any) => {
    axios
      .get(
        `https://assignment04-backend.vercel.app/api/v1/product/show?page=${page}&size=12`
      )
      .then((res) => {
        setProduct(res.data.products);
        setTotalPages(res.data.totalCount);
      });
  };

  const sortProducts = (order: string) => {
    const data = [...products];
    if (order === "asc") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      data.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (order === "lowToHigh") {
      data.sort((a, b) => Number(a.price) - Number(b.price));
    }
    setProduct(data);
  };

  const dispatch = useDispatch();
  const handleAddtoCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const cart = useSelector((state: any) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div>
      <Layout>
        <CommonLayout />
        <ToastContainer />
        {/* <Container>
          <div><Outlet /></div>
        </Container> */}
      </Layout>
      <div className="border-t-2 mt-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 mt-10">
            <Flex gap="small" wrap>
              <h1 className="font-semibold mt-1">Sort by : </h1>
              <Button onClick={() => sortProducts("desc")}>
                Price high to low
              </Button>
              <Button onClick={() => sortProducts("lowToHigh")}>
                Price low to high
              </Button>
              <Button onClick={() => sortProducts("asc")}>A to Z</Button>
            </Flex>
            <Search
              placeholder="Find your products..."
              allowClear
              className="w-full md:w-56"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <h1 className="mb-5 text-2xl text-green-600 font-semibold font-mono text-center">
            All Products...
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter((product) => {
                if (search === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => (
                <Card key={product._id} className="py-2">
                  <CardContent>
                    <Image
                      style={{
                        width: "100%",
                        height: "auto",
                        minHeight: "190px",
                      }}
                      alt="example"
                      src={product.imageUrl}
                    />
                    <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                      Name:{" "}
                      <span className="text-base text-blue-900">
                        {product.name.slice(0, 10)}
                      </span>
                    </h1>
                    <h1 className="text-lg font-extrabold text-slate-700 font-mono">
                      Price:{" "}
                      <span className="text-lg font-serif text-blue-900">
                        ${product.price}
                      </span>
                    </h1>
                    <h1>
                      <Rate
                        className="text-sm text-yellow-700"
                        disabled
                        defaultValue={product.rating}
                      />
                    </h1>
                    <div className="flex justify-between mt-5">
                      <Link to={product._id}>
                        <Button className="bg-green-600 font-extrabold w-20 h-10 text-white text-base">
                          Details
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleAddtoCart(product)}
                        className="bg-green-500 font-extrabold w-25 h-10 text-white text-base"
                      >
                        Add Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="my-10">
            <Pagination
              align="center"
              total={totalPages}
              pageSize={12}
              onChange={(page) => {
                fetchRecords(page);
              }}
            />
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
