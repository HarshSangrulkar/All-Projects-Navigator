// import Realm from "realm";

// // Step 1: Define Schema
// //student app
// class Student extends Realm.Object<Student> {
//     id!: number;
//     name!: string;
//     age!: number;

//     static schema: Realm.ObjectSchema = {
//         name: "Student",
//         primaryKey: "id",
//         properties: {
//             id: "int",
//             name: "string",
//             age: "int",
//         },
//     };
// }

// //to do list
// class ToDo extends Realm.Object<ToDo> {
//     id!: number;
//     task!: string;
//     isCompleted!: boolean;

//     static schema: Realm.ObjectSchema = {
//         name: "ToDo",
//         primaryKey: "id",
//         properties: {
//             id: "int",
//             task: "string",
//             isComplete: "bool",
//         }
//     }

// }

// // Step 2: Open RealmDB
// const realm = async () => {
//     return await Realm.open({
//         schema: [Student, ToDo]
//     })
// }

// export { realm, Student, ToDo };
