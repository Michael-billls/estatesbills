import React from 'react'
import "./listPage.scss";
import { listData } from '../../library/dummydata';
import Filter from '../../component/filter/Filter';
import Card from '../../component/card/Card';
import BasicMap from '../../component/map/BasicMap';
import Navbar from '../../component/navbar/Navbar';


const ListPage = () => {
    const data = listData

    return (
        <>
            <Navbar />
            <div className='listPage'>
                <div className="listContainer">
                    <div className="wrapper">
                        <Filter />
                        {data.map(item => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="mapContainer">
                    <BasicMap items={data} />
                </div>
            </div>
        </>
    )
}

export default ListPage