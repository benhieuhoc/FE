import { Button} from "antd";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const All_project = () => {
        navigate("/all_project");
    }
    const All_task = () => {
        navigate("/all_task");
    }
    return (
        <>
            <h1>Home</h1>
            <Button type="primary" onClick={All_project}>Tất cả project</Button>
            <Button style={{marginLeft:50}} type="primary" onClick={All_task}>Tất cả task</Button>
        </>
    )
}
export default Home;