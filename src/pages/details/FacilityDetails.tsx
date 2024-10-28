import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Col, Row, Spin } from "antd";
import axios from "axios";
import Container from "../../components/ui/container";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";

const FacilityDetails = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://assignment-05-backend.vercel.app/api/facility/${id}`)
      .then((res) => {
        setFacility(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className=" flex justify-center ">
        <Spin className=" mt-56" size="large" />
      </div>
    );
  }

  if (!facility) {
    return <div>No facility data available</div>;
  }

  return (
    <div>
      <CommonLayout />
      <div className="mt-28">
        <Container>
          <div className="facility-details-page mt-10">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <img
                  src={facility.image}
                  alt={facility.name}
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </Col>

              <Col xs={24} md={12}>
                <div className="facility-info">
                  <h1 className="text-3xl font-serif font-bold">
                    {facility.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    {facility.location}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    $ {facility.pricePerHour} per hour
                  </p>
                  <p className="text-lg mt-4">{facility.description}</p>

                  <Link to={`/makebook/${facility._id}`}>
                    <Button type="primary" block className="mt-4">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .facility-info {
                text-align: center;
              }
            }
          `}</style>
          ;
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FacilityDetails;
