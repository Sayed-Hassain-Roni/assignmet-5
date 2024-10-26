import { Card, Col, Row, Timeline } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Container from "../components/ui/container";
import CommonLayout from "../components/layout/CommonLayout";
import Footer from "./Footer/Footer";

// Dummy data for the team section
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    bio: "John has over 15 years of experience in leading tech companies.",
    image:
      "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    bio: "Jane leads the tech team with her vast knowledge of cutting-edge technologies.",
    image:
      "https://images.unsplash.com/photo-1660770666105-d846432047f8?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Brown",
    position: "Lead Developer",
    bio: "Michael is passionate about building scalable web applications.",
    image:
      "https://images.unsplash.com/photo-1626639900752-3ea9001925ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AboutUs = () => {
  return (
    <div>
      <CommonLayout />
      <div className="">
        <div className="about-us-section  rounded-md mt-12">
          <div className="bg-slate-200 pt-20 pb-8">
            <Container>
              <div className="mission-statement text-center mb-12">
                <h1 className="text-4xl  font-mono text-blue-800 font-bold">
                  Our Mission
                </h1>
                <p className="text-lg text-red-900 font-mono font-semibold mt-4 max-w-xl mx-auto">
                  Our platform is dedicated to providing the best booking
                  solutions for your facilities. We believe in simplifying the
                  process and ensuring a smooth experience for all our users.
                </p>
              </div>
            </Container>
          </div>

          <div className="bg-white pt-10 pb-8">
            <Container>
              <div className="team-section mb-12">
                <h2 className="text-3xl font-mono text-blue-900 font-bold text-center mb-8">
                  Meet Our Team
                </h2>
                <Row gutter={[32, 32]} justify="center">
                  {teamMembers.map((member, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                      <Card
                        hoverable
                        style={{
                          width: "300px",
                          borderRadius: "12px",
                          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                          textAlign: "center",
                        }}
                        cover={
                          <img
                            alt={member.name}
                            src={member.image}
                            style={{ height: 250 }}
                          />
                        }
                      >
                        <h3 className="text-xl font-mono text-green-900 font-bold">
                          {member.name}
                        </h3>
                        <p className="text-blue-500 font-semibold">
                          {member.position}
                        </p>
                        <p className="text-blue-950 font-serif">{member.bio}</p>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </div>

          <div>
            <div className="bg-slate-200 pt-10 ">
              <Container>
                <div className="history-section center mb-12">
                  <h2 className="text-3xl text-blue-800 font-mono font-bold text-center mb-8">
                    Our Journey
                  </h2>
                  <Timeline className="xl:ml-96 font-semibold text-blue-950">
                    <Timeline.Item color="green">
                      <strong>2015: </strong>Founded the company with a small
                      team of innovators.
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                      <strong>2017: </strong>Launched the first version of our
                      platform.
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <strong>2020: </strong>Reached over 1 million users and
                      expanded internationally.
                    </Timeline.Item>
                    <Timeline.Item color="purple">
                      <strong>2023: </strong>Introduced advanced AI-powered
                      booking features.
                    </Timeline.Item>
                  </Timeline>
                </div>
              </Container>
            </div>

            <div className="contact-info text-center mb-14 mt-10">
              <Container>
                <h2 className="text-4xl font-mono text-blue-800 font-bold text-center mb-12">
                  Get In Touch With Us
                </h2>

                <Row gutter={[32, 32]} justify="center">
                  <Col xs={24} md={8}>
                    <Card
                      hoverable
                      className="p-6 text-center text-blue-900 bg-slate-200"
                      style={{
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{
                          fontSize: "40px",
                          color: "#ff4d4f",
                          marginBottom: "20px",
                        }}
                      />
                      <h3 className="text-2xl font-semibold mb-4">
                        Our Office
                      </h3>
                      <p>123 Main Street, Dhaka, Bangladesh</p>
                    </Card>
                  </Col>

                  <Col xs={24} md={8}>
                    <Card
                      hoverable
                      className="p-6 text-center text-blue-900 bg-slate-200"
                      style={{
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <PhoneOutlined
                        style={{
                          fontSize: "40px",
                          color: "#ff4d4f",
                          marginBottom: "20px",
                        }}
                      />
                      <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
                      <p>+088 123 456 789</p>
                    </Card>
                  </Col>

                  <Col xs={24} md={8}>
                    <Card
                      hoverable
                      className="p-6 text-center text-blue-900 bg-slate-200"
                      style={{
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <MailOutlined
                        style={{
                          fontSize: "40px",
                          color: "#ff4d4f",
                          marginBottom: "20px",
                        }}
                      />
                      <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                      <p>contact@example.com</p>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
