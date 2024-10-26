import { Card, Rate, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const TestimonialShowcase = () => {
  const testimonials = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Booking a facility was so easy and fast! The user experience is seamless, and I love how clear everything is!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "The variety of facilities available is amazing. The booking process was smooth, and I received confirmation right away.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Great service and support! I had a few questions, and the team was really helpful and responsive.",
      rating: 5,
    },
    {
      name: "Emily White",
      image:
        "https://images.unsplash.com/photo-1515552868968-a119fcb51395?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "I love how easy it was to filter and find exactly what I needed. I’ll definitely be using this again!",
      rating: 4.5,
    },
    {
      name: "Chris Green",
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Super easy to use! The facilities are well-categorized and the booking confirmation was quick!",
      rating: 4,
    },

    {
      name: "David Blue",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "This platform made it super easy to find and book a facility. I'll definitely be using it again!",
      rating: 4.5,
    },
  ];

  const CustomArrow = (type: "prev" | "next") => (
    <div
      className={`arrow ${
        type === "prev" ? "left" : "right"
      } flex justify-center items-center`}
      style={{
        position: "absolute",
        top: "50%",
        [type === "prev" ? "left" : "right"]: "-30px",
        zIndex: 1,
        backgroundColor: "#1890ff",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      {type === "prev" ? (
        <LeftOutlined style={{ color: "white" }} />
      ) : (
        <RightOutlined style={{ color: "white" }} />
      )}
    </div>
  );

  return (
    <div className="testimonial-section p-8 bg-gray-50 rounded-md">
      <h2 className="text-3xl font-serif text-blue-800 font-bold text-center mb-12">
        Happy Customers
      </h2>

      <div className="relative">
        <Carousel
          autoplay
          arrows
          prevArrow={CustomArrow("prev")}
          nextArrow={CustomArrow("next")}
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="py-4">
              <Card
                hoverable
                className="transition-transform transform hover:scale-105 p-4"
                style={{
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  margin: "0 16px",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "16px",
                  }}
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="italic text-gray-600">
                  "{testimonial.quote.slice(0, 80)}"
                </p>
                <Rate disabled defaultValue={testimonial.rating} />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
