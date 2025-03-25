import { Col, Row } from "antd"

const Bodylayout = ({content}) => {

    return(
        <>
        <Row>
            <Col xs={18} md={18} span={18} offset={5} style={{
                backgroundColor: "white",
                marginTop: "50px",
                marginBottom: "50px",
                borderRadius: "15px", 
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Thêm viền mờ
                backdropFilter: "blur(10px)", // Thêm hiệu ứng mờ
                padding: "20px"
                }}>
                {content} {/* Hiển thị nội dung từ props */}
            </Col>
        </Row>
        </>
    )
};

export default Bodylayout;
