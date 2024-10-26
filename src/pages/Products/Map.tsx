import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const MapSection = () => {
  return (
    <div className="map-section p-8 bg-gray-200 rounded-md ">
      <h2 className="text-3xl font-serif text-blue-800 font-semibold  text-center mb-14">
        How you find Us
      </h2>

      <Row gutter={[32, 32]} justify="center" align="middle">
        <Col xs={24} md={14}>
          <div
            style={{
              height: "400px",
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14689.619644669932!2d91.39322879999999!3d23.008900549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1729326134686!5m2!1sen!2sbd"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <Card
            hoverable
            className="p-6"
            style={{
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>
              <EnvironmentOutlined
                style={{ fontSize: "18px", marginRight: "10px" }}
              />
              123 Main Street, Dhaka, Bangladesh
            </p>
            <p>
              <PhoneOutlined
                style={{ fontSize: "18px", marginRight: "10px" }}
              />
              +088 123 456 789
            </p>
            <p>
              <MailOutlined style={{ fontSize: "18px", marginRight: "10px" }} />
              contact@example.com
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MapSection;
