import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Card } from "antd";
import moment from "moment";
import { vi } from 'date-fns/locale';
import './Calendar.scss'

const CalendarLayout = ({ title, onDateChange }) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        if (onDateChange) {
            const formatted = moment(value).format("YYYY-MM-DD");
            onDateChange(formatted); 
        }
    }, []);

    const handleChange = (date) => {
        setValue(date);
        if (onDateChange) {
            const formatted = moment(date).format("YYYY-MM-DD");
            onDateChange(formatted); 
            console.log("Selected date:", formatted);
        }
    };

    return (
        <Card title={title} style={{ background: '#D9D9D9',width: 550, height: 346, boxShadow: '-11px 11px 14.100000381469727px rgba(0; 0; 0; 0.54)', borderRadius: 54 }}>
            <Calendar 
                className={"custom-calendar"}
                onChange={handleChange} 
                value={value} 
                locale="vi"
            />
        </Card>
    );
};

export default CalendarLayout;
