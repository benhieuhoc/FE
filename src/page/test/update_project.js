import { Checkbox, Col, Divider, Form, Input, InputNumber, message, Modal, notification, Radio, Row, Select, Upload } from "antd";
import { useEffect, useState } from "react";
import {updateProject, fetchAllUser} from "../../services/api"

const UpdateProject = (props) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [form] = Form.useForm();
    const {
        dataUpdateProject, setDataUpdateProject,
        openUpdateProject, setOpenUpdateProject,
        fetchListProject
    } = props
    useEffect(() => {
            handleAllUser()
        }, [])
    console.log("dataUpdateProject: ", dataUpdateProject);
        const handleCancel = () => {
        setOpenUpdateProject(false);
        form.resetFields()
    };
    const handleUpdateProject = async (values) => {

        const { _id, nameproject, author_id, description } = values
        console.log("values: ", values);
        setIsSubmit(true)
        const res = await updateProject( _id, nameproject, author_id, description )
        if(res){
            message.success(res.message);
            handleCancel()
            await fetchListProject()
        } else {
            notification.error({
                message: 'Đã có lỗi xảy ra',
                description: res.message
            })
        }
        
        setIsSubmit(false)
    };
    const handleAllUser = async () => {
        let res = await fetchAllUser()
        console.log("res user: ", res);
        if(res && res.data) {
            setDataUser(res.data)
        }
    }
    return (
        <Modal
            title={`Sửa thông tin dự án ${dataUpdateProject?.nameproject}`}
            style={{
                top: 20,
            }}
            open={openUpdateProject}
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
                        }}
                        initialValues={{
                            _id: dataUpdateProject?._id,
                            nameproject: dataUpdateProject?.nameproject,
                            description: dataUpdateProject?.description,
                            author_id: dataUpdateProject?.author_id
                        }}
                        onFinish={handleUpdateProject}
                        autoComplete="off"
                        loading={isSubmit}
                    >
                        <Row gutter={[20,5]}>
                            <Col hidden>
                                <Form.Item
                                    hidden
                                    labelCol={{ span: 24 }}
                                    label="ID"
                                    name="_id"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
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
    );
};
export default UpdateProject;