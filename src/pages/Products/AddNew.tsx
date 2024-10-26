import { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Card,
  message,
  Space,
} from "antd";
import Container from "../../components/ui/container";
import { useNavigate } from "react-router-dom";

const AddNew = () => {
  interface Slot {
    startTime: string | null;
    endTime: string | null;
  }

  interface Availability {
    date: string | null;
    slots: Slot[];
  }

  const [form] = Form.useForm();
  const [availability, setAvailability] = useState<Availability[]>([
    { date: null, slots: [{ startTime: null, endTime: null }] },
  ]);

  const navigate = useNavigate();

  const addSlot = (index: number) => {
    const newAvailability = [...availability];
    newAvailability[index].slots.push({ startTime: null, endTime: null });
    setAvailability(newAvailability);
  };

  const handleDateChange = (dateString: any, index: any) => {
    const newAvailability = [...availability];
    newAvailability[index].date = dateString;
    setAvailability(newAvailability);
  };

  const handleTimeChange = (timeString: any, index: any, isStart: any) => {
    const newAvailability = [...availability];
    newAvailability[index].slots[0] = {
      ...newAvailability[index].slots[0],
      [isStart ? "startTime" : "endTime"]: timeString,
    };
    setAvailability(newAvailability);
  };

  const onFinish = async (values: any) => {
    const data = {
      name: values.name,
      location: values.location,
      description: values.description,
      isDeleted: false,
      pricePerHour: values.pricePerHour,
      image: values.image,
      availability: availability
        .filter((item) => item.date && item.slots.length)
        .map((item) => ({
          date: item.date,
          slots: item.slots.filter((slot) => slot.startTime && slot.endTime),
        })),
    };

    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/api/facility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      message.success("Add New Facility Successful!");
      navigate("/facility");
      form.resetFields();
      setAvailability([{ date: null, slots: [] }]);
    } catch (error) {
      message.error("Booking failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Container>
        <div className="container mx-auto p-4 w-6/12">
          <Card
            className="text-center"
            title="Add a new Facility"
            bordered={true}
          >
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Facility Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter the facility name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  { required: true, message: "Please enter the location!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please enter a description!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="pricePerHour"
                label="Price per Hour"
                rules={[
                  {
                    required: true,
                    message: "Please enter the price per hour!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image URL"
                rules={[
                  { required: true, message: "Please enter an image URL!" },
                ]}
              >
                <Input />
              </Form.Item>

              <h3 className="text-lg font-semibold">Availability</h3>
              {availability.map((item, index) => (
                <div key={index} className="mb-4">
                  <Space direction="vertical">
                    <Form.Item
                      label="Date"
                      rules={[
                        { required: true, message: "Please select a date!" },
                      ]}
                    >
                      <DatePicker
                        onChange={(date, dateString) =>
                          handleDateChange(date, dateString)
                        }
                      />
                    </Form.Item>
                    <Space direction="vertical">
                      {item.slots.map((slotIndex: any) => (
                        <div key={slotIndex} className="flex space-x-2">
                          <Form.Item className="mb-0">
                            <TimePicker
                              placeholder="Start Time"
                              format="HH:mm"
                              onChange={(time, timeString) =>
                                handleTimeChange(time, timeString, index)
                              }
                            />
                          </Form.Item>
                          <Form.Item className="mb-0">
                            <TimePicker
                              placeholder="End Time"
                              format="HH:mm"
                              onChange={(time, timeString) =>
                                handleTimeChange(time, timeString, index)
                              }
                            />
                          </Form.Item>
                        </div>
                      ))}
                    </Space>
                    <Button type="dashed" onClick={() => addSlot(index)}>
                      Add Slot
                    </Button>
                  </Space>
                </div>
              ))}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AddNew;
