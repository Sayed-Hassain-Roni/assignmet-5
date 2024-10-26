import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, message } from "antd";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";
import Container from "../../components/ui/container";

const AmrPayPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, facility } = location.state || {};

  const handlePaymentSuccess = () => {
    message.success("Payment successful,Thanks!");
    navigate("/booking-confirmation", { state: { bookingData, facility } });
  };

  return (
    <div>
      <CommonLayout />
      <div className="pt-28 pb-10 w-6/12 mx-auto">
        <Container>
          <Card className="bg-blue-200" title="Payment Page">
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
              <strong>Total Payable Amount:</strong> $
              {bookingData?.payableAmount.toFixed(2)}
            </p>

            <Button
              type="primary"
              onClick={handlePaymentSuccess}
              style={{ marginTop: "20px" }}
            >
              Make Payment
            </Button>
          </Card>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AmrPayPage;
