export class Animal{

    private _id: number;
    private _name: string;
    private _race:string;
    private _size:string;
    private _weight:string;
    private _life:string;
    private _feed:string;
    private _imageUrl:string;

    constructor(id:number, name:string, race:string, size:string, weight:string, life:string, feed:string, imageUrl:string){
        this._id=id;
        this._name=name;
        this._race =race;
        this._size =size;
        this._weight=weight;
        this._life =life;
        this._feed=feed;
        this._imageUrl=imageUrl;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get race(): string {
        return this._race;
    }

    public set race(race: string) {
        this._race = race;
    }

    public get size(): string {
        return this._size;
    }

    public set size(size: string) {
        this._size = size;
    }

    public get weight(): string {
        return this._weight;
    }

    public set weight(weight: string) {
        this._weight = weight;
    }

    public get life(): string {
        return this._life;
    }

    public set life(life: string) {
        this._life = life;
    }

    public get feed(): string {
        return this._feed;
    }

    public set feed(feed: string) {
        this._feed = feed;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }







    

}