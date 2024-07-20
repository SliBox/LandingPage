export default class API {
    constructor(token,cmd,data){
        this.token = token;
        this.cmd = cmd;
        this.data = data;
    }

    jsonString(){
        return JSON.stringify(this);
    }
}