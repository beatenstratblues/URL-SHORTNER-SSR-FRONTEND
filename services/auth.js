const sessionIdToUser = new Map();

function setUid(username, sessionId) {
  sessionIdToUser.set(username, sessionId);
}

function GetUid(username) {
  sessionIdToUser.get(username);
}

module.exports = { setUid, GetUid };
