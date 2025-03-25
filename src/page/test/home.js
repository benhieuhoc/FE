import { Button, Col, Divider, Form, Input, message, Modal, notification, Radio, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Home</h1>
            <Button type="primary" onClick={navigate("/all_project")}>Tất cả project</Button>
        </>
    )
}
export default Home;