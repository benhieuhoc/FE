import { Modal, Input, Button, Form, Row, Col, Typography} from 'antd';
import './Login.scss';
import {callLogin} from '../../../services/api'
import { login } from '../../../redux/authSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const { Title } = Typography;

const LoginModal = ({ open, onCancel, setOpenRegister }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleLogin = async (values) => {
            console.log("kết quả values: ", values);
            const {email, password } = values
            const res = await callLogin(email, password)
            console.log("res login: ", res);

            if(res.data) {
                dispatch(login({
                    user: res.data,
                    access_token: res.access_token
                  }));
                navigate("/home")
            } else {
                console.log(res.message)
            }
    };

    const handleClick = () => {
        setOpenRegister(true);
        onCancel();
    }

    return (
        <Modal
        open={open}
        onCancel={onCancel}
        footer={null}
        className="login-modal"
        >
        <Row justify="center">
            <Col span={24} style={{ textAlign: 'center' }}>
            <Title level={3} className="login-title">Đăng nhập</Title>
            
            <Form
                form={form}
                layout="vertical"
                onFinish={handleLogin}
            >
                <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                >
                <Input />
                </Form.Item>
                
                <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Button type="primary" block htmlType="submit" className="login-button">
                Đăng nhập
                </Button>
            </Form>
            <Row>
                <Title level={5} className='title-register'>Bạn chưa có tài khoản? -</Title>
                <Title level={5} onClick={handleClick} style={{marginTop: 26.720}} className='click_title'>Đăng kí tại đây</Title>
            </Row>
            </Col>
        </Row>
        </Modal>
    );
};

export default LoginModal;
