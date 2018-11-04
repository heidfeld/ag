import items from './items';
import {isArray} from 'underscore'

const DataProvider = {
    getItem(identifier) {
        const filtered = this.getAllItems().filter(item => item.identifier === identifier);
        if (filtered.length > 0) {
            return filtered[0];
        }
        return {};
    },
    getAllItems() {
        const allItems = items.data;
        if(allItems && isArray(allItems)) {
            return allItems;
        }
        return [];
    }
};

export default DataProvider;