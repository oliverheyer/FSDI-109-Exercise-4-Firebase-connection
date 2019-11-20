export class Post{
    // cass attribute
    public message : string;
    public imageUrl : string;
    public from: string;
    public to: string;
    public createdOn: Date;

    //class methods
    constructor(){
        this.to = "Everyone";
        this.createdOn = new Date(); // new Date() == get the extact time on the moment
    }
}