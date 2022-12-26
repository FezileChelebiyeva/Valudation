import React from "react";
import { Helmet } from "react-helmet";
import "../../assets/sass/main.scss";
import { Button,  Form, Input, Select } from "antd";
import "./index.scss";
const SignUpPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Sign Up</h1>
      <div id="sign-up">
        <div className="form">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Surname"
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Replay Pass"
              name="replayPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="Country"
              label="country"
              rules={[
                {
                  required: true,
                  message: "Please select country!",
                },
              ]}
            >
              <Select placeholder="select your country">
                <Option value="country">country</Option>
                <Option value="country">country</Option>
                <Option value="country">country</Option>
              </Select>

            </Form.Item>

            <Form.Item
              name="City"
              label="city"
              rules={[
                {
                  required: true,
                  message: "Please select city!",
                },
              ]}
            >
              <Select placeholder="select your city">
                <Option value="city">city</Option>
                <Option value="city">city</Option>
                <Option value="city">city</Option>
              </Select>

            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
