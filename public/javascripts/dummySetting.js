const admin = require("firebase-admin");

async function addDummyData(collectionName, dummyDatas) {
  const firestore = admin.firestore();
  for (const dummy of dummyDatas) {
    await firestore.collection(collectionName).doc(dummy.id).set(dummy);
  }
}

module.exports = { addDummyData };
