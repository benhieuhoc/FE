import { Col, Row } from "antd"
import './LayoutAdmin.scss';

const Bodylayoutadmin = ({content}) => {

    return(
        <>
        <Row>
            <Col xs={18} md={18} span={18} offset={5} style={{
                marginTop: "50px",
                background: "rgb(255, 255, 255)",
                }}>
                {content} {/* Hiển thị nội dung từ props */}
            </Col>
        </Row>
        </>
    )
};

export default Bodylayoutadmin;
