import { Button, Col, Pagination, Popconfirm, Row, Space, Table, notification, message } from "antd"
import { useEffect, useState } from "react";
import { fetchAllTask, fetchAllUser, deleteTask } from "../../services/api";
import { IoAddOutline } from "react-icons/io5";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import CreateTask from "./create_task";
import UpdateTask from "./update_task";

const All_task = () => { 
    const [dataUser, setDataUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loadingTable, setLoadingTable] = useState(false);
    const { Column } = Table;
    const [dataTask, setDataTask] = useState([]);
    const [openCreateTask, setOpenCreateTask] = useState(false);
    const [dataUpdateTask, setDataUpdateTask] = useState();
    const [openUpdateTask, setOpenUpdateTask] = useState(false);

    useEffect(() => {
        fetchListTask();
        handleAllUser();
        console.log("load data done");
    }, [currentPage, pageSize]);

    console.log("dataUpdateTask: ", dataUpdateTask);
    const fetchListTask = async () => {
        setLoadingTable(true)
        const res = await fetchAllTask()
        console.log("res Task: ", res); 
        if (res && res.data) {
            setDataTask(res.data)
        }
        setLoadingTable(false)
    };
    const handleAllUser = async () => {
        let res = await fetchAllUser()
        console.log("res user: ", res);
        if(res && res.data) {
            setDataUser(res.data)
        }
    };
    const cancelXoa = (e) => {
        console.log(e);
        message.error('Huỷ xoá');
    };
    const handleDeleteTask = async (id) => {
        console.log("id: ", id);
        const res = await deleteTask(id)
        if(res){
            notification.success({
                message: "Xóa thông tin dự án",
                description: "Bạn đã xoá thành công"
            })
            await fetchListTask()
        } else {
            notification.error({
                message: "Lỗi xảy ra",
                description: JSON.stringify(res.message)
            })
        }
    };
    
    return (
        <>
            <Row>
                <Col span={24} style={{padding: "0 0 20px", fontSize: "18px"}}>
                    <span style={{fontWeight: "500", color: "navy"}}>All_Task</span>
                    <Space size={10} style={{ float: "right" }}>
                        <Button 
                        type="primary" 
                        style={{
                            lineHeight: "15px"
                        }}
                        icon={<IoAddOutline size={20} />} 
                        className="custom-row"
                        onClick={() => {
                            setOpenCreateTask(true)
                        }}
                        >Thêm nhiệm vụ</Button>
                    </Space>
                </Col>
            </Row>
            <Table  dataSource={dataTask} 
                    loading={loadingTable}
                    pagination={false} // Tắt phân trang mặc định của Table
                    scroll={{ x: 'max-content' }}
                    rowClassName="custom-row" // Thêm lớp cho hàng    
                    headerClassName="custom-header" // Lớp cho tiêu đề 
                    rowKey="_id" // Hoặc key tương ứng                           
            >
                <Column title={<p className="title-col-style">STT</p>}
                dataIndex="stt" 
                key="stt" 
                render={(_, record, index) => {
                    //   console.log("index: ", index+1);
                        return (
                        <>
                            {(index+1) + (currentPage - 1) * pageSize}
                        </>
                        )
                    }
                }/>
                <Column title={<p className="title-col-style">Tên</p>} dataIndex="nametask" key="nametask"/>                    
                <Column 
                    title={<p className="title-col-style">Phân công</p>} 
                    dataIndex="user_id" key="user" 
                    render={(user_id) => {
                        console.log("user_id: ", user_id);
                        console.log("dataUser: ", dataUser);
                        const user = dataUser.find(u => u._id === user_id); 
                        return user ? user.name : "Không có tác giả";
                    }}
                />
                <Column title={<p className="title-col-style">Mô tả</p>} dataIndex="description" key="description" />
                <Column
                    title={<p className="title-col-style">Chức năng</p>}
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            
    
                            <EditOutlined style={{color: "orange"}} onClick={() => {
                                console.log("record update: ", record);
                                setDataUpdateTask(() => {
                                    setOpenUpdateTask(true); 
                                    return record;
                                })
                                // console.log("dataUpdateTask: ", dataUpdateTask);
                            }}
                            /> 
    
                            <Popconfirm
                                title={`xóa tài khoản`}
                                description="Bạn có chắc chắn muốn xoá?"
                                onConfirm={() => handleDeleteTask(record._id)}
                                onCancel={cancelXoa}
                                okText="Xác nhận xoá"
                                cancelText="Không Xoá"
                            >
                                <DeleteOutlined style={{color: "red"}} />
                            </Popconfirm>
                        </Space>
                    )}
                />
            </Table>
            <CreateTask
                openCreateTask={openCreateTask}
                setOpenCreateTask={setOpenCreateTask}
                fetchListTask={fetchListTask}
            />
            <UpdateTask 
                dataUpdateTask={dataUpdateTask}
                setDataUpdateTask={setDataUpdateTask}
                openUpdateTask={openUpdateTask}
                setOpenUpdateTask={setOpenUpdateTask}
                fetchListTask={fetchListTask}
            />  
        </>
        )
}
export default All_task;    