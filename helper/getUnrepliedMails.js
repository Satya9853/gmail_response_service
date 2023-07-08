const getUnrepliedMails = async (gmailId) => {
  const response = await gmailId.users.messages.list({
    userId: "me",
    labelIds: ["INBOX"],
    q: "is:unread",
  });

  return response.data.messages || [];
};

module.exports = getUnrepliedMails;
