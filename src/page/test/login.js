import { Button, Divider, Form, Input, message, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {callLogin} from "../../services/api";


const LoginPage = (prop) => {

    const [formLogin] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const onFinish = async (values) => {    
        console.log("kết quả values: ", values);
        const {email, password } = values

        setIsLoading(true)
        const res = await callLogin(email, password)
        console.log("res login: ", res);

        if(res.data) {
            console.log("res.data: ", res.data);
            message.success("Đăng nhập thành công");
            navigate("/")
            formLogin.resetFields()
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            })
        }
        setIsLoading(false)
    }
    return(
        <>
        <Form layout="vertical" onFinish={onFinish} form={formLogin}>
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập email!',
                },
                {
                    type: 'email',
                    message: 'Địa chỉ email không hợp lệ!',
                },
            ]}
            >
            <Input />
            </Form.Item>
    
            <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                },
            ]}
            >
            <Input.Password onKeyDown={(e) => {
                console.log("check key: ", e.key);
                if(e.key === 'Enter') formLogin.submit()
                }}
            />
            </Form.Item>
    
            <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
                >
                Đăng nhập
            </Button>
            </Form.Item>
        </Form>
        <Divider />
        <div style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link onClick={navigate("/register")}>Đăng ký tại đây</Link>
            {/* Chưa có tài khoản? <Link to={"/user/register-benh-nhan"}>Đăng ký tại đây</Link> */}
        </div>
        </>
    );
};
export default LoginPage