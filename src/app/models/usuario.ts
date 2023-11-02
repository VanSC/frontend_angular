export class Usuario {

    _id?: string;
    username: string;
    email: string;
    password: string;

    constructor(_id:string, username:string, email:string, password: string){
        this._id=_id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}