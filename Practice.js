// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

function addPrefix(prefix) {
  return function(name) {
    return `${prefix} ${name}`;
  }
}
const prefix = addPrefix("Sir");
console.log(prefix("Smith"));