const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  getAllPeople() {
    // Return all people in the queue.
    return people.all();
  },

  enqueuePeople(person) {
    // Add a person to the queue.
    return people.enqueue(person);
  },

  dequeuePeople() {
    // Remove a person from the queue.
    return people.dequeue();
  }
};
