export function returnTheSameValue<T, T2> (arg: T, n: T2): {arg: T, n: T2} {
    return {
        arg,
        n
    };
    
}

type Animal = {
    age?: number,
    height: number | string | boolean
}

interface Dog extends Animal {
    name: string
}

const dog1: Dog = {
    name: "My dog",
    age: 54,
    height: 1.5
};

console.log("My dog", dog1)

type operation = "multiply" | "add" | "divide";
const mathOperation: operation = "add";

const arr: number[] = [5];
const arr2: Array<number> = [1];

console.log(mathOperation, arr, arr2);






// Functions
const getAsyncNumber = async (): Promise<number> => {
    return 5;
}

const executeAsyncFunction = async () => {
    const number = await getAsyncNumber();
    console.log("Async function result:", number);
}

executeAsyncFunction()
.catch(error => {
    console.log(error);
});





type Person = {
    name: string,
    lastname: string,
    age: number
}

type InputCreatePerson = Omit<Partial<Person>, "name" | "lastname"> & Required<Pick<Person, "name" | "lastname">>;
    

// Factory Function
function createPerson({ name, lastname, age }: InputCreatePerson) {
    const person: Person = {
        name,
        lastname,
        age: age ?? 22
    }

    return person;
}

const people: Array<Person> = [
    createPerson({ name: "Oscar", lastname: "Corea" }),
    createPerson({ name: "Oscar", lastname: "Corea", age: 25 })
]

console.log(people);
