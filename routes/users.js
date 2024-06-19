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
    res.status(200).send({
      message: `회원가입이 완료되었습니다.`,
      code: "success",
      id: userRecord.uid,
    });
  } catch (error) {
    res.status(400).send({
      message: "[error] " + error.message,
      code: "error",
    });
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

router.get("/delete/:id", async (req, res) => {
  const firestore = admin.firestore();
  try {
    await firestore.collection("User").doc(req.params.id).delete();
    res.send(`Successfully deleted document: ${req.params.id}`);
  } catch (error) {
    res.status(400).send(`Error deleting document: ${error.message}`);
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
    const snapshot = await firestore
      .collection("User")
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
      .collection("User")
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
