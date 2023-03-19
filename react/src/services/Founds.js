import React, { useEffect, useState } from 'react';
//import { TabMenu } from 'primereact/tabmenu';
//import { Button } from '@mui/material';
import { InputText } from "primereact/inputtext";


const Founds=()=>{
    const [searchInput,setSearchInput]=useState();
    useEffect(()=>{console.log('searchInput: ',searchInput);},[searchInput])
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" onInput={(e)=>{setSearchInput(e.target.value)}} value={searchInput}/>
            </span>             
        </div>
    );
}
export default Founds;