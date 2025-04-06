import { Card, List, Typography, Divider, message, Modal } from "antd";
import { useEffect, useState } from "react";
import './Squarelayout.scss'

const CategotyLayout = ({Datas, onItemClick}) =>{
    const { Title, Text } = Typography;
    
    return(
        <Card title="Danh mục"  style={{ background: '#D9D9D9',width: 550, height: 346, boxShadow: '-11px 11px 14.100000381469727px rgba(0; 0; 0; 0.54)', borderRadius: 54 }}>
           <div className="task-list-container">
                <List
                    style={{  }}
                    dataSource={Datas}
                    renderItem={(Data) => (
                        <List.Item
                            style={{ cursor: "pointer" }}
                            onClick={() => onItemClick(Data._id, Data.name_category)} 
                        >
                            <Text strong>{Data.name_category}</Text>
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    )
}

export default CategotyLayout;