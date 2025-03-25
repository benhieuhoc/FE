import { Checkbox, Col, Divider, Form, Input, InputNumber, message, Modal, notification, Radio, Row, Select, Upload } from "antd"
import { useEffect, useState } from "react";
import {callCreateProject, fetchAllUser} from "../../services/api"

const CreateProject = (props) => {
    const {
        openCreateProject, setOpenCreateProject, fetchListProject
    } = props;
    const [dataUser, setDataUser] = useState([])
    const [form] = Form.useForm()
    const [isSubmit, setIsSubmit] = useState(false);
    useEffect(() => {
        handleAllUser()
    }, [])
    const handleAllUser = async () => {
        let res = await fetchAllUser()
        console.log("res user: ", res);
        if(res && res.data) {
            setDataUser(res.data)
        }
    }
    const handleCreateProject = async (values) => {
        console.log('Success:', values);
        const { nameproject, author_id, description } = values
        
        setIsSubmit(true)
        const res = await callCreateProject(nameproject, author_id, description)
        console.log("res create: ", res);
        if(res && res.data){
            message.success('Tạo mới thông tin bác sĩ thành công');
            form.resetFields();
            setOpenCreateProject(false);
            await fetchListProject()
        } else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })
        }
        setIsSubmit(false)
    };
    const handleCancel = () => {
        setOpenCreateProject(false);
        form.resetFields()
    };
    return(
        <Modal
            title="Tạo dự án mới"
            style={{
                top: 20,
            }}
            open={openCreateProject}
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
                        onFinish={handleCreateProject}
                        autoComplete="off"
                        loading={isSubmit}
                        >
                            <Row gutter={[20,5]}>
                                <Col span={5} md={5} sm={5} xs={24}>
                                    <Form.Item
                                        layout="vertical"
                                        label="Tên dự án"
                                        name="nameproject"
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
                                        label="Mô tả"
                                        name="description"
                                    >
                                    <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={18} md={18} sm={18} xs={24} >
                                    <Form.Item
                                        layout="vertical"
                                        label="Tác giả"
                                        name="author_id"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng chọn tác giả!',
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
}
export default CreateProject;