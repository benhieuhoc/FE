import { Button} from "antd";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const All_project = () => {
        navigate("/all_project");
    }
    return (
        <>
            <h1>Home</h1>
            <Button type="primary" onClick={All_project}>Tất cả project</Button>
        </>
    )
}
export default Home;