// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

const paintColor = function(name) {
  const obj = {
    paints: function(color) {
      return `${name} paints ${color}!`
    }
  }
  return obj;
}

const painter1 = paintColor("Bob");
console.log(painter1.paints("green"));

