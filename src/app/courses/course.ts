export class Course {
    id: number;
    name: String;
    imageUrl: String;
    price: number;
    code: String;
    duration: number;
    rating: number;
    releaseDate: String;

    constructor(id: number, name: String, imageUrl: String, price: number, code: String, duration: number, rating: number,releaseDate: String){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = releaseDate;
    }
}