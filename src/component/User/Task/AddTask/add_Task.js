import { Modal, Form, Input, Button, List, Row, Col, Typography, Divider, Avatar, notification, Select, DatePicker, message } from 'antd';
import { PlusOutlined, DeleteOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { IoAddCircle } from "react-icons/io5";
import { useState, useEffect, useRef } from 'react';
import { fetchProjectbyId, fetchAllUser, addMemberToProject, removeMemberFromProject, callCreateTask, addTaskToProject, deleteTask } from '../../../../services/api';
import './AddTaskModal.scss';

const AddTaskModal = ({ open, onCancel, projectId, onSaveTasks }) => {
    const [form] = Form.useForm();
    const { Text } = Typography;
    const { Search } = Input;
    const [searchValue, setSearchValue] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const searchRef = useRef(null);
    // state data
    const [searchResults, setSearchResults] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [dataProject, setDataProject] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataAuthor, setDataAuthor] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataUserinProject, setDataUserinProject] = useState([]);  

    
    useEffect(() => {
        if (projectId) {
            console.log("projectId: ", projectId);
            fetchProjectbyid(projectId);
        }
    }, [projectId]);
    useEffect(() => {
        if (searchResults.length === 0 || searchValue === "") {
            setIsVisible(false);
        }
    }, [searchResults]);
    useEffect(() => {
        console.log("author ", dataAuthor);
        console.log("user ", dataUser);
        console.log("project ", dataProject);
        console.log("task ", taskList);
        console.log("category ", dataCategory);
        const authorArray = Array.isArray(dataAuthor) ? dataAuthor : [dataAuthor];
        const combined = [
            ...dataUser.map(u => ({ ...u, type: 'user' })),
            ...authorArray.map(a => ({ ...a, type: 'author' })),
        ];
        
        setDataUserinProject(combined);
    }, [dataUser]);
    const onAddMember = async (user) => {
        try {
            const Project_id = dataProject._id;
            const user_id = user._id;
            const res = await addMemberToProject(Project_id, user_id);
            if (res && res.data) {
                notification.success({
                    message: "Thêm thành viên thành công",
                })
            }
            fetchProjectbyid(Project_id); 
    
        } catch (error) {
            console.error("Lỗi khi thêm thành viên:", error);
            const msg = error?.response?.data?.message || "Thêm thành viên thất bại!";
            notification.error({
                message: "Thêm thành viên thất bại",
                description: msg,
            })
        }
    };

    const fetchProjectbyid = async (id) => {
        const res = await fetchProjectbyId(id);
        console.log("res Project: ", res);
        if (res && res.data) {
            setDataProject(res.data);
            setDataUser(res.data.member_id);
            setDataAuthor(res.data.author_id);
            setTaskList(res.data.task_id);
            setDataCategory(res.data.category_id);
        };
    }

    const fetchsearchUser = async (value) => {
        setSearchValue(value);
        if (value === "") {
            setSearchResults([]);
        }else {
            const query = `email=${value}`; 

            const res = await fetchAllUser(query); 
            if (res && res.data) {
                setSearchResults(res.data); 
            }
        }
    }
    
    const handleBlur = (e) => {
        // Kiểm tra nếu searchRef.current tồn tại và không phải null
        if (searchRef.current && !searchRef.current.contains(e.relatedTarget)) {
            setIsVisible(false);
        }
    };
    
    const handleFocus = () => {
        setIsVisible(true);
    };
    
    const onDeleteUser = async (id) => {
        try {
            const Project_id = dataProject._id;
            const user_id = id;
        const res = await removeMemberFromProject(Project_id, user_id);
            if (res && res.data) {
                notification.success({
                    message: "Xóa thành viên thành công",
                })
            }
            fetchProjectbyid(Project_id); 
    
        } catch (error) {
            console.error("Xóa thất bại", error);
            const msg = error?.response?.data?.message || "Xóa thành viên thất bại!";
            notification.error({
                message: "Xóa thành viên thất bại",
                description: msg,
            })
        }
    }

    const handleCreateTask = async (values) => {
        console.log('Success:', values);
        const { nametask, user_id, description, day_end } = values;
        const day_start = new Date();  
        setIsSubmit(true);
        const res = await callCreateTask(nametask, user_id, description, day_start, day_end);
        console.log("res create: ", res);
    
        if (res && res.data) {
            const res2 = await onaddTask(res.data._id);
            if (res2 && res2.data) {
                message.success('Tạo mới nhiệm vụ thành công');
                form.resetFields();
            }else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })};
        }
        setIsSubmit(false);
    };

    const onaddTask = async (task_id) => {
        try {
            const Project_id = dataProject._id;
            const res = await addTaskToProject(Project_id, task_id);
            if (res && res.data) {
                notification.success({
                    message: "Thêm nhiệm vụ thành công",
                })
            }
            fetchProjectbyid(Project_id); 

        } catch (error) {
            console.error("Lỗi khi thêm nhiệm vụ:", error);
            const msg = error?.response?.data?.message || "Thêm nhiệm vụ thất bại!";
            notification.error({
                message: "Thêm nhiệm vụ thất bại",
                description: msg,
            })
        }
    }

    const getUserName = (_id, dataUser) => {
        const user = dataUser.find(u => u._id === _id);
        return user ? user.name : 'Chưa có người đảm nhiệm';
    };
    
    const sortTasks = (tasks) => {
        return tasks.sort((a, b) => new Date(a.day_end) - new Date(b.day_end));
    };

    const handleDeleteTask = async (id) => {
            console.log("id: ", id);
            const res = await deleteTask(id)
            if(res){
                notification.success({
                    message: "Xóa thông tin dự án",
                    description: "Bạn đã xoá thành công"
                })
            } else {
                notification.error({
                    message: "Lỗi xảy ra",
                    description: JSON.stringify(res.message)
                })
            }
        };
    

    return (
        <Modal
            style={{ height: 800, width: 1200 }}
            open={open}
            onCancel={onCancel}
            okText="Lưu tất cả"
            cancelText="Đóng"
            title={`${dataProject?.nameproject} - ${dataAuthor?.name}`}
            className="custom-add-task-modal"
            footer={null}
        >
            <Row>
                <Col>
                    <Row style={{ height: 340, width: 430,border: '1px solid #6D8B74', marginBottom: 10, borderRadius: 10 }}>
                        <Form 
                            form={form} 
                            layout="vertical" 
                            style={{ marginTop: 45, marginLeft: 30 }}
                            onFinish={handleCreateTask}
                        >
                            <Row>
                                <Form.Item
                                    name="nametask"
                                    label="Tên nhiệm vụ"
                                    rules={[{ required: true, message: 'Nhập tên nhiệm vụ' }]}
                                >
                                    <Input placeholder="Nhập tên nhiệm vụ" />
                                </Form.Item>
                                <Form.Item
                                    name="user_id"
                                    label="phân công"
                                    style={{ marginLeft: 30 }}
                                >
                                    <Select
                                        showSearch
                                        style={{ width: "100%" }}
                                        placeholder="Danh mục"
                                        optionFilterProp="label"
                                        options={dataUserinProject.map(category => ({
                                            value: category._id, // Sử dụng _id làm giá trị
                                            label: `${category.name}`, // Hiển thị name và address
                                        }))}
                                    />       
                                </Form.Item>
                            </Row>
                            <Row style={{ marginTop: 10 }}>
                                <Form.Item
                                    name="description"
                                    label="Mô tả"
                                >
                                    <Input placeholder="Nhập mô tả nhiệm vụ" />
                                </Form.Item>
                                <Form.Item
                                    name="day_end"
                                    label="Ngày kết thúc"
                                    style={{ marginLeft: 30 }}
                                    rules={[{ required: true, message: 'Vui lòng chọn ngày kết thúc' }]}
                                >
                                    <DatePicker className="custom-datepicker" style={{ width: '100%' }} />
                                </Form.Item>
                            </Row>
                            <Button type="dashed" onClick={() => form.submit()} block style={{ marginTop: 20 }}>
                                <IoAddCircle /> Thêm vào danh sách
                            </Button>
                        </Form>
                    </Row>
                    <Row style={{ height: 350, width: 430,border: '1px solid #6D8B74', padding: 10, borderRadius: 10 }}>
                    <Col style={{ width: 400 }}>
                    <Search
                        placeholder="Tìm kiếm người dùng"
                        onSearch={fetchsearchUser} 
                        enterButton
                        allowClear
                        style={{ marginBottom: 12 }}
                        onFocus={handleFocus} 
                        onBlur={handleBlur}
                    />

                        {/* Danh sách kết quả tìm kiếm */}
                        {searchResults.length > 0 && (
                        <div style={{ position: 'absolute', zIndex: 1000, width: '100%', background: '#D9D9D9', borderRadius: 10 }}>
                            <Divider style={{ margin: 0 }} />
                            <List
                                size="small"
                                bordered
                                dataSource={searchResults}
                                renderItem={(user) => (
                                    <List.Item
                                        actions={[
                                            <Button
                                                type="link"
                                                icon={<PlusOutlined />}
                                                onClick={() => onAddMember(user)}
                                            >
                                                Thêm
                                            </Button>
                                        ]}
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar>{user.name ? user.name.charAt(0).toUpperCase() : '?'}</Avatar>}
                                            title={user.name || 'Không rõ tên'}
                                            description={user.email || 'Không rõ email'}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                        )}

                        <h4 style={{ marginTop: 10 }}>Danh sách thành viên:</h4>
                        <List
                            style={{ height: 240, width: 410, overflowY: 'auto' }}
                            bordered
                            dataSource={dataUser}
                            renderItem={(user) => (
                                <List.Item
                                actions={[
                                    <Button
                                        type="link"
                                        icon={<DeleteOutlined />}
                                        onClick={() => onDeleteUser(user._id)} 
                                    />
                                ]}
                            >
                                    <List.Item.Meta
                                        avatar={<Avatar>{user.name.charAt(0)}</Avatar>}
                                        title={user.name}
                                        description={user.email}
                                    />
                                </List.Item>
                            )}
                            locale={{ emptyText: "Chưa có thành viên nào" }}
                        />
                    </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{ height: 700, width: 599, border: '1px solid #6D8B74', marginLeft: 20, borderRadius: 10 }}>
                    <Col style={{ width: 599, }}>
                        <h4 style={{ marginTop: 10 }}>Danh sách thành viên:</h4>
                        <List
                            style={{ height: 650, overflowY: 'auto', marginTop: 10 }}
                            bordered
                            dataSource={sortTasks(taskList)}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[
                                        <Button
                                            type="link"
                                            icon={<DeleteOutlined />}
                                            onClick={() => handleDeleteTask(item._id)}
                                        />,
                                    ]}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <strong style={{ marginLeft: 20, width: 50 }}>{item.nametask}</strong>
                                        <span style={{ marginLeft: 20, width: 200 }}>
                                            {getUserName(item.user_id, dataUserinProject)}
                                        </span>
                                        <span style={{ marginLeft: 20 }}>
                                            {new Date(item.day_end).toLocaleDateString()}
                                        </span>
                                        <span style={{ marginLeft: 80 }}>
                                            {item.status ? (
                                                <CheckCircleOutlined style={{ color: 'green' }} />
                                            ) : (
                                                <ClockCircleOutlined style={{ color: 'red' }} />
                                            )}
                                        </span>
                                    </div>
                                </List.Item>
                            )}
                            locale={{ emptyText: 'Chưa có nhiệm vụ nào' }}
                        />
                    </Col>
                    </Row>
                </Col>
            </Row>
            
        </Modal>
    );
};

export default AddTaskModal;
