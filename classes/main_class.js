class MainClass{

    constructor(Schema){
        this.limit = 10;
        this.offset = 0;
        this.Schema = Schema; 
    }

    async elementsAll(req){
        let queryLimit = parseInt(req.query.limit) || this.limit;
        let queryOffset = parseInt(req.query.ofsset) || this.offset;
        try{
            let result = await this.Schema.find({}).skip(queryOffset).limit(queryLimit);
            let count = await this.Schema.estimatedDocumentCount();
            return {
                count: count,
                result: result
            };
        } catch(ex){
            return ex;
        }
    }

    async allElementsSelectOption(){
        try{
            let result = await this.Schema.find({});
            return result;
        } catch(ex) {
            return ex;
        }
    }

    async createElement(req){
        try{
            let element = req.body;
            let newElement = new this.Schema(element);
            let saveElement = await newElement.save();
            return saveElement;
        } catch(ex){
            return ex;
        }
    }

    async elementOne(req){
        try{
            let element = await this.Schema.findOne({_id: req.body._id})
            return element;
        } catch(ex){
            return ex;
        }
    }

    async elementDelete(req){
        try{
            let removElement = await this.Schema.remove({_id: req.body._id});
            return removElement;
        } catch(ex){
            return ex;
        }
    }

    async elementUpdate(req){
        try{
            let updateElement = await this.Schema.update({_id: req.body._id},{$set: req.body.updateData});
            return updateElement;
        } catch(ex){
            return ex;
        }
    }

}

module.exports.MainClass = MainClass;