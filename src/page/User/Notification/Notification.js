import { useState, useEffect } from "react";
import Layoutmain from "../../../component/User/layout/Layoutmain";
import { Row, Col, List, Typography, Space, Tooltip, Tag } from "antd";
import {fetchAllNotification, responseNotication, chanceStatus, chanceRead, addMemberToProject} from "../../../services/api"
import { CheckCircleOutlined, CloseCircleOutlined, EyeOutlined } from "@ant-design/icons";
import './Notification.scss'

const Notifica = () => {
  const { Title } = Typography;
  const [notifications, setNotifications] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user._id;
  useEffect(() => {
      fetchListNotification(id);
  }, []);


  const fetchListNotification = async (id) => {
      const res = await fetchAllNotification(id);
      console.log("res", res);
      if(res && res.data){
          setNotifications(res.data)
      }
  }

  const handleRespond = async (notification_id, user_id, sender_id, project_id, content, response) => {
    if(response === "accepted"){
      await addMemberToProject(project_id, sender_id);
    }
    const res = await responseNotication(user_id, sender_id, project_id, content);
    if(res.data){
      handleChanceStatus(notification_id, response);
    }
  }

  const handleChanceStatus = async (notification_id, response) => {
    const res = await chanceStatus(notification_id, response);
    if (res.data){
      chanceRead(notification_id)
    }
  }

  const handleMarkAsRead = async (notification_id) => {
    const res = await chanceRead(notification_id);
    if (res.data){
      fetchListNotification(id);
    }
  }

    return (
        <Layoutmain>
          <div className="notification-container">
            <div className="notification-header">
              <Title level={3}>Quản lý thông báo</Title>
            </div>
      
            <div className="notification-list">
            <List
              itemLayout="vertical"
              dataSource={notifications}
              renderItem={(item) => (
                <List.Item
                  key={item._id}
                  className={`notification-item ${item.read ? "read" : "unread"}`}
                >
                  <Row justify="space-between" align="middle">
                    {/* Nội dung thông báo */}
                    <Col span={14}>
                      <Typography.Text strong>{item.content}</Typography.Text>
                      <div style={{ marginTop: 5 }}>
                        <small>
                          Dự án: <strong>{item.project_id?.nameproject}</strong> | Gửi từ:{" "}
                          <strong>{item.sender_id?.name || "Hệ thống"}</strong>
                        </small>
                      </div>
                    </Col>

                    {/* Hành động */}
                    <Col span={10} style={{ textAlign: "right" }}>
                      <Space size="middle">
                        {!item.read && (
                          <Tooltip title="Đánh dấu đã đọc">
                            <EyeOutlined
                              style={{ fontSize: 20, color: "#6D8B74", cursor: "pointer" }}
                              onClick={() => handleMarkAsRead(item._id)}
                            />
                          </Tooltip>
                        )}

                        {item.status === "pending" && (
                          <>
                            <Tooltip title="Chấp nhận lời mời">
                              <CheckCircleOutlined
                                style={{ fontSize: 20, color: "#52c41a", cursor: "pointer" }}
                                onClick={() => handleRespond(
                                                  item._id,
                                                  item.sender_id._id, 
                                                  item.user_id._id, 
                                                  item.project_id._id,
                                                  `${item.user_id.name} đã chấp nhận lời mời tham gia dự án của bạn`, 
                                                  "accepted"
                                                )}
                              />
                            </Tooltip>
                            <Tooltip title="Từ chối lời mời">
                              <CloseCircleOutlined
                                style={{ fontSize: 20, color: "#ff4d4f", cursor: "pointer" }}
                                onClick={() => handleRespond(
                                                  item._id,
                                                  item.sender_id._id, 
                                                  item.user_id._id, 
                                                  item.project_id._id,
                                                  `${item.user_id.name} đã từ chối lời mời tham gia dự án của bạn`, 
                                                  "rejected"
                                                )}
                              />
                            </Tooltip>
                          </>
                        )}

                        {item.status === "accepted" && <Tag color="green">Đã chấp nhận</Tag>}
                        {item.status === "rejected" && <Tag color="red">Đã từ chối</Tag>}
                      </Space>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
            </div>
          </div>
        </Layoutmain>
    );
}

export default Notifica;
