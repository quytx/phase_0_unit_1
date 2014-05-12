// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Quy Tran
//  2. Max Diener


// 1. "YOU SIGNED... WHO?!"
// Leo Dicaprio
// Rafael Nadal








// 2. "Here they Come!"
var client0 = {
    name: "Leo",
    age: "39",
    quote: "I'm not the kind of person who tries to be cool or trendy, I'm definitely an individual."
}

var client1 = {
    name: "Nadal",
    age: "27",
    quote: "I  always work with a goal - and the goal is to improve as a player and a person. That, finally, is the most important thing of all."
}

// 3. "TIME IS MONEY!"
function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
      console.log(quote);
    }
}

//YOUR CODE HERE!
var client2 = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var client3 = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var client4 = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"
var allClients = [ client0, client1, client2, client3, client4 ];
for(var i = 0; i < allClients.length; i++) {
  console.log('Name: ' + allClients[i].name + ', Age: ' + allClients[i].age + ', Quote: ' + allClients[i].quote);
}


// ** BONUS **
client2.showQuote();
client3.showQuote();
client4.showQuote();

//  Your Reflection:
