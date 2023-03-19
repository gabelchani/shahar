import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from '@mui/material';
import './css/MainButtons.css'


const MainButtons=()=>{

    return (
            <div className="under">
                <div>
                    <Button id='B1'><i className="pi pi-home" id='home'></i></Button>
                    <Button id='B2'><i className="pi pi-book"  id='book'></i></Button>
                    <Button id='B3'><i className="pi pi-plus" id='plus'></i></Button>
                    <Button id='B4'><i className="pi pi-table" id='table'></i></Button>
                    <Button id='B5'><i className="pi pi-comment" id='comment'></i></Button>
                </div>
                <div>
                <div className="text1">Home</div>
                <div className="text2">My prayers</div>
                <div className="text3">add new</div>
                <div className="text4">Dashbord</div>
                <div className="text5">Stories</div>
                </div>
            </div>

    )
}
export default MainButtons;



