import { useEffect, useState } from "react";
import { Button, Layout, Typography, Row, Col } from 'antd';
import './css.scss'; 
import { useNavigate } from "react-router-dom";
import IntroPage from './Text';
import { useSelector } from 'react-redux';
import LoginModal from "../../component/User/Login/Login";
import RegisterModal from "../../component/User/Register/Reginter";

const Introduce = () => {
  const { Header, Content } = Layout;
  const { isAuthenticateduser } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  console.log('isAuthenticateduser', isAuthenticateduser);
  console.log('user', user);

  useEffect(() => {
    console.log('openLogin', openLogin);
}, [openLogin]);

  const handleStartClick = () => {
    console.log("Click");
    if (user && isAuthenticateduser) {
      navigate('/home');
    } else {
      setOpenLogin(true);
    }
  };

  return (
    <>
    <Layout className="layout">
      <Header>
        <Row justify="space-between" align="middle">
          <Col>
            <div className="logo" style={{ color: 'white', fontSize: '24px' }}>
              TaskManager
            </div>
          </Col>
          <Col>
          <Button type="primary" onClick={handleStartClick} size="large" style={{ fontSize: '16px' }}>
              Bắt đầu ngay
            </Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <IntroPage />
      </Content>
    </Layout>
    <LoginModal
      open={openLogin}
      onCancel={() => {setOpenLogin(false)}}
      setOpenRegister = {setOpenRegister}
    />
    <RegisterModal
      open={openRegister}
      onCancel={() => {
        setOpenRegister(false)
        setOpenLogin(true)
      }}
    />
    </>
  );
};

export default Introduce;
