import Realm from "realm";

//to do list
class ToDo extends Realm.Object<ToDo> {
    id!: number;
    task!: string;
    isComplete!: boolean;

    static schema: Realm.ObjectSchema = {
        name: "ToDo",
        primaryKey: "id",
        properties: {
            id: "int",
            task: "string",
            isComplete: "bool",
        }
    }

}

const realm = async () => {
    return await Realm.open({
        schema: [ToDo]
    })
}

export { realm, ToDo };