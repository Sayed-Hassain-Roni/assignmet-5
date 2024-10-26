import { useState, useEffect } from "react";
import {
  DatePicker,
  Button,
  Card,
  Row,
  Col,
  Form,
  message,
  Select,
} from "antd";
import axios from "axios";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { Moment } from "moment";
import Container from "../../components/ui/container";
import moment from "moment";

const { Option } = Select;

const BookingPage = () => {
  const initialFacilityState = {
    name: "",
    pricePerHour: 0,
    startTime: "",
    image: "",
    endTime: "",
  };

  const { id } = useParams();
  const [facility, setFacility] = useState(initialFacilityState);
  const [availableSlots, setAvailableSlots] = useState([initialFacilityState]);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [payableAmount, setPayableAmount] = useState<number>(0);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  useEffect(() => {
    const fetchFacilityDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/facility/${id}`);
        setFacility(res.data.data);
      } catch (error) {
        console.error("Error fetching facility details:", error);
        message.error("Failed to fetch facility details.");
      }
    };
    fetchFacilityDetails();
  }, [id]);

  const checkAvailability = async () => {
    if (!selectedDate) {
      message.error("Please select a date.");
      return;
    }

    try {
      const date = selectedDate.format("YYYY-MM-DD");
      const res = await axios.get(
        `http://localhost:5000/api/check-availability?date=${date}&facilityId=${id}`
      );

      if (res.data.availableSlots.length === 0) {
        message.info("No available slots for this date.");
      } else {
        setAvailableSlots(res.data.availableSlots);
      }
    } catch (error) {
      console.error("Error checking availability:", error);
      message.error("Could not check availability. Please try again.");
    }
  };

  const calculatePayableAmount = () => {
    if (selectedStartTime && selectedEndTime) {
      const start = moment(selectedStartTime, "HH:mm");
      const end = moment(selectedEndTime, "HH:mm");
      const duration = moment.duration(end.diff(start));
      const hours = duration.asHours();

      const totalAmount = hours * facility.pricePerHour;
      setPayableAmount(totalAmount);
    }
  };

  useEffect(() => {
    if (selectedStartTime && selectedEndTime) {
      calculatePayableAmount();
    }
  }, [selectedStartTime, selectedEndTime]);

  const handleBooking = async (values: any) => {
    if (!selectedDate || !selectedStartTime || !selectedEndTime) {
      message.error("Please complete all fields.");
      console.log(values);
      return;
    }

    const startTime = moment(selectedStartTime, "HH:mm");
    const endTime = moment(selectedEndTime, "HH:mm");
    const totalHours = endTime.diff(startTime, "hours", true);
    const payableAmount = totalHours * facility.pricePerHour;

    const bookingData = {
      date: selectedDate.format("YYYY-MM-DD"),
      startTime: selectedStartTime,
      endTime: selectedEndTime,
      facility: id,
      payableAmount: payableAmount,
      userID: userID,
      isBooked: "confirmed",
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings/create",
        bookingData
      );

      if (res.data.success) {
        message.success("Booking successful!");
        console.log(bookingData);
        navigate("/payment", { state: { bookingData, facility } });
      } else {
        message.error("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking facility:", error);
      message.error("An error occurred while booking. Please try again.");
    }
  };

  return (
    <div>
      <CommonLayout />
      <div className="py-10">
        <Container>
          <div className="bg-white pt-20">
            <div className="container">
              {facility && (
                <Card
                  title="Facility Overview"
                  style={{ marginBottom: "20px" }}
                >
                  <p>
                    <strong>Name:</strong> {facility.name}
                  </p>
                  <p>
                    <strong>Price Per Hour:</strong> ${facility.pricePerHour}
                  </p>
                  <img
                    src={facility.image}
                    alt={facility.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              )}

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <DatePicker
                    onChange={(date: any) => setSelectedDate(date)}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  <Button
                    type="primary"
                    onClick={checkAvailability}
                    style={{ marginBottom: "20px" }}
                  >
                    Check Availability
                  </Button>

                  {availableSlots.length > 0 && (
                    <div style={{ marginTop: "20px" }}>
                      <h4>Available Time Slots:</h4>
                      <ul>
                        {availableSlots.map((slot) => (
                          <li key={`${slot.startTime}-${slot.endTime}`}>
                            {slot.startTime} - {slot.endTime}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Col>

                <Col span={12}>
                  <Form form={form} onFinish={handleBooking}>
                    <Form.Item
                      label="Start Time"
                      name="startTime"
                      rules={[
                        {
                          required: true,
                          message: "Please select a start time!",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select Start Time"
                        onChange={(value) => setSelectedStartTime(value)}
                      >
                        {availableSlots.map((slot) => (
                          <Option key={slot.startTime} value={slot.startTime}>
                            {slot.startTime}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label="End Time"
                      name="endTime"
                      rules={[
                        {
                          required: true,
                          message: "Please select an end time!",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select End Time"
                        onChange={(value) => setSelectedEndTime(value)}
                      >
                        {availableSlots.map((slot) => (
                          <Option key={slot.endTime} value={slot.endTime}>
                            {slot.endTime}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Book Now
                      </Button>
                    </Form.Item>

                    {payableAmount > 0 && (
                      <div style={{ marginTop: "10px" }}>
                        <h4>
                          Total Payable Amount: ${payableAmount.toFixed(2)}
                        </h4>
                      </div>
                    )}
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
