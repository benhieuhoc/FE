import { Col, Row } from "antd"

const Bodylayout = ({content}) => {

    return(
        <>
        <Row>
            <Col xs={18} md={18} span={18} offset={5} style={{
                marginTop: "25px",
                background: "rgb(255, 255, 255)",
                }}>
                {content} {/* Hiển thị nội dung từ props */}
            </Col>
        </Row>
        </>
    )
};

export default Bodylayout;
