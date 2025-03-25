import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Divider, Form, Input, message, Modal, notification, Radio, Row } from "antd";
import { useState } from "react";
import { callRegister } from "../../services/api";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formRegister] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const {email, password, Name, phone} = values
        console.log('Success:', email, password, Name, phone);
        
        
        setIsLoading(true)
        const res = await callRegister(email, password, Name, phone)
        console.log("res: ", res);
        if(res.data){
            message.success(res.message)
            formRegister.resetFields()
          navigate("/login")
        } else {
            notification.error({ 
                message: "Đăng ký không thành công!",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
        setIsLoading(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <Form      
        form={formRegister}                           
        initialValues={{
            remember: true,
        }}
        // layout='vertical'    
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ maxWidth: '1000px', margin: '0 auto' }} // Đặt maxWidth và căn giữa
    >
        <h3 style={{ textAlign: "center", color: "navy", textTransform: 'uppercase', fontSize: "20px" }}>Đăng ký tài khoản người dùng</h3>
        <Divider />

        <Row gutter={[20,20]}>
            <Col md={12} sm={12} xs={24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label="Họ Tên"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập đầy đủ thông tin!',
                        },
                        {
                            required: false,
                            pattern: new RegExp(/^[A-Za-zÀ-ỹ\s]+$/),
                            message: 'Không được nhập số!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>                            
            </Col>
        </Row>                    

        <Row gutter={[20,20]}>
            <Col md={12} sm={12} xs={24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập đầy đủ thông tin!',
                        },
                        {
                            type: "email",
                            message: 'Vui lòng nhập đúng định dạng địa chỉ email',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>  

        <Row>
            <Col md={12} sm={12} xs={24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập đầy đủ thông tin!',
                        },
                        {
                            required: false,
                            pattern: new RegExp(/^(?!.*\s).{6,}$/),
                            message: 'Không được nhập có dấu cách, tối thiểu có 6 kí tự!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
            </Col>
        </Row>                           

        <Row gutter={[20,20]}>
            <Col md={12} sm={12} xs={24}>
                <Form.Item
                    labelCol={{span: 24}}
                    label="Số Điện Thoại"
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
                    hasFeedback
                >
                    <Input />
                </Form.Item>                          
            </Col>
        </Row>
        <Form.Item>
            <div style={{textAlign: "center"}}>
                <Button type="primary" onClick={() => formRegister.submit()} loading={isLoading}> Đăng ký tài khoản</Button>

            
            </div>
        </Form.Item>

    </Form> 
  )
}
export default Register;