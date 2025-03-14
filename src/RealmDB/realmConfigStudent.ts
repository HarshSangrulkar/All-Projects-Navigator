import Realm from "realm";

//student app
class Student extends Realm.Object<Student> {
    id!: number;
    name!: string;
    age!: number;

    static schema: Realm.ObjectSchema = {
        name: "Student",
        primaryKey: "id",
        properties: {
            id: "int",
            name: "string",
            age: "int",
        },
    };
}

const realm = async () => {
    return await Realm.open({
        schema: [Student]
    })
}

export { realm, Student };