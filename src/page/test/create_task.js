import { Checkbox, Col, Divider, Form, Input, InputNumber, message, Modal, notification, Radio, Row, Select, Upload } from "antd"
import { useEffect, useState } from "react";
import {callCreateTask, fetchAllUser} from "../../services/api"


const CreateTask = (props) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [form] = Form.useForm()
    const [dataUser, setDataUser] = useState([])

    const {
        openCreateTask, setOpenCreateTask, fetchListTask
    } = props;
    useEffect(() => {
        handleAllUser()
    }, []);
    const handleAllUser = async () => {
        let res = await fetchAllUser()
        console.log("res user: ", res);
        if(res && res.data) {
            setDataUser(res.data)
        }
    };
    const handleCreateTask = async (values) => {
        console.log('Success:', values);
        const { nametask, user_id, description, pre_task, next_task, day_start, time, day_end, status } = values
        
        setIsSubmit(true)
        const res = await callCreateTask(nametask, user_id, description, pre_task, next_task, day_start, time, day_end, status)
        console.log("res create: ", res);
        if(res && res.data){
            message.success('Tạo mới thông tin bác sĩ thành công');
            form.resetFields();
            setOpenCreateTask(false);
            await fetchListTask()
        } else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })
        }
        setIsSubmit(false)
    };
    const handleCancel = () => {
        setOpenCreateTask(false);
        form.resetFields()
    };

    return (
        <Modal
            title="Tạo nhiệm vụ mới"
            style={{
                top: 20,
            }}
            open={openCreateTask}
            onOk={() => form.submit()} 
            onCancel={() => handleCancel()}
            width={1100}
            maskClosable={false}
            confirmLoading={isSubmit}
            okText={"Xác nhận tạo mới"}
            cancelText="Huỷ"
        >
            <Divider />
            <Row>
                <Col span={24}>
                    <Form
                        form={form}
                        name="basic"        
                        layout="vertical"                
                        style={{
                            maxWidth: "100%",
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleCreateTask}
                        autoComplete="off"
                        loading={isSubmit}
                        >
                            <Row gutter={[20,5]}>
                                <Col span={5} md={5} sm={5} xs={24}>
                                    <Form.Item
                                        layout="vertical"
                                        label="Tên nhiệm vụ"
                                        name="nametask"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập tên dự án!',
                                            },
                                        ]}
                                    >
                                    <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={5} md={5} sm={5} xs={24}>
                                    <Form.Item
                                        layout="vertical"
                                        label="mô tả"
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập tên dự án!',
                                            },
                                        ]}
                                    >
                                    <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={18} md={18} sm={18} xs={24} >
                                    <Form.Item
                                        layout="vertical"
                                        label="Phân công"
                                        name="user_id"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng chọn người đảm nhiệm!',
                                            },                                        
                                        ]}                                
                                    >
                                        <Select
                                            showSearch
                                            style={{ width: "100%" }}
                                            placeholder="Chọn tác giả"
                                            optionFilterProp="label"
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={dataUser.map(user => ({
                                                value: user._id, // Sử dụng _id làm giá trị
                                                label: `${user.name}`, // Hiển thị name và address
                                            }))}
                                        />                               
                                    </Form.Item>
                                </Col> 
                            </Row>
                    </Form>
                </Col>
            </Row>
        </Modal>
    )
};
export default CreateTask;