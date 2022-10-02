import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("distritoSelect.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS distritoSelect (
            id INTEGER PRIMARY KEY NOT NULL,
            distrito INT NOT NULL,
            region INT NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
      });
    });
  
    return promise;
}

export const insertDistrito = (
    distrito,
    region
  ) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO distritoSelect (distrito, region) VALUES (?, ?)`,
          [distrito, region],
          (tx, results) => {console.log(distrito, region)}
        );
      }) 
    } catch (error) {
      console.log(error);
}
}
