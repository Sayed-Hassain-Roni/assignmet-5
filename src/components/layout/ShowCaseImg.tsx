import axios from "axios";
import { useEffect, useState } from "react";
import "./Showcase.css";

const MasonryGallery = () => {
  const types = {
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    _id: "",
  };

  const [images, setProduct] = useState([types]);

  //Get Function...

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
      });
  };

  return (
    <div className="mt-4 mb-10">
      <h1 className="text-center font-sans text-green-600 text-2xl py-9 ">
        Our Plants Gallary
      </h1>
      <div className="mosaic-gallery ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src?.imageUrl}
            alt={`Image ${index + 1}`}
            className="mosaic-item "
          />
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
