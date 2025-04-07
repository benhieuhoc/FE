import {useState, useEffect} from 'react';
import { List, Avatar, Typography, Button } from 'antd';
import LayoutAdmin from '../../component/Admin/LayoutAdmin/LayoutAdmin';
import {fetchAllProject} from '../../services/api'

const ProjectManager = () => {
    const { Title } = Typography;    
    const [dataProject, setDataProject] = useState([]);

    useEffect(() => {
        fetchListProject();
    }, []); 

    // useEffect(() => {
        // console.log("dataUser", dataUser)
    // }, [dataUser]); 

    const fetchListProject  = async () =>{
        const res = await fetchAllProject();
        if(res && res.data){
            setDataProject(res.data);
            console.log("res", res.data)
        }
    }
    
    return( 
    <LayoutAdmin>
        <div className="admin-content">
            <Title level={3} style={{ color: '#6D8B74' }}>Quản lý người dùng</Title>

            <List
                itemLayout="horizontal"
                dataSource={dataProject}
                renderItem={(item) => (
                    <List.Item
                    actions={[
                        <Button type="link" style={{ color: '#6D8B74' }}>Sửa</Button>,
                        <Button type="link" danger>Xoá</Button>,
                    ]}
                    >
                    <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: '#80da95' }}>{item.nameproject[0]}</Avatar>}
                        title={<span style={{ fontWeight: 600 }}>{item.nameproject}</span>}
                        description={
                        <>
                            <div><strong>Tác giả:</strong> {item.author_id?.username || 'Chưa có'}</div>
                            <div><strong>Mô tả:</strong> {item.description}</div>
                            <div><strong>Ngày kết thúc:</strong> {new Date(item.dateEnd).toLocaleDateString()}</div>
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

export default ProjectManager;