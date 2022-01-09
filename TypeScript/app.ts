import Singleton from "./Singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance()

if(a === b){
    console.log('Solo tenemos una instancia')
}

console.log('Hola TypeScript');

//TIPOS DE DATOS
//Boolean
let isDone: boolean = true; 

//Number
let numerador: number = 42; 
let denominador: number = 6; 
let resultado = numerador / denominador;

//String
let juancho: string = 'Juancho';
let saludo = `Hola soy ${juancho}`

//Array
let personas: string[] = ['Juan', 'Maria', 'Dani']
personas.push('Xime')

let personsAndNumbers: Array <string | number> = ['Isa', 4, 'Pablo', 3,  'Sofia', 16]

//Enum
enum Color {
    Rojo,
    Verde,
    Azul 
}
console.log(Color)

//Amy
let joker:any = 'Joker';
console.log(joker);

joker = {nombre: 'Joker'};
console.log(joker);

//FUNCIONES
function add(a: number, b: number): number {
    return a + b;
}

function createAdder(a: number): (number) => number {
    return function(b:number){
        return a + b;
    }
}
 const addFour = createAdder(4);
 const fourPlusSix = addFour(6)
 console.log(fourPlusSix)

 function fullName(name: string, lastName?: string): string
{
    return `${name} ${lastName}`
}
const gonzo = fullName('Gonzo')

//INTERFACES
interface Rectangulo {
    width: number;
    height: number;
}

let rect: Rectangulo = {
    width: 10,
    height: 5,
}

function area(number: Rectangulo){
    return number.width * number.height
}
const areaRect = area(rect)


interface Product {
    id: number;
    name: string;
    price:number;
    url ?: string
    getRoundePrice: (price:number) => number;
}

let banana: Product = {
    id: 1004,
    name: 'Banana',
    price: 10.50,
    getRoundePrice: function(price: number){
        return Math.round(price)
    }
}

let precioRedondeado = banana.getRoundePrice(banana.price);
console.log(precioRedondeado);