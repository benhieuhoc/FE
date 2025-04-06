import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { UserOutlined, ProjectOutlined, CalendarOutlined, ShareAltOutlined, SettingOutlined } from '@ant-design/icons';
import './css.scss'; 

const { Title, Paragraph } = Typography;

const IntroPage = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Title level={1} style={{ textAlign: 'center' }}>
        Giới thiệu về TaskManager
      </Title>

      <Paragraph style={{ textAlign: 'center', fontSize: '18px' }}>
        TaskManager là công cụ quản lý công việc giúp bạn tổ chức và theo dõi tiến độ công việc một cách hiệu quả.
        Quản lý công việc chưa bao giờ dễ dàng đến thế!
      </Paragraph>

      <Row gutter={16} justify="center">
        <Col span={8}>
          <Card
            hoverable
            cover={<ProjectOutlined style={{ fontSize: '40px', color: '#1890ff' }} />}
          >
            <Title level={4}>Tính năng chính</Title>
            <Paragraph>
              - Tạo và quản lý công việc, phân chia dự án.
              <br />
              - Theo dõi tiến độ công việc, nhắc nhở và thông báo.
              <br />
              - Hỗ trợ chia sẻ và cộng tác hiệu quả giữa các thành viên.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            cover={<UserOutlined style={{ fontSize: '40px', color: '#1890ff' }} />}
          >
            <Title level={4}>Đối tượng sử dụng</Title>
            <Paragraph>
              Phù hợp với cá nhân, nhóm làm việc và doanh nghiệp.
              <br />
              Quản lý công việc dễ dàng, tiết kiệm thời gian.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            cover={<CalendarOutlined style={{ fontSize: '40px', color: '#1890ff' }} />}
          >
            <Title level={4}>Quản lý tiến độ</Title>
            <Paragraph>
              Theo dõi trạng thái công việc và tiến độ dự án.
              <br />
              Nhắc nhở về các nhiệm vụ sắp tới và quá hạn.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col>
          
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginTop: '50px' }}>
        Tại sao chọn TaskManager?
      </Title>

      <Row gutter={16} justify="center">
        <Col span={6}>
          <Card
            hoverable
            cover={<ShareAltOutlined style={{ fontSize: '40px', color: '#1890ff' }} />}
          >
            <Title level={4}>Cộng tác hiệu quả</Title>
            <Paragraph>
              Cộng tác với các thành viên trong nhóm một cách dễ dàng.
            </Paragraph>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            cover={<SettingOutlined style={{ fontSize: '40px', color: '#1890ff' }} />}
          >
            <Title level={4}>Dễ dàng sử dụng</Title>
            <Paragraph>
              Giao diện thân thiện với người dùng, dễ dàng bắt đầu.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IntroPage;
