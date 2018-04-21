const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5adab462bc591a278695a62f';
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not found');
// }
//
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id : id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


// var id = '5adba1def5de935d5782c33a';
User.findById('5adba1def5de935d5782c33a').then((user) => {
  if(!user){
    return console.log('ID not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
