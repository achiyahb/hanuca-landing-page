import firebaseInstance from './config';
import database from 'firebase/database'

const db = firebaseInstance.firebase.database();

export default {
    writeData,
    deleteData,
    updateData,
    getData
}


// the good one
function getData(path) {
    return db.ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function updateData(data, path){
    db.ref(path).set(data)
        .then(res => {
            return res;
        })
}

async function writeData(data, path) {
    let res = await db.ref(path).push(data)
    await console.log(res)
    return res
}

function deleteData(path) {
    db.ref(path).set(null);
}



