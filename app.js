const _ = require('lodash');
const items = [ 1, [ 2, 4,[ 5,[ 6 ] ] ] ];

const newItems = _.flatMapDeep(items);
console.log(newItems);