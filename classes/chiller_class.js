const { Chiller } = require('./../models/chiller');
const { MainClass } =require('./main_class');

class ChillerClass extends MainClass{
    constructor(){
        let Schema = Chiller;
        super(Schema);
    }
}

module.exports.ChillerClass = ChillerClass;