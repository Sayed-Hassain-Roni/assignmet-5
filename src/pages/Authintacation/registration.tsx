import { Form, Input, Button, Select, message } from "antd";
import "antd/dist/reset.css";
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "https://assignment-05-backend.vercel.app/api/auth/signup",
        values
      );
      message.success("Registration successful!");
      navigate("/login");
      console.log("Response:", response.data);
    } catch (error) {
      message.error("Registration failed, please try again.");
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="registration-container py-16">
        <Form
          name="register"
          initialValues={{ role: "user" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="registration-form"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item
            name="role"
            rules={[{ required: true, message: "Please select your role!" }]}
          >
            <Select placeholder="Select a role">
              <Option value="user">User</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="registration-button"
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <div className="login-link">
              Already have an account?{" "}
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
