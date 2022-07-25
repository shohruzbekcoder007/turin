const { Report } = require('./../models/report');
const { MainClass } =require('./main_class');

class ReportClass extends MainClass{
    constructor(){
        let Schema = Report;
        super(Schema);
    }
}

module.exports.ReportClass = ReportClass;