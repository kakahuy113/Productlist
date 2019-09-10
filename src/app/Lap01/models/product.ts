export class products {
    public id : number;
    public product : string;
    public code : string;
    public available : string;
    public Price : number;
    public rating : number;
    public urlImage : string;

    constructor (id : number, product : string, code : string , available : string, Price : number, rating : number, url : string ) {
        this.id = id;
        this.product = product;
        this.code = code;
        this.available = available;
        this.Price = Price;
        this.rating = rating;
        this.urlImage = url;
    }
}