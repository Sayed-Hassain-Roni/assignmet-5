import { SetStateAction, useEffect, useState } from "react";
import { Card, Col, Row, Input, Button, Slider } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "../../components/ui/container";
import CommonLayout from "../../components/layout/CommonLayout";
import Footer from "../Footer/Footer";

const { Meta } = Card;

const FacilityListing = () => {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = () => {
    axios
      .get("http://localhost:5000/api/facilities")
      .then((res) => {
        const activeFacilities = res.data.data.filter(
          (facility: { isDeleted: any }) => !facility.isDeleted
        );
        setFacilities(activeFacilities);
      })
      .catch((err) => console.error(err));
  };

  const handlePriceChange = (value: SetStateAction<number[]>) => {
    setPriceRange(value);
  };

  const filterFacilities = (
    facilities: any[],
    searchTerm: string,
    priceRange: number[]
  ) => {
    return facilities.filter((facility) => {
      const matchesSearchTerm =
        !searchTerm ||
        facility.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriceRange =
        facility.pricePerHour >= priceRange[0] &&
        facility.pricePerHour <= priceRange[1];
      return matchesSearchTerm && matchesPriceRange;
    });
  };

  const filteredFacilities = filterFacilities(
    facilities,
    searchTerm,
    priceRange
  );

  return (
    <div>
      <CommonLayout />
      <div className="bg-white pt-20 ">
        <Container>
          <div className="facility-listing-container p-8 ">
            <h2 className="text-2xl font-mono text-red-700 font-bold text-center mb-8">
              Available Sports Facilities
            </h2>
            <div>
              <Row gutter={[16, 16]} className="mb-8 justify-center gap-16">
                <Col lg={8} xs={24} md={8}>
                  <Input
                    size="large"
                    placeholder="Search by Facility Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Col>
                <Col className="lg:-mt-2" lg={8} xs={24} md={24}>
                  <h4 className="text-lg font-serif text-green-800 font-semibold mb-2">
                    Filter by Price (per hour)
                  </h4>
                  <Slider
                    range
                    step={5}
                    min={0}
                    max={100}
                    defaultValue={priceRange}
                    onChange={handlePriceChange}
                  />
                </Col>
              </Row>
            </div>
            <Row className=" border-t-2 border-red-300 pt-6" gutter={[32, 32]}>
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  <Col xs={24} md={8} lg={6} key={facility._id}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={facility.name}
                          src={facility.image}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      }
                    >
                      <Meta
                        title={facility.name}
                        description={`Price Per Hour: $${facility.pricePerHour}`}
                      />
                      <Link to={`/allfacility/${facility._id}`}>
                        <Button type="primary" block className="mt-4">
                          View Details
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No facilities found</p>
              )}
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FacilityListing;
