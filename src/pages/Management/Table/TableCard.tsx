import { Button, Image, Pagination, message } from "antd";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Container from "../../../components/ui/container";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";

const TableDemo = () => {
  const types = {
    name: "",
    pricePerHour: "",
    location: "",
    image: "",
    _id: "",
  };

  const [facilities, setFacilities] = useState([types]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = () => {
    axios
      .get("https://assignment-05-backend.vercel.app/api/facilities")
      .then((res) => {
        const activeFacilities = res.data.data.filter(
          (facility: { isDeleted: any }) => !facility.isDeleted
        );
        setFacilities(activeFacilities);
      })
      .catch((err) => console.error(err));
  };

  // Delete product function
  const deleteUser = async (id: any) => {
    await axios
      .delete(`https://assignment-05-backend.vercel.app/api/facility/${id}`)
      .then(() => {
        setFacilities((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
        window.confirm("Are you sure to delete this product?");
        message.success("Product Deleted");
      })
      .catch((error) => console.log(error));
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const paginatedProducts = facilities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Container>
        <div className="pb-5 flex justify-end">
          <NavLink to={"/addnew"}>
            <Button
              className="text-lg font-bold"
              type="primary"
              icon={<PlusOutlined />}
            >
              Add New Facility
            </Button>
          </NavLink>
        </div>

        <div>
          <Table className="border-2 border-red-950 mb-16 overflow-x-auto">
            <TableHeader className="border-b-2 border-red-900">
              <TableRow className="text-lg ">
                {[
                  "SL.No",
                  "Product Image",
                  "Facility Name",
                  "Price",
                  "Location",
                  "Actions",
                ].map((header, index) => (
                  <TableHead
                    key={index}
                    className="border-2 border-red-900 font-bold text-center"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-center">
              {paginatedProducts.map((product, index) => (
                <TableRow
                  key={product._id}
                  className="text-lg text-red-700 border-red-900 border-2"
                >
                  <TableCell>
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    <Image
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        height: "auto",
                      }}
                      alt="example"
                      src={product.image}
                    />
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    {product.name}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    ${product.pricePerHour}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    {product.location}
                  </TableCell>
                  <TableCell className="border-2 border-red-900">
                    <div className="flex justify-center gap-3">
                      <Button
                        className="bg-red-800 text-white font-bold"
                        onClick={() => deleteUser(product._id)}
                      >
                        Delete
                      </Button>
                      <Link to={`/edit/${product._id}`}>
                        <Button className="bg-green-600 text-white font-bold">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={facilities.length}
          onChange={handlePageChange}
          className="mt-4 flex justify-center"
        />
      </Container>
    </div>
  );
};

export default TableDemo;
