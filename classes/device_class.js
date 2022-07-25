const { Device } = require('./../models/device');
const { MainClass } =require('./main_class');

class DeviceClass extends MainClass{
    constructor(){
        let Schema = Device;
        super(Schema);
    }
}

module.exports.DeviceClass = DeviceClass;