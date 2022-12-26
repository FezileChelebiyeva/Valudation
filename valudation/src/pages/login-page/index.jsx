import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import { Button, Checkbox, Form, Input } from "antd";
const LogInPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log in</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Login to Your Account</h1>
      <div id="log-in">
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
              label="Username"
              name="username"
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

export default LogInPage;
