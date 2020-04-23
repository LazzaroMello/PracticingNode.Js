function func1(){
  console.log(this);    
} 

const func2 = () =>{
  console.log(this);  
   
}

class objetoQuandoInstanciado {
  constructor() {

    this.func1 = func1;
    this.func2 = func2;
    this.name = 'lazaro';
    this.age = 24;

  }
}
 
let newObject = new objetoQuandoInstanciado();

newObject.func1(); //output: attributs of the object
newObject.func2(); //output: empty object
