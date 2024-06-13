"use strict";
var express = require("express");
var router = express.Router();

const admin = require("firebase-admin");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });
    res.status(201).send(`Successfully created new user: ${userRecord.uid}`);
  } catch (error) {
    res.status(400).send(`Error creating new user: ${error.message}`);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const userRecord = await admin
      .auth()
      .deleteUser(req.params.id)
      .then(async () => {
        try {
          await firestore.collection("User").doc(req.params.id).delete();
        } catch (error) {
          res.status(400).send(`Error deleting document: ${error.message}`);
        }
      });
    res.send(`Successfully deleted user: ${userRecord.uid}`);
  } catch (error) {
    res.status(400).send(`Error deleting user: ${error.message}`);
  }
});

router.post("/add/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const data = req.body;
    data.createdAt = new Date();
    const docRef = await firestore
      .collection("User")
      .doc(req.params.id)
      .set(data);

    res.send({ ...data, id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/list", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const snapshot = await firestore.collection("User").get();
    const data = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/get/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const snapshot = await firestore
      .collection("User")
      .doc(req.params.id)
      .get();
    const data = snapshot.data();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/update/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    const data = req.body;
    data.updatedAt = new Date();
    await firestore
      .collection("User")
      .doc(req.params.id)
      .update(data)
      .then(() => {
        res.send("Successfully updated");
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
