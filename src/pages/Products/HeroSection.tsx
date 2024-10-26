import React from "react";
import { Button } from "antd";
import Container from "../../components/ui/container";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="hero-section">
      <div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1529281364569-1b33a05ae85e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </h3>
          <Container>
            <div className="hero-content">
              <h1 className="hero-title">
                What kind of facilities are you looking for...
              </h1>
              <div className="hero-button">
                <NavLink to={"/allfacility"}>
                  <Button className="font-bold" type="primary" size={"large"}>
                    Book Now
                  </Button>
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <style>{`
        .hero-content {
          margin-top: -33%;
          margin-left: 100px;
          width: 550px;
        }

        .hero-title {
          font-size: 40px;
          color: white;
          font-family: mono;
          font-weight: bold;
          line-height: 70px;
        }

        .hero-button {
          margin-top: 30px;
        }

       
        @media (max-width: 768px) {
          .hero-content {
            margin-left: 20px;
            width: 90%;
            margin-top: -40%;
          }

          .hero-title {
            font-size: 28px;
            line-height: 50px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            margin-left: 10px;
            margin-top: -50%;
          }

          .hero-title {
            font-size: 22px;
            line-height: 40px;
          }

          img {
            height: 400px; 
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
