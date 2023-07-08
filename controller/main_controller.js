require("dotenv").config();
const { google } = require("googleapis");

// requring helper functions
const gmail_auth = require("../helper/gmail_auth");
const createLabel = require("../helper/createLabel");
const sendingReplies = require("../helper/sendingReplies");

exports.main = async (req, res) => {
  try {
    const auth = await gmail_auth();

    // getting the gmail-id of the client
    const gmailId = google.gmail({ version: "v1", auth });

    // getting all the labels available on the receieved gmail id
    // const response = await gmailId.users.labels.list({
    //   userId: "me",
    // });

    // create a label id
    const labelId = await createLabel(auth, gmailId);

    setInterval(() => {
      sendingReplies(auth, gmailId, labelId);
    }, Math.floor(Math.random() * (120 - 45 + 1) + 45) * 1000);

    res.json({ message: "Successfully Subscribed to our service" });
  } catch (error) {
    console.log(error);
  }
};
