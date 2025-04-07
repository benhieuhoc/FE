import {useState, useEffect} from 'react';
import { List, Avatar, Typography, Button } from 'antd';
import LayoutAdmin from '../../component/Admin/LayoutAdmin/LayoutAdmin';
import {fetchAllUser} from '../../services/api'

const UserManager = () => {
    const { Title } = Typography;    
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        fetchListUser();
    }, []); 

    useEffect(() => {
        console.log("dataUser", dataUser)
    }, [dataUser]); 

    const fetchListUser  = async () =>{
        const res = await fetchAllUser();
        if(res && res.data){
            setDataUser(res.data);
            console.log("res", res.data)
        }
    }
    
    return( 
    <LayoutAdmin>
        <div className="admin-content">
            <Title level={3} style={{ color: '#6D8B74' }}>Quản lý người dùng</Title>

            <List
                itemLayout="horizontal"
                dataSource={dataUser}
                renderItem={(item) => (
                    <List.Item
                    actions={[
                        <Button type="link" style={{ color: '#6D8B74' }}>Sửa</Button>,
                        <Button type="link" danger>Xoá</Button>,
                    ]}
                    >
                    <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: '#80da95' }}>{item.name }</Avatar>}
                        title={<span style={{ fontWeight: 600 }}>{item.name || item.username}</span>}
                        description={
                        <>
                            <div><strong>Email:</strong> {item.email}</div>
                            <div><strong>Username:</strong> {item.username}</div>
                            <div><strong>Số điện thoại:</strong> {item.phone || 'Chưa có'}</div>
                            <div><strong>Vai trò:</strong> {item.role?.name || item.role || 'Không xác định'}</div>
                        </>
                        }
                    />
                    </List.Item>
                )}
                />
        </div>
    </LayoutAdmin>
    )
};

export default UserManager;