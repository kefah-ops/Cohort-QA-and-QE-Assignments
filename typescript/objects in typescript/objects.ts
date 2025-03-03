//explicit type annotations/inline type\
type Person1={
    name:string,
    age:number,
    location?:string,
}

type PartialPerson=Partial<Person1>
type RequirePerson=Required<Person1>


const person:{name:string, age:number}={
    name:'alice',
    age:30,
}

const alice:Person1= {
    name:"alice",
    age : 30,
}
    //you can pass in optional properties using ? operatror

type PersonOptionalProps={
    name:String;
    age?:number;
}

const Green1:PersonOptionalProps=  {
    name:"Green"
    //age:30 -commenting this out  did not error
}

//Intersection of types
//Intersection types allow you to combine multiple types into one .this is useful when you that has all the properties of the combined types 

type Employee= {
    employeeID:string
    employeeName:string
}

type Department={
    department:string;
}
type manager =Employee & Department
const manager:manager = {
    employeeID:"123",
    employeeName:"James",
    department:"Hr"
}

//Interfaces
//interfaces are other ways of constructing objects ,they are similar to tyoes and have more capabilities of extending in interfaces
//there are = equal signs in interfaces like type
 
interface Animal {
    name:string,
    age:number,
}

interface Animal {
    name:string,
    age:number,
}


// we can extend the properties of an interface and use them in another interface
interface Dog extends Animal {
    breed:string;
}
const myDog:Dog = {
    name:"Rex",
    age:2,
    breed:'german shepherd'
} 

//you can even extend interfaces and use them in files just use in files nned just like types
//differences between a type and an interface
//interfaces canbe extended but types can only be intersected
//and the opposite is impossible and you cannot interect interfaces and you cannot extend types

type A_ ={
    propA:string,
    propB:number,
}

type B_= A_ & {
    propB:number,
}

//Create an object frm dynamic keys with index signatures
// const dynamicKeyShape:{[key:string]:anytype=number,tring,array of other types}

const dynamicKeyShape:{[key:string]:string} = {} 
dynamicKeyShape["name"] ="alice"  
dynamicKeyShape["age"] ="30"
console.log(dynamicKeyShape)

type user={
    id:number;
    name:string;
    //this accepts the key name of any name that can be either a strring or a number

    [key:string]:string |number
}
    const user1:user={
        id:1,
        name:'john'

    }
console.log(user1)//id:1 name:john


//the dynamic allows many keys to be passed on of any values
const user2:user={
    id:1,
    name:'john',
    email:'john@gmail.com',
    phone:1234567

}
console.log(user2)//id:1 name:john ,email,john@gmail.com,phone:072222222


//utility types
//typescript provides utility functions to mke it easy to work with typescript
//common utility 
//pertial<T>-makes all properties of a type optional
//required<T>makes or properties of a type required

//pick<T>cretes a new type by picking a set of properteis from an existing type
//ommit<T>-creates a new type by ommitting a set of properties


type Person2={
    name:string,
    age:number,
    location?:string,
}

type PartialPerson2=Partial<Person2>
type RequiredPerson=Required<Person2>


//pick and ommit
type person3={
    name:string,
    age:number,
    location:string,
}

//pick the name and age from person2
// type NameAndAge=pick<Person3."name" |"age"
// type withoutLOcation=oMIT<person3, "location">


// const nameAndAge
  interface Person3 {
    name:string,
  }
interface person4{
    age:number,
    greet():void
}

const person4:person4={
    age:25,
    greet(){
        console.log(`hello, my name is${this.name}`)
   
    }


}
person4.greet();//hello my name is bob