import { Button, Col, Row } from "antd";
import { Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/ui/container";
import { Link } from "react-router-dom";

const FetureFacility = () => {
  const { Meta } = Card;

  const [facilities, setFacilities] = useState([
    {
      name: "",
      description: "",
      image: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    FacilitiesRecords();
  }, []);

  const FacilitiesRecords = () => {
    axios
      .get("https://assignment-05-backend.vercel.app/api/facilities/")
      .then((res) => {
        setFacilities(res.data.data);
      });
  };

  console.log(facilities);

  const displayFacilities = facilities.slice(0, 8);

  return (
    <div className="bg-gray-100 mt-28 pt-10">
      <Container>
        <div className="text-center">
          <h1 className="font-serif text-blue-800 font-semibold py-5 text-3xl">
            Trendy Facilities
          </h1>
        </div>
        <div className="font-serif font-bold">
          <Row gutter={[16, 24]}>
            {displayFacilities.map((facility) => (
              <Col
                className="gutter-row"
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={facility._id}
              >
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                      alt={facility.name}
                      src={facility.image}
                    />
                  }
                >
                  <Meta
                    title={facility.name}
                    description={facility.description.slice(0, 100)}
                  />
                  <Link to={`${facility._id}`}>
                    <Button type="primary" block className="mt-4">
                      View Details
                    </Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FetureFacility;
