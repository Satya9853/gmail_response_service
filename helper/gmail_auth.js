require("dotenv").config();
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const scopes = [
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/gmail.labels",
  "https://mail.google.com/",
];

const gmail_auth = async () => {
  try {
    const auth = await authenticate({
      keyfilePath: path.join(__dirname, process.env.CREDENTIALS_PATH),
      scopes,
    });

    return auth;
  } catch (error) {
    console.log(error);
  }
};

module.exports = gmail_auth;
