import React from 'react';
import MainButtons from '../services/MainButtons'
 import { TabMenu } from 'primereact/tabmenu';
import Founds from '../services/Founds';
const Home = () => {
    
        return (
            <div className="card">
                <Founds/>
                <MainButtons />
                
            </div>
        )

}
export default Home;

