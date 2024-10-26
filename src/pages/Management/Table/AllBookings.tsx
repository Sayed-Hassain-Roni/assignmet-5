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

import { useEffect, useState } from "react";
import axios from "axios";

const AllBooking = () => {
  const types = {
    date: "",
    startTime: "",
    endTime: "",
    facility: "",
    isBooked: "",
    _id: "",
  };

  const [products, setProduct] = useState([types]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    axios.get("http://localhost:5000/api/bookings/allbookings").then((res) => {
      setProduct(res.data);
    });
  };

  return (
    <div>
      <Container>
        <Table className="border-2 border-red-950 mb-16 overflow-x-auto">
          <TableHeader className="border-b-2 border-red-900">
            <TableRow className="text-lg ">
              {[
                "SL.No",
                "Booking Date",
                "Start Time",
                "End Time",
                "Status",
                "Facility ID",
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
            {products.map((product, index) => (
              <TableRow
                key={product?._id}
                className="text-lg text-red-700 border-red-900 border-2 "
              >
                <TableCell>{index + 1}</TableCell>

                <TableCell className="border-2 border-red-900">
                  {product?.date}
                </TableCell>
                <TableCell className="border-2 border-red-900">
                  {product?.startTime}
                </TableCell>
                <TableCell className="border-2 border-red-900">
                  {product?.endTime}
                </TableCell>
                <TableCell className="border-2 border-red-900">
                  {product?.isBooked}
                </TableCell>
                <TableCell className="border-2 border-red-900">
                  {product?.facility}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default AllBooking;
