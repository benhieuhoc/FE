import Layoutmain from "../component/User/layout/Layoutmain";
import LayoutProject from "../component/User/Project/SquareProject/LayoutProject";
import LayoutTask from "../component/User/Task/SquareTask/LayoutTask";
import CalendarLayout from "../component/User/Calender/CalendarLayout";
import AddProjectModal from "../component/User/Project/add_Project";
import AddTaskModal from "../component/User/Task/AddTask/add_Task";
import TaskDetail from "../component/User/Task/DetailTask/DetailTask";
import CategotyLayout from "../component/User/Category/Category";
import ProjectListModal from "../component/User/Category/ProjectbtCategory/ListProjectModal";
import { useEffect, useState } from "react";
import { fetchProjectbyauthor, fetchTaskbyuser, fetchAllCategory } from "../services/api";
import { Button, Row, Col, Space } from "antd";
import { IoAddCircle } from "react-icons/io5";

const Home = () => {
    const [dataProject, setDataProject] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openCreateProject, setOpenCreateProject] = useState(false);
    const [dataCategory, setDataCategory] = useState([])
    const [dataTask, setDataTask] = useState([]);
    const [showTaskDetailModal, setShowTaskDetailModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [openListProjectModal,setOpenListProjectModal] = useState(false);
    const [projectId, setProjectId] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [categoryName, setCategoryName] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;
    useEffect(() => {
        console.log("selectedDate",selectedDate)
        fetchListProject(id, selectedDate);
        fetchListTaskbyId(id, selectedDate);
        handlefecthCategory();
    }, [selectedDate]);
    useEffect(() => {
        if (projectId) {
            setShowTaskModal(true);
        }
    }, [projectId]);
    useEffect(() => {
        if (taskId) {
            setShowTaskDetailModal(true);
        }
    }, [taskId]);
    useEffect(() => {
        if (categoryId) {
            setOpenListProjectModal(true);
        }
    }, [categoryId]);
    const fetchListProject = async (id, date) => {
        // console.log("id: ", id);
        const res = await fetchProjectbyauthor(id, date)
        console.log("res Project: ", res); 
        if (res) {
            if(res.data){
                setDataProject(res.data);
            }
            else{
                setDataProject([]);
            }
        }
    };
    const fetchListTaskbyId = async (id, date) => {
        const res = await fetchTaskbyuser(id, date)
        console.log("res Task: ", res); 
        if (res) {
            if(res.data){
                setDataTask(res.data);
            }
            else{
                setDataTask([]);
            }
        }
    };
    const handlefecthCategory = async () => {
        const res = await fetchAllCategory();
        console.log("res category: ", res);
        if(res && res.data) {
            setDataCategory(res.data);
        }
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleProjectClick = (id) => {
        console.log("Project ID: ", id);
        setProjectId(id);       
    };
    
    const handleTaskClick = (id) => {
        console.log("Task ID: ", id);
        setTaskId(id);       
    };

    const handleCategoryClick = (_id, name_category) => {
        console.log("Category ID: ", _id);
        console.log("name_category: ", name_category);
        setCategoryId(_id);       
        setCategoryName(name_category);       
    };
    
    return(
    <>
        <Layoutmain>
            <Col>
            <Row style={{ height: 60, borderRadius: 15, marginBottom: '30px', justifyContent: 'space-between', alignItems: 'center', background: '#D9D9D9' }}>
                <Space size="middle">
                    <Button 
                        style={{ left: 1100, height: 40, fontSize: 20, fontWeight: 600 , borderRadius: 15, color: '#000000', background: '#80da95' }}
                        type="primary" 
                        icon={<IoAddCircle />} 
                        onClick={() => { setOpenCreateProject(true) }}
                        >
                        Thêm dự án
                    </Button>
                    {/* <Button 
                        icon={<UserOutlined />} 
                        onClick={() => console.log("Trang cá nhân")}
                        >
                        Trang cá nhân
                        </Button> */}
                </Space>
            </Row>
                <Row style={{ display: "flex", gap: "100px" }}>
                    <CalendarLayout 
                        title='Lịch công việc' 
                        onDateChange={handleDateChange} 
                        />
                    <LayoutProject
                        Datas = {dataProject}
                        onItemClick={handleProjectClick}
                        />
                </Row>
                <Row style={{ display: "flex", gap: "100px", marginTop: "40px" }}>
                    <CategotyLayout 
                        Datas = {dataCategory}
                        onItemClick={handleCategoryClick}
                        />
                    <LayoutTask
                        Datas = {dataTask}
                        onItemClick={handleTaskClick}
                        />
                </Row>
            </Col>
        </Layoutmain>
         <AddProjectModal
            openCreateProject={openCreateProject}
            setOpenCreateProject={setOpenCreateProject}
            // fetchListProject={fetchListProject}
            dataCategory={dataCategory}
            // showTaskModal = {showTaskModal}
            setShowTaskModal = {setShowTaskModal}
            // ProjectId = {ProjectId}
            setProjectId = {setProjectId}            
         />
         <AddTaskModal
            open={showTaskModal}
            onCancel={() => {
                setShowTaskModal(false)
                setProjectId(null);
            }}
            projectId={projectId}
        />
        <TaskDetail
            open={showTaskDetailModal}
            onCancel={() => {
                setShowTaskDetailModal(false)
                setTaskId(null);
            }}
            taskId={taskId}
        />
        <ProjectListModal
        open={openListProjectModal}
        onCancel={() => {
            setOpenListProjectModal(false)
            setCategoryName(null)
            setCategoryId(null)
        }}
        categoryId={categoryId}
        categoryName={categoryName}
        setProjectId = {setProjectId}
        userId={id}
      />
    </>
    )
}

export default Home;
