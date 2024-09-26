import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        };
        const updateContacts = [...existingContacts, ...newContacts];
        await writeContacts(updateContacts);
    } catch (err) {
        console.error('Помилка додавання даних до файлу:', err);
    }
};

generateContacts(5);
