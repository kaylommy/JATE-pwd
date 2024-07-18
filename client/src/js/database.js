import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>  {
  content = getDb().value ? getDb().value : "" + content  
const JATEdb = await openDB('jate', 1);

const tx = JATEdb.transaction('jate', 'readwrite');

const store = tx.objectStore('jate');

const request = store.put({ id: 1, content });

const result = await request;
console.log('Data saved to the database', result);
};
;
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>  {
  console.log('GET from the database');

const JATEDb = await openDB('jate', 1);

const tx = JATEDb.transaction('jate', 'readonly');

const store = tx.objectStore('jate');

const request = store.getAll();

const result = await request;
console.log('result.value', result);
return result;
};

initdb();
