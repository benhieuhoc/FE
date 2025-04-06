import { useState, useEffect } from "react";
import { Modal, Input, Button, Switch } from "antd";
import moment from "moment";
import "./DetailTask.scss";
import { fetchTaskbyId, updateStatus } from "../../../../services/api";

const TaskDetail = ({ open, onCancel, taskId }) => {
  
    const [dataTask, setDataTask] = useState([]);
    const [status, setStatus] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
            if (taskId) {
                console.log("projectId: ", taskId);
                fecthTask(taskId);
                setDescription(dataTask.description);
                setStatus(dataTask.status);
            }
        }, [taskId]);
    const fecthTask = async (id) => {
        const res = await fetchTaskbyId(id);
        console.log("res Task: ", res);
        if (res && res.data) {
            setDataTask(res.data);
        }
    }

    const handleStatusChange = (checked) => {
        setStatus(checked);
    };

    const handleSave = async () => {
        const res = await updateStatus(taskId, description, status);
        if (res && res.data) {
        //   alert("Cập nhật công việc thành công!");
          fecthTask(taskId);
        } else {
        //   alert("Cập nhật công việc thất bại!");
        }
      };

    return (
    <Modal
        title="Chi tiết công việc"
        open={open}
        onCancel={onCancel}
        footer={null}
        width={1200}
        height={800}
        className="task-detail-modal"
    >
        <div className="task-detail">
        <div className="task-info">
            <p><strong>Tên công việc:</strong> {dataTask.nametask}</p>
            <p><strong>Ngày bắt đầu:</strong> {moment(dataTask.day_start).format("DD/MM/YYYY")}</p>
            <p><strong>Ngày kết thúc:</strong> {moment(dataTask.day_end).format("DD/MM/YYYY")}</p>
        </div>
        <div className="task-description">
            <strong>Mô tả:</strong>
            <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Mô tả chi tiết công việc"
            />
        </div>
        <div className="task-status">
            <strong>Trạng thái:</strong>
            <Switch
            checked={status}
            onChange={handleStatusChange}
            checkedChildren="Hoàn thành"
            unCheckedChildren="Chưa hoàn thành"
            />
        </div>
        <Button type="primary" onClick={handleSave} style={{ marginTop: 20 }}>
            Lưu thay đổi
        </Button>
        </div>
    </Modal>
    );
    };

export default TaskDetail;
