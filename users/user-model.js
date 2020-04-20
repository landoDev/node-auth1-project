const db = require('../data/db-config')

module.exports = {
    find,
    findBy,
    add
};

function find(){
    return db('users');
};

function findBy(param){
    return db('users').where(param);
};

async function add(user){
    const [id] = await db('users').insert(user, 'id');

    return findById(id);
}