import { Form, Input, Button, Select, message } from "antd";
import "antd/dist/reset.css";
import axios from "axios";

const { Option } = Select;

const MakeAdmin = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        values
      );
      message.success("Add Admin Successful!");
      console.log("Response:", response.data);

      form.resetFields();
    } catch (error) {
      message.error("Making Admin failed, please try again.");
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="registration-container">
        <Form
          form={form}
          name="register"
          initialValues={{ role: "admin" }}
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
            <Select disabled placeholder="Select a role" defaultValue="admin">
              <Option>Admin</Option>
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
              Make Admin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MakeAdmin;
