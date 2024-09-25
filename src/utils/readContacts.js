import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = data ? JSON.parse(data) : [];
        return contacts;

    } catch (err) {
        console.error('Помилка читання файлу:', err);
    }

};

