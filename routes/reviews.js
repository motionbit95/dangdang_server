"use strict";
var express = require("express");
var router = express.Router();

const admin = require("firebase-admin");

const collectionName = "Review";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const data = req.body;
    data.createdAt = new Date();
    const docRef = await firestore.collection(collectionName).add(data);

    res.send({ ...data, id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/list", async (req, res) => {
  const firestore = admin.firestore();
  // const orderBy = req.params.orderBy;
  try {
    const snapshot = await firestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .get();
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/get/:id", async (req, res) => {
  // console.log(req.params.id);
  const firestore = admin.firestore();
  try {
    const snapshot = await firestore
      .collection(collectionName)
      .doc(req.params.id)
      .get();
    const data = snapshot.data();
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).send({ code: "error", message: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const data = req.body;
    data.updatedAt = new Date();
    await firestore
      .collection(collectionName)
      .doc(req.params.id)
      .update(data)
      .then(() => {
        res.send("Successfully updated");
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/delete/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    await firestore.collection(collectionName).doc(req.params.id).delete();
    res.send(`Successfully deleted document: ${req.params.id}`);
  } catch (error) {
    res.status(400).send(`Error deleting document: ${error.message}`);
  }
});

router.post("/search", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const { conditions } = req.body;

    let query = firestore.collection(collectionName);

    // console.log(conditions);

    conditions.forEach((condition) => {
      query = query.where(condition.field, condition.operator, condition.value);
    });

    const snapshot = await query.get();
    if (snapshot.empty) {
      return res.status(404).send("No matching documents.");
    }

    let results = [];
    snapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error searching documents:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
