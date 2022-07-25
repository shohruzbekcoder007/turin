const { User } = require('./../models/user');
const { MainClass } =require('./main_class');

class UserClass extends MainClass{
    constructor(){
        let Schema = User;
        super(Schema);
    }
}

module.exports.UserClass = UserClass;