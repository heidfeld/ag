import React, { Component } from 'react';
import './SingleItem.css';
import GraphicItem from './../../common/GraphicItem/GraphicItem';
import DataProvider from './DataProvider';

class SingleItem extends Component {
    render() {
        const item = DataProvider.getItem('1');
        const parameters = JSON.stringify(item.parameters)
        return (
            <div className="SingleItem">
                <img src={`img/${item.main_img}`} alt={item.name}/>
                <br/>
                {parameters}
                <GraphicItem></GraphicItem>
            </div>
        );
    }
}

export default SingleItem;