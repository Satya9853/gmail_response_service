const getUnrepliedMails = require("./getUnrepliedMails");

const sendingReplies = async (auth, gmailId, labelId) => {
  const mails = await getUnrepliedMails(gmailId);

  // console.log(mails);

  // checking whether or not there are any ureplied mails
  if (mails && mails.length > 0) {
    for (const mail of mails) {
      // each mail contains its id and thread id.
      // Now we will use the id to obtain information about the mail
      const mailData = await gmailId.users.messages.get({
        auth,
        userId: "me",
        id: mail.id,
      });

      const data = mailData.data;
      const hasReplied = data.payload.headers.some((header) => header.name === "In-Reply-To");

      if (!hasReplied) {
        // creating the reply message
        const reciever_mail = data.payload.headers.find((header) => header.name === "From").value;
        const subject = data.payload.headers.find((header) => header.name === "Subject").value;

        const replyMessage = {
          userId: "me",
          resource: {
            raw: Buffer.from(
              `To: ${reciever_mail}\r\n` +
                `Subject: Re: ${subject}\r\n` +
                `Content-Type: text/plain; charsets="UTF-8"\r\n` +
                `content-Transfer-Encoding: 7bit\r\n\r\n` +
                `Thank you for your email. I'm currently on vacation with my family, I'll communicate with you after the vacation\r\n\n`
            ).toString("base64"),
          },
        };
        await gmailId.users.messages.send(replyMessage);
      }

      // Adding the email into the label
      await gmailId.users.messages.modify({
        auth,
        userId: "me",
        id: mail.id,
        resource: {
          addLabelIds: [labelId],
          removeLabelIds: ["INBOX"],
        },
      });
    }
  }
};

module.exports = sendingReplies;
