import React from 'react';
import { Modal, Input, Button, Form, Row, Col, Typography, notification, message } from 'antd';
import './Register.scss';
import { callRegister } from "../../../services/api";

const { Title } = Typography;

const RegisterModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  const handleRegister = async (values) => {
    console.log(values);
    const {username, email, name, phone, password, confirmPassword} = values
    if (password !== confirmPassword) {
        notification.error({ 
            message: "Đăng ký không thành công!",
            description: "Mật khẩu và mật khẩu khác nhận không trùng khớp!!!"
        })
      return;
    }
    const res = await callRegister(username, email, name, phone, password)
    console.log("res: ", res);
    if(res.data){
        message.success(res.message);
        onCancel();
    } else {
        notification.error({ 
            message: "Đăng ký không thành công!",
            description:
                res.message && Array.isArray(res.message) ? res.message[0] : res.message,
            duration: 5
        })
    }
  };

  return (
    <Modal
      title="Đăng ký"
      open={open}
      onCancel={onCancel}
      footer={null}
      width="50%"
      className="register-modal"
    >
      <Row justify="center">
        <Col span={24}>
          <Title level={3} className="register-title" style={{ textAlign: 'center' }}>
            Đăng ký tài khoản mới
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleRegister}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Tên người dùng"
                  name="username"
                  rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
                >
                  <Input className="register-input" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                  <Input className="register-input" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Họ và tên"
                  name="name"
                >
                  <Input className="register-input" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập đầy đủ thông tin!',
                    },
                    {
                        pattern: /^0\d{9}$/,
                        message: 'Số điện thoại phải có 10 chữ số và bẳt đầu bằng số 0, không chứa kí tự!',
                    },
                ]}
                >
                  <Input className="register-input" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                  <Input.Password className="register-input" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Xác nhận mật khẩu"
                  name="confirmPassword"
                  rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu!' }]}
                >
                  <Input.Password className="register-input" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" block htmlType="submit" className="register-button">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default RegisterModal;
