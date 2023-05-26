let admin = require("firebase-admin")

let serviceAccount = require("../config/minga-6b107-firebase-adminsdk-6tdzp-5f76c9e846.json")

let BUCKET = "minga-6b107.appspot.com"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket:BUCKET,
});

const bucket = admin.storage().bucket()

const uploadImage = async (req, res, next) => {

  console.log(req.file)
    if (!req.file) return next();

    const photo = req.file
    const nameFile = Date.now() + "." + photo.originalname.split('.').pop();

    const file = bucket.file(nameFile);

    const stream = file.createWriteStream({
      metadata: {
        contentType:photo.mimetype
      }
    });

    stream.on("error", (e) => {
      console.error(e);
    });
    stream.on("finish", async () => {
      await file.makePublic();
      req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameFile}`;
      req.body.photo = req.file.firebaseUrl
      console.log(req.body.photo)
      next();
    });
    stream.end(photo.buffer);
  };

  module.exports = uploadImage;