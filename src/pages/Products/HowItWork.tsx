import { Row, Col, Button } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  CalendarOutlined,
  FormOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Container from "../../components/ui/container";
import { NavLink } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search Facility",
      description:
        "Use the search or filter options to find a facility that meets your needs.",
      icon: <SearchOutlined style={{ fontSize: "30px", color: "white" }} />,
      bgColor: "#1890ff",
    },
    {
      title: "Select Facility",
      description:
        "Click on the facility to view details like description, price, and amenities.",
      icon: <HomeOutlined style={{ fontSize: "30px", color: "white" }} />,
      bgColor: "#52c41a",
    },
    {
      title: "Check Availability",
      description: "Check if the facility is available on your desired date.",
      icon: <CalendarOutlined style={{ fontSize: "30px", color: "white" }} />,
      bgColor: "#faad14",
    },
    {
      title: "Make a Booking",
      description: "Enter your details and confirm your booking.",
      icon: <FormOutlined style={{ fontSize: "30px", color: "white" }} />,
      bgColor: "#eb2f96",
    },
    {
      title: "Confirmation",
      description: "Receive your booking confirmation via email or SMS.",
      icon: (
        <CheckCircleOutlined style={{ fontSize: "30px", color: "white" }} />
      ),
      bgColor: "#13c2c2",
    },
  ];

  return (
    <div className="bg-blue-100 pb-14">
      <Container>
        <div className="how-it-works-section   mt-14 rounded-md">
          <h2 className="text-3xl font-serif text-blue-800 py-9 font-semibold   text-center mb-8">
            How to Book a Facility
          </h2>

          {steps.map((step, index) => (
            <Row
              key={index}
              gutter={[16, 16]}
              className={`mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <Col xs={24} md={12} className="flex justify-center items-center">
                <div className="bg-blue-400 rounded-full p-4 shadow-lg transition-transform transform hover:scale-110">
                  {step.icon}
                </div>
              </Col>

              <Col
                xs={24}
                md={12}
                className="flex justify-center items-start flex-col"
              >
                <div className="p-4 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
                  <h3 className="text-xl text-blue-950 font-mono font-bold">
                    {step.title}
                  </h3>
                  <p className="text-md text-red-900 font-semibold">
                    {step.description}
                  </p>
                </div>
              </Col>
            </Row>
          ))}

          <div className="text-center mt-14">
            <NavLink to={"/allfacility"}>
              <Button className="font-bold" type="primary" size={"large"}>
                Start Booking Now
              </Button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
