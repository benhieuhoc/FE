import { Card, List, Typography, Divider, message, Modal } from "antd";
import { useEffect, useState } from "react";
import './Squarelayout.scss'

const SquareLayout = ({Datas, onItemClick}) =>{
    const { Title, Text } = Typography;
    
    return(
        <Card
            title="Nhiệm vụ của bạn"
            style={{
                background: '#D9D9D9',
                width: 550,
                height: 370,
                boxShadow: '-11px 11px 14px rgba(0, 0, 0, 0.54)',
                borderRadius: 30,
                border: '1px solid #6D8B74'
            }}
        >
            <List
                className="task-list-container"
                dataSource={Datas}
                renderItem={(Data) => (
                    <List.Item
                        style={{ cursor: "pointer" }}
                        onClick={() => onItemClick(Data._id)} 
                    >
                        <Text strong>{Data.nameproject}</Text>
                        <Text type="secondary">{Data.dateEnd}</Text>
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default SquareLayout;