import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, Tag, Typography } from 'antd';
import { fetchAllTask } from '../../services/api'; 
import LayoutAdmin from '../../component/Admin/LayoutAdmin/LayoutAdmin';

const TaskManager = () => {
    const { Title } = Typography;    
    const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    fetchListTask();
  }, []);

  const fetchListTask = async () => {
    const res = await fetchAllTask();
    if (res && res.data) {
      setDataTask(res.data);
    }
  };

  return (
    <LayoutAdmin>
        <div className="admin-content">
            <Title level={3} style={{ color: '#6D8B74' }}>Quản lý người dùng</Title>
            <List
            itemLayout="horizontal"
            dataSource={dataTask}
            renderItem={(item) => (
                <List.Item
                actions={[
                    <Button type="link" style={{ color: '#6D8B74' }}>Sửa</Button>,
                    <Button type="link" danger>Xoá</Button>,
                ]}
                >
                <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#6D8B74' }}>{item.nametask[0]}</Avatar>}
                    title={<span style={{ fontWeight: 600 }}>{item.nametask}</span>}
                    description={
                    <>
                        <div><strong>Người thực hiện:</strong> {item.user_id?.username || 'Chưa có'}</div>
                        <div><strong>Mô tả:</strong> {item.description || 'Không có mô tả'}</div>
                        <div><strong>Ngày bắt đầu:</strong> {item.day_start ? new Date(item.day_start).toLocaleDateString() : '---'}</div>
                        <div><strong>Ngày kết thúc:</strong> {item.day_end ? new Date(item.day_end).toLocaleDateString() : '---'}</div>
                        <div>
                        <strong>Trạng thái:</strong>{' '}
                        <Tag color={item.status ? 'green' : 'volcano'}>
                            {item.status ? 'Hoàn thành' : 'Chưa hoàn thành'}
                        </Tag>
                        </div>
                    </>
                    }
                />
                </List.Item>
            )}
            />
        </div>
    </LayoutAdmin>
  );
};

export default TaskManager;
