import { Button, Col, Pagination, Popconfirm, Row, Space, Table, notification, message } from "antd"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fetchAllProject, fetchAllUser, deleteProject } from "../../services/api";
import { IoAddOutline } from "react-icons/io5";
import CreateProject from "./create_project";
import UpdateProject from "./update_project";

const All_project = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [dataUser, setDataUser] = useState([]);
    const [loadingTable, setLoadingTable] = useState(false)
    const [dataProject, setDataProject] = useState([])
    const { Column } = Table;
    const [openCreateProject, setOpenCreateProject] = useState(false);
    const [dataUpdateProject, setDataUpdateProject] = useState();
    const [openUpdateProject, setOpenUpdateProject] = useState(false);

    useEffect(() => {
        fetchListProject();
        handleAllUser();
        console.log("load data done");
    }, [currentPage, pageSize]);
    const handleAllUser = async () => {
        let res = await fetchAllUser()
        console.log("res user: ", res);
        if(res && res.data) {
            setDataUser(res.data)
        }
    };
    const fetchListProject = async () => {
        setLoadingTable(true)
        const res = await fetchAllProject()
        console.log("res Project: ", res); 
        if (res && res.data) {
            setDataProject(res.data)
        }
        setLoadingTable(false)
    };
    const cancelXoa = (e) => {
        console.log(e);
        message.error('Huỷ xoá');
    };
    const handleDeleteProject = async (id) => {
       console.log("id: ", id);
        const res = await deleteProject(id)
        if(res){
            notification.success({
                message: "Xóa thông tin dự án",
                description: "Bạn đã xoá thành công"
            })
            await fetchListProject()
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
                <span style={{fontWeight: "500", color: "navy"}}>All_project</span>
                <Space size={10} style={{ float: "right" }}>
                    <Button 
                    type="primary" 
                    style={{
                        lineHeight: "15px"
                    }}
                    icon={<IoAddOutline size={20} />} 
                    className="custom-row"
                    onClick={() => {
                        setOpenCreateProject(true)
                    }}
                    >Thêm dự án</Button>
                </Space>
            </Col>
        </Row>
        <Table  dataSource={dataProject} 
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
            <Column title={<p className="title-col-style">Tên</p>} dataIndex="nameproject" key="nameproject"/>                    
            <Column 
                title={<p className="title-col-style">Tác giả</p>} 
                dataIndex="author_id" key="author" 
                render={(author_id) => {
                    console.log("author_id: ", author_id);
                    console.log("dataUser: ", dataUser);
                    const author = dataUser.find(user => user._id === author_id); 
                    return author ? author.name : "Không có tác giả";
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
                            setDataUpdateProject(() => {
                                setOpenUpdateProject(true); 
                                return record;
                            })
                            // console.log("dataUpdateProject: ", dataUpdateProject);
                        }}
                        /> 

                        <Popconfirm
                            title={`xóa tài khoản`}
                            description="Bạn có chắc chắn muốn xoá?"
                            onConfirm={() => handleDeleteProject(record._id)}
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
        <CreateProject
            openCreateProject={openCreateProject}
            setOpenCreateProject={setOpenCreateProject}
            fetchListProject={fetchListProject}
        />
        <UpdateProject 
            dataUpdateProject={dataUpdateProject}
            setDataUpdateProject={setDataUpdateProject}
            openUpdateProject={openUpdateProject}
            setOpenUpdateProject={setOpenUpdateProject}
            fetchListProject={fetchListProject}
        />  
    </>
    )
}
export default All_project;