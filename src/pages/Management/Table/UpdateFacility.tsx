import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Container from "../../../components/ui/container";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";

type TProducts = {
  name: string;
  description: string;
  isDeleted: boolean;
  pricePerHour: number;
  location: string;
  image?: string;
};

const UpdateProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<TProducts>({
    name: "",
    description: "",
    isDeleted: false,
    pricePerHour: 0,
    location: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`https://assignment-05-backend.vercel.app/api/facility/${id}`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value === "true" || value === "false" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://assignment-05-backend.vercel.app/api/facility/${id}`,
        product
      );
      message.success("Product Updated Successfully!");
      navigate("/facility");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <Container>
        <div className="bg-slate-100 rounded-lg shadow-md p-6">
          <h1 className="text-center pt-4 font-bold text-fuchsia-900 font-serif text-3xl">
            Edit Your Facility
          </h1>
          <Link className="ml-24 mx-5" to="/facility">
            <button className="bg-green-500 w-24 h-10 font-bold text-white">
              Back
            </button>
          </Link>
          <div className="mx-auto">
            <form
              className="max-w-lg mx-auto pb-16 font-semibold"
              onSubmit={handleSubmit}
            >
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Name :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product title"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Price :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="number"
                  min={1}
                  step={0.01}
                  id="pricePerHour"
                  name="pricePerHour"
                  value={product.pricePerHour}
                  onChange={handleChange}
                  required
                  placeholder="Enter product price"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Descriptions :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  placeholder="Enter product descriptions"
                />
              </div>
              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  Location :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="location"
                  name="location"
                  value={product.location}
                  onChange={handleChange}
                  required
                  placeholder="Enter product descriptions"
                />
              </div>
              <div className="py-1">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="isDeleted"
                >
                  Is Deleted:
                </label>
                <input
                  type="checkbox"
                  className="p-2 border-2 rounded border-green-800"
                  id="isDeleted"
                  name="isDeleted"
                  checked={product.isDeleted}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "isDeleted",
                        value: e.target.checked.toString(),
                      },
                    })
                  }
                />
              </div>

              <div className="py-1 ">
                <label
                  className="mr-10 text-lg font-mono text-green-900 block my-1"
                  htmlFor="name"
                >
                  ImageUrl :
                </label>
                <input
                  className="p-2 w-11/12 border-2 rounded border-green-800"
                  type="text"
                  id="image"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  required
                  placeholder="Enter product image url"
                />
              </div>

              <div className="mt-6 flex gap-7">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Update Facility
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setProduct({
                      name: "",
                      description: "",
                      pricePerHour: 0,
                      location: "",
                      image: "",
                      isDeleted: false,
                    })
                  }
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProduct;
