const d = require("./practice")
let student = ["Ade","Kunle", "Shade", "Kola"]
let [Ade, ...other]= student
console.log(other)
class Alpha{
    constructor(x,y){
        this.x =x;
        this.y =y;
        console.log(x+y);
    }
     foo(){
        console.log("do it")
    }
}

let num = new Alpha(1,2);


num.foo()
