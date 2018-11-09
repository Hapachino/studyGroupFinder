const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// dummy data
const data = require('./dummyData');

// search study groups route
app.get('/search', (req, res) => {
  // mysql return all from study groups
  res.send(data.studyGroups);
});

// group details route
app.get('/group/:group_id', (req, res) => {
  // mysql return all details of group_id
  const id = req.params.group_id;
  const groups = data.studyGroups;
  const group = groups.find(group => id === group.id);

  res.send(group);
});

// joined groups route
app.get('/joined/:userId', (req, res) => {
  const userId = req.params.userId;
  const groupIds = data.studyGroupMembers.filter(member => userId === member.user_id)
                                         .map(member => member.studyGroup_id);
  const groups = data.studyGroups.filter(group => groupIds.includes(group.id));

  res.send(groups);
});

// created groups route
app.get('/created/:userId', (req, res) => {
  const userId = req.params.userId;
  const groups = data.studyGroups.filter(group => group.userId === userId);

  res.send(groups);
})

// profile route
app.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const profile = data.users.filter(user => userId === user.id)[0];

  res.send(profile);
});

// create user route

// create study group route

// edit user route

// edit study group route




// blue sky routes:

// delete study group route

// delete user route



// listen on port number
app.listen(3000, () => {
  console.log('server is running...');
});