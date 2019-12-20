import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const collection = new Mongo.Collection('foo');
Meteor.startup(() => {
  const id = collection.insert({}, (error, id) => {
    console.log('id from callback', id);
  });
  console.log('id from return', id);
});