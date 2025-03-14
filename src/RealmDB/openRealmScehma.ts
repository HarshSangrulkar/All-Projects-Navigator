import Realm from 'realm';
import {Student} from './realmConfigStudent';
import {ToDo} from './realmConfigToDo';

// Function to open Realm asynchronously
const openRealm = async () => {
  return await Realm.open({
    schema: [Student, ToDo],
  });
};

export default openRealm;
