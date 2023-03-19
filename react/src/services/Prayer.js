import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from '@mui/material';
import { Calendar } from 'primereact/calendar';
import React, { useState } from "react";

const Prayer = () => {

    const [date, setDate] = useState(null);
    
    return (
        <div >
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
        </div>

    )
}
export default Prayer;