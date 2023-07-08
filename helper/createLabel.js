require("dotenv").config();

const createLabel = async (auth, gmailId) => {
  try {
    const response = await gmailId.users.labels.create({
      userId: "me",
      requestBody: {
        name: process.env.LABEL_NAME,
        labelListVisibility: "labelShow",
        messageListVisibility: "show",
      },
    });
    return response.data.id;
  } catch (error) {
    //label is already present
    if (error.code === 409) {
      const response = await gmailId.users.labels.list({
        userId: "me",
      });

      const label = response.data.labels.find((label) => label.name === process.env.LABEL_NAME);
      return label.id;
    } else {
      throw error;
    }
  }
};

module.exports = createLabel;
