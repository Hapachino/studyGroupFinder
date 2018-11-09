const users = [
  {
    "id": "0",
    "username": "johndoe2000",
    "googleId": "a1b2c3",
    "firstName": "john",
    "lastName": "doe",
    "email": "johndoe@gmail.com",
  },
  {
    "id": "3",
    "username": "janedoe",
    "googleId": "d5a5adkj",
    "firstName": "jane",
    "lastName": "doe",
    "email": "janedoe@gmail.com",
  },
  {
    "id": "19",
    "username": "ilovejs",
    "googleId": "ji3jaksd",
    "firstName": "james",
    "lastName": "king",
    "email": "kingjames@gmail.com",
  }
];

const studyGroups = [
  {
    "id": "0",
    "userId": "0",
    "name": "the awesome group",
    "location": {
      "name": "conference room 202",
      "longitude": "25.5",
      "latitude": "15",
    },
    "subject": "eng 101",
    "startTime": "2018-11-16T18:00:00.000Z",
    "endTime": "2018-11-16T19:00:00.000Z",
    "groupSize": "4",
    "currentGroupSize": "3",
    "description": "Preparing for upcoming exam.",
    "dateCreated": "2018-11-15T18:00:00.000Z",
  },
  {
    "id": "1",
    "userId": "0",
    "name": "the best group",
    "location": {
      "name": "starbucks",
      "longitude": "25.5",
      "latitude": "15",
    },
    "subject": "bio 101",
    "startTime": "2018-11-16T18:00:00.000Z",
    "endTime": "2018-11-16T19:00:00.000Z",
    "groupSize": "4",
    "currentGroupSize": "3",
    "description": "Preparing for upcoming exam.",
    "dateCreated": "2018-11-15T18:00:00.000Z",
  },
  {
    "id": "2",
    "userId": "3",
    "name": "the second best group",
    "location": {
      "name": "starbucks",
      "longitude": "25.5",
      "latitude": "15",
    },
    "subject": "econ 101",
    "startTime": "2018-11-16T18:00:00.000Z",
    "endTime": "2018-11-16T19:00:00.000Z",
    "groupSize": "15",
    "currentGroupSize": "3",
    "description": "Preparing for economic depression",
    "dateCreated": "2018-11-15T18:00:00.000Z",
  }
];

const studyGroupMembers = [
  {
    "id": "0",
    "studyGroup_id": "0",
    "user_id": "0",
  },
  {
    "id": "1",
    "studyGroup_id": "1",
    "user_id": "0",
  },
  {
    "id": "2",
    "studyGroup_id": "0",
    "user_id": "3",
  },
  {
    "id": "3",
    "studyGroup_id": "0",
    "user_id": "19",
  },
];

module.exports = { users, studyGroups, studyGroupMembers };
