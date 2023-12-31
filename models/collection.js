'use strict';

class Collection {
    constructor(model) {
        this.model = model;
    }

    async create(jsonObj) {
        console.log(jsonObj);
        try {
            let record = await this.model.create(jsonObj);
            return record;
        } catch (e) {
            console.error(`error creating data for model: ${this.model.name}, ${e}`);
            return e;
        }
    }
    async read(id){
        let records = null;
        try{
            if(id) {
                options.where = { id: id }
                records = await this.model.findOne(options)
            } else
            records = await this.model.findAll();
            return records;
        } catch (e) {
            console.error(`error reading data for model: ${this.model.name}`);
        }
    }
    async update(id, jsonObj) {
        try {
            if(!id) throw new Error(`No Id provided for the model: ${this.model.name}`);

            let record = await this.model.findOne({where: {id}});
            let updatedRecord = await record.update(jsonObj);
            return updatedRecord;
        }catch(e) {
            console.error(`error updating data for model: ${this.model.name}`);
            return e;
        }
    }
    async delete(id) {
        try {
            if(!id) 
                throw new Error(`No Id provided for the model: ${this.model.name}`);
                let deletedRecord = await this.model.destroy({where: {id}});
                return deletedRecord;
        }catch(e){
            console.error(`error deleting data for model: ${this.model.name}`); 
            return e;
        }
    }
}

module.exports = Collection;