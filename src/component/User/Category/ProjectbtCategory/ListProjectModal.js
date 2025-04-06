import { Modal, Card } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import "./ProjectListModal.scss";
import {fetchProjectbtCategory} from "../../../../services/api"

const ProjectListModal = ({ open, onCancel, categoryId, categoryName, userId, setProjectId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (categoryId, userId) {
        console.log("projectId: ", categoryId, "userId: ", userId);
        fetchListProject(categoryId, userId);
    }
  }, [categoryId, userId]);

  const fetchListProject = async (categoryId, userId) => {
    const res = await fetchProjectbtCategory(categoryId, userId);
    console.log("res: ", res);
      if(res && res.data) {
        setData(res.data);
      }
  }

  const onclickItem = (id) => {
    setProjectId(id);
    setData([]);
    onCancel()
  }

  const handleCancel = () =>{
    setData([]);
    onCancel()
  }

  return (
    <Modal
      title= {categoryName}
      open={open}
      onCancel={handleCancel}
      footer={null}
      width={1200}
      className="project-list-modal"
    >
      <div className="project-list-container">
        {data && data.length > 0 ? (
          data.map((project) => (
            <Card key={project._id} className="project-card" onClick={() => onclickItem(project._id)}>
              <h3 className="project-title">{project.nameproject}</h3>
              <p><strong>Tác giả:</strong> {project.author_id.name}</p>
              <p><strong>Ngày kết thúc:</strong> {moment(project.dateEnd).format("DD/MM/YYYY")}</p>
              <p><strong>Thành viên:</strong> {project.member_id?.length + 1} người</p>
              <p><strong>Số nhiệm vụ:</strong> {project.task_id?.length} task</p>
            </Card>
          ))
        ) : (
          <p>Không có dự án nào.</p>
        )}
      </div>
    </Modal>
  );
};

export default ProjectListModal;