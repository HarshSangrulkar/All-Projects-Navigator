import Realm from 'realm';
import openRealm from '../RealmDB/openRealmScehma';
import {Student} from '../RealmDB/realmConfigStudent';

//add
export const addStudent = async (name: string, age: number): Promise<void> => {
  //opens the openRelm instance and stores it in variable realm
  const realm = await openRealm();
  //take last student's id
  realm.write(() => {
    const lastStudent = realm.objects<Student>('Student').sorted('id', true)[0];
    const newId = lastStudent ? lastStudent.id + 1 : 1;
    realm.create('Student', {newId, name, age});
  });
  realm.close();
};

//fetch
export const getAllStudents = async (): Promise<Student[]> => {
  const realm = await openRealm();
  return [...realm.objects<Student>('Student').sorted('id', false)];
  realm.close();
};

//delete
export const deleteStudent = async (id: number): Promise<void> => {
  const realm = await openRealm();
  realm.write(() => {
    const student = realm.objectForPrimaryKey<Student>('Student', id);
    if (student) {
      realm.delete(student);
    }
  });
  realm.close();
};

//update
export const updateStudent = async (
  id: number,
  newName: string,
  newAge: number,
): Promise<void> => {
  const realm = await openRealm();
  realm.write(() => {
    const student = realm.objectForPrimaryKey<Student>('Student', id);
    if (student) {
      student.name = newName;
      student.age = newAge;
    }
  });
  realm.close();
};
