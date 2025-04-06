import { useEffect, useState } from "react";
import { Modal, Input, DatePicker, Form, notification, Select, message } from 'antd';
import { callCreateProject, fetchAllCategory } from '../../../services/api';
import moment from 'moment';
import './AddProjectModal.scss';

const AddProjectModal = (props) => {
    const {
        openCreateProject, setOpenCreateProject, fetchListProject, dataCategory, setShowTaskModal,  setProjectId
    } = props;
    
    // console.log('category in add',dataCategory);
    const [form] = Form.useForm();    
    const [isSubmit, setIsSubmit] = useState(false);

    const handleCreateProject = async (values) => {
        // console.log('value', values);
        const { nameproject, description, category_id, endDate } = values
        console.log('endDate: ', endDate);
        const user = JSON.parse(localStorage.getItem('user'));
        const author_id = user._id;
        // console.log("req_data: ", author_id, nameproject, description, category, formatDate);
        
        setIsSubmit(true)
        const res = await callCreateProject(author_id, nameproject, description, category_id, endDate)
        console.log("res create: ", res);
        if(res && res.data){
            message.success('Tạo mới thông tin bác sĩ thành công');
            form.resetFields();
            setProjectId(res.data._id);
            setOpenCreateProject(false);
            setShowTaskModal(true);
            // await fetchListProject()
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

    return (
        <Modal
            title="Thêm dự án mới"
            open={openCreateProject}
            onCancel={handleCancel}
            onOk={() => form.submit()}
            maskClosable={false}
            confirmLoading={isSubmit}
            okText="Thêm"
            cancelText="Hủy"
            className="custom-add-project-modal"
        >
            <Form 
                form={form} 
                layout="vertical"
                onFinish={handleCreateProject}
                autoComplete="off"
                loading={isSubmit}
            >
                <Form.Item
                    name="nameproject"
                    label="Tên dự án"
                    rules={[{ required: true, message: 'Vui lòng nhập tên dự án' }]}
                >
                    <Input placeholder="Nhập tên dự án" />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Mô tả"
                >
                    <Input.TextArea rows={4} placeholder="Nhập mô tả" />
                </Form.Item>
                <Form.Item
                    name="endDate"
                    label="Ngày kết thúc"
                    rules={[{ required: true, message: 'Vui lòng chọn ngày kết thúc' }]}
                >
                    <DatePicker className="custom-datepicker" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="category_id"
                    label="Danh mục"
                    rules={[{ required: true, message: 'Vui lòng không để trống phần này' }]}
                >
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Danh mục"
                        optionFilterProp="label"
                        options={dataCategory.map(category => ({
                            value: category._id, // Sử dụng _id làm giá trị
                            label: `${category.name_category}`, // Hiển thị name và address
                        }))}
                    />       
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddProjectModal;
