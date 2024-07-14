import React from 'react'
import './list.scss';
import Card from "../../component/card/Card"
import { listData } from '../../library/dummydata'

const List = () => {
    return (
        <div className='list'>
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default List