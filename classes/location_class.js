const { Location } = require('./../models/location');
const { MainClass } =require('./main_class');

class LocationClass extends MainClass{
    constructor(){
        let Schema = Location;
        super(Schema);
    }
}

module.exports.LocationClass = LocationClass;