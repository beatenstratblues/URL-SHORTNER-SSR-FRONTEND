const sessionIdToUser = new Map();

function setUid(sessionId,user) {
  sessionIdToUser.set(sessionId,user);
}

function GetUser(sessionId) {
  return sessionIdToUser.get(sessionId);
}

module.exports = { setUid, GetUser };
