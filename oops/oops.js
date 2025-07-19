class Student{
  name
  age
  #height
// Constructor overloading is not possible in javascript
/*   constructor(){} */
  constructor(name,age,height){
    this.name = name;
    this.age = age
    this.#height = height
  }

  getStudentDetails(){
    console.log(`${this?.name} is ${this?.age} years old and he is ${this.#height} 'ft tall`)
  }

  getStudentHeight(){
    console.log(this.#height)
  }

}

let nil = new Student("Niladri",25,6.1)
nil.getStudentDetails()
nil.getStudentHeight()