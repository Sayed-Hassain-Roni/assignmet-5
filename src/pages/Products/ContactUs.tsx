import { Card, Col, Row, Button, Form, Input } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <CommonLayout />
      <div>
        <div className="contact-us-container p-8 bg-gray-100 rounded-md mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif text-blue-800">
            Contact Us
          </h2>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={12}>
              <Card
                className="p-8"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <h3 className="text-2xl font-serif text-blue-800 font-bold mb-6">
                  Get in Touch
                </h3>
                <Form layout="vertical" className="font-semibold ">
                  <Form.Item label="Your Name" name="name" required>
                    <Input size="large" placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Email Address" name="email" required>
                    <Input size="large" placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item label="Subject" name="subject">
                    <Input size="large" placeholder="Enter the subject" />
                  </Form.Item>
                  <Form.Item label="Message" name="message" required>
                    <Input.TextArea rows={4} placeholder="Enter your message" />
                  </Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    block
                    style={{
                      backgroundColor: "#1890ff",
                      borderColor: "#1890ff",
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>

            <Col xs={24} md={10}>
              <Card
                className="map-card mb-8"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
              >
                <h3 className="text-2xl font-serif text-blue-800 font-bold text-center mb-4">
                  Our Location
                </h3>
                <div
                  style={{
                    height: "250px",
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={
                      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14689.619644669932!2d91.39322879999999!3d23.008900549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1729326134686!5m2!1sen!2sbd"
                    }
                    allowFullScreen
                  ></iframe>
                </div>
              </Card>

              <Card
                hoverable
                className="contact-details-card p-6"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="text-2xl font-serif text-blue-800 font-bold mb-4">
                  Contact Information
                </h3>
                <p>
                  <EnvironmentOutlined
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      color: "#1890ff",
                    }}
                  />
                  123 Main Street, Dhaka, Bangladesh
                </p>
                <p>
                  <PhoneOutlined
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      color: "#52c41a",
                    }}
                  />
                  +33 123 456 789
                </p>
                <p>
                  <MailOutlined
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      color: "#ff4d4f",
                    }}
                  />
                  contact@ourbusiness.com
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
