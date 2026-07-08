import { Validators } from "../../../config";


export class CreateProductDto{

    private constructor(
        public readonly name: string,
        public readonly available: boolean,
        public readonly price: number,
        public readonly description: string,
        public readonly user:string,
        public readonly category: string
    ){}

    static create(object:{[key:string]:any}):[string?, CreateProductDto?]{
        const {name,available,price,description,user,category}=object;
        let availableBoolean = available;

        if(!name) return ['Missing name'];

        if(typeof available !=='boolean'){
            availableBoolean = (available==='true')
        }

        if(!price) return['Missing price'];

        if(!description) return['Missing description'];

        if(!user) return ['Missing userId']
        if(!Validators.isMongoId(user)) return ['Invalid User Id'];

        if(!category) return['Missing categoryId'];
        if(!Validators.isMongoId(category)) return ['Invalid Category Id'];

        return [undefined, new CreateProductDto(name, availableBoolean,price,description,user, category)]

    }
}