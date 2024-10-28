import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Container from "../../components/ui/container";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "https://assignment-05-backend.vercel.app/api/auth/login",
        values
      );

      console.log(response.data.data.User._id);

      const userName = response.data.data.User.name;
      const userID = response.data.data.User._id;

      localStorage.setItem("userID", userID);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.data.User.role);
      localStorage.setItem("userName", userName);

      message.success(`Welcome, ${userName}!`);

      if (response.data.data.User.role === "admin") {
        navigate("/home");
      } else {
        navigate("/home");
      }
    } catch (error) {
      message.error("Login failed, please check your credentials.");
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <Container>
          <div className="login-container pb-10 pt-16">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                >
                  Login
                </Button>
              </Form.Item>

              <Form.Item>
                <div className="register-link">
                  Don't have an account?{" "}
                  <Link className="text-blue-700 font-semibold" to="/register">
                    Register
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
