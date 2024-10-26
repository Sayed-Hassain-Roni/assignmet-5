import { useLocation } from "react-router-dom";
import { Card } from "antd";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";
import Container from "../../components/ui/container";

const BookingConfirmationPage = () => {
  const location = useLocation();
  const { bookingData, facility } = location.state || {};

  return (
    <div>
      <CommonLayout />
      <div className="pt-28 pb-10 w-6/12 mx-auto">
        <Container>
          <Card title="Booking Confirmation">
            <p>
              <strong>Facility:</strong> {facility?.name}
            </p>
            <p>
              <strong>Date:</strong> {bookingData?.date}
            </p>
            <p>
              <strong>Time Slot:</strong> {bookingData?.startTime} -{" "}
              {bookingData?.endTime}
            </p>
            <p>
              <strong>Total Amount Paid:</strong> $
              {bookingData?.payableAmount.toFixed(2)}
            </p>
            <p>Your booking has been confirmed!</p>
          </Card>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirmationPage;
