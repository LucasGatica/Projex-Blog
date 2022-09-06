var admin = require("firebase-admin");

if (!admin.apps.length) {
  
}

module.exports = admin.firestore();
