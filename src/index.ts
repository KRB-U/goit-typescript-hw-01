import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

// let total: number = 99;
// total = 20;
// console.log(total);

// let name: string = "Ajax";
// console.log(name);

// let isActive: boolean = false;
// let nl: null = null;
// let und: undefined = undefined;

// const nbr: number[] = [1, 2, 3, 4, 5, "d"];

// const numbers: number[] = [1, 45, 65, 345, 73, 5];
// numbers.push("22");

// const obj: object[] = [{}, name: 'mango',];

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "ajax",
//   age: 22,
// };

// user.age = 2;

// const user2: User = {
//   name: "ajax",
//   //age missing
//   // isAvaliable assignable/призначення
// };

// type evtType = "lesson";

// const evt: evtType = "homework";

// *
// type evtType = "lesson" | "homework";

// const evt: evtType = "homework";

// *

// type ageType = string;

// const ageUser: ageType = "two";

// type size = "small" | "medium" | "large";

// let age: any = "kiwi";
// age = 22;
// age = false;
// age = null;

// console.log(age.toFixed(1));

// let nameUser: unknown = "Poly";
// console.log(nameUser);
// nameUser = 22;
// nameUser.toFixed(); // ERROR

// any vs unknown однакові, - дозволяє привласнювати змінним значення будь-якого типу,
// але останній з обмеженнями, - безпечна типізація.
// тобто, вимагає явної перевірки типів перед використанням/виконанням операцій із змінною.

// let ageUser: unknown = 20;
// if (typeof ageUser === "number") {
//   let ageNumber: number = ageUser;
// }

// Tuple
// let typleType: [string, boolean];
// tupleType = ["hello", true]; // OK
// tupleType = [true, "hello"]; // Error. Неправильні типи
// tupleType = ["hello", true, true]; // Error. Більше значень ніж у tuple

// через push не відстежує реальний вміст масиву
// let arr: [string, number];
// arr = ["age", 11];
// console.log(arr);
// arr.push("adding text");
// console.log(arr);
// //
// let tuple: [string, ...number[]];
// tuple = ["Car", 23, 546, 653];
// console.log(tuple);

// Enum - enumeration, - перелік констант, об'єкт

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// // однаковий сенс
// const button2: size = "medium"; // кастоний тип
// const button3: Sizes = Sizes.medium; // enum тип

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"

// enum UserStatus {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Banned = "BANNED",
// }

// let status: UserStatus = UserStatus.Active;

// console.log(status);

// // угруповання взаємопов'язаних значень

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {
//   // handle response
// }

// respond(HttpCodes.OK);

// const enum видаляється під час транспіляції та не створює додаткового об'єкта в JavaScript.
// const enum Test {
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

// Два способи типізації функції:
// 1) якщо є return - вказати тип результату роботи функції після параметрів:
// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }
// console.log(add(2, 3));

// 2) якщо нема return - після оголошення параметрів типізуємо функцію, зазначивши void

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// add(2, 3);

// приклад коли у функ приходить об'єкт

// type User = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello, ${user.name}`);
// }

// great({ name: "sss" });

// type UserDescr = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): UserDescr {
//   return { name, age, hobby };
// }

// console.log(userConstructor("John Doe", 25, "Reading"));

// приклад об'єкт в якого є методи

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => void;
// };

// const car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color: string) {
//     console.log("Start " + this.color);
//   },
// };
