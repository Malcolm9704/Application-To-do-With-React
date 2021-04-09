import update from 'immutability-helper';

export function getAll() {
    return [
        {
            id: 1,
            text: 'Tarea 1',
            completed: false
        },
        {
            id: 2,
            text: 'Tarea 2',
            completed: false
        },
        {
            id: 3,
            text: 'Tarea 3',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
