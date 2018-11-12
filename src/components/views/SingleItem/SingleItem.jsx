import React, { Component } from 'react';
import './SingleItem.css';
import GraphicItem from './../../common/GraphicItem/GraphicItem';
import DataProvider from './DataProvider';
import {translate, translateArray} from '../../../logic/translations/Translations'

class SingleItem extends Component {
    render() {
        const item = DataProvider.getItem('1');
        const total = Object.entries(item.parameters).reduce((total, pair) => {
            const [key, value] = pair;
            if (Array.isArray(value)) {
                return `${total} ${translate(key)}: ${translateArray(value, ',')}<br>`;
            }
            return `${total} ${translate(key)}: ${translate(value)} <br>`;
        }, '');
        return (
            <div className="SingleItem">
                <img src={`img/${item.main_img}`} alt={item.name}/>
                <br/>
                <div dangerouslySetInnerHTML={{__html: total}} className='SingleItem-props' />
                <GraphicItem></GraphicItem>
            </div>
        );
    }
}

export default SingleItem;