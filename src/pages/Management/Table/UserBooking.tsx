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

const UserBooking = () => {
  const types = {
    date: "",
    startTime: "",
    endTime: "",
    facility: "",
    isBooked: "",
    _id: "",
  };

  const [, setAllBookings] = useState([types]);
  const [userBookings, setUserBookings] = useState([types]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  useEffect(() => {
    if (userID) {
      fetchRecords();
    }
  }, [userID]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        "https://assignment-05-backend.vercel.app/api/bookings/allbookings"
      );
      setAllBookings(response.data);

      const filteredBookings = response.data.filter(
        (booking: any) => booking.userID === userID
      );
      setUserBookings(filteredBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Container>
        <div className="overflow-x-auto">
          <Table className="min-w-full border-2 border-red-950 mb-16">
            <TableHeader className="border-b-2 border-red-900">
              <TableRow className="text-lg">
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
                    className="border-2 border-red-900 font-bold text-center text-sm sm:text-base"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-center">
              {userBookings.map((booking, index) => (
                <TableRow
                  key={booking?._id}
                  className="text-sm sm:text-base text-red-700 border-red-900 border-2"
                >
                  <TableCell className="px-4 py-2">{index + 1}</TableCell>
                  <TableCell className="border-2 border-red-900 px-4 py-2">
                    {booking?.date}
                  </TableCell>
                  <TableCell className="border-2 border-red-900 px-4 py-2">
                    {booking?.startTime}
                  </TableCell>
                  <TableCell className="border-2 border-red-900 px-4 py-2">
                    {booking?.endTime}
                  </TableCell>
                  <TableCell className="border-2 border-red-900 px-4 py-2">
                    {booking?.isBooked}
                  </TableCell>
                  <TableCell className="border-2 border-red-900 px-4 py-2">
                    {booking?.facility}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default UserBooking;
