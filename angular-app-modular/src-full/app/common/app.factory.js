import * as _ from 'lodash';

let appFactory = () => {
    let factoryObj = {
        sortArray: (array, order) => {
            array = _.orderBy(array, ['name'], [order]);
            return array;
        }
    };

    return factoryObj;
}

export default appFactory;