const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  let db = client.db('ToDoApp');

  // db.collection('Todos').find({_id: new ObjectID('5c6dccd2ad549d0dee4d39cc'
  // )}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>  {
  //   console.log("Unable to fetch todos");
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>  {
  //   console.log("Unable to fetch todos");
  // });

  db.collection('Users').find({name: 'Jimmy Johns', age: 19}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>  {
    console.log("Unable to fetch todos");
  });

  client.close();
});