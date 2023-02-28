import {openDataBase} from 'react-native-sqlite-storeage';

export const getDBConnection = async () => {
    return openDataBase({name: 'EasyMac.db', location: 'default'});

};


export const createTable = async (db) => {

    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

    await db.executeSql(query);
}