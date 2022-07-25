const { Counter } = require('./../models/counter');
const { MainClass } =require('./main_class');

class CounterClass extends MainClass{
    constructor(){
        let Schema = Counter;
        super(Schema);
    }
}

module.exports.CounterClass = CounterClass;