// const fb = require('express').Router();
// const { readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// // GET Route for retrieving all the feedback
// fb.get('/', (req, res) =>
//   readFromFile('./db/delete.json').then((data) => res.json(JSON.parse(data)))
// );

// // POST Route for submitting feedback
// fb.post('/', (req, res) => {
//   // Destructuring assignment for the items in req.body
//   const { email, feedbackType, feedback } = req.body;

//   // If all the required properties are present
//   if (email && feedbackType && feedback) {
//     // Variable for the object we will save
//     const newFeedback = {
//       email,
//       feedbackType,
//       feedback,
//       feedback_id: uuid(),
//     };

//     readAndAppend(newFeedback, './db/delete.json');

//     const response = {
//       status: 'success',
//       body: newDelete,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting delete');
//   }
// });

// module.exports = delete;