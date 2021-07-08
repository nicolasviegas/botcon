const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
  console.log("I am ready!");
});

const userID = "Pescia";


client.on("message", (message) => {
  if (message.content.startsWith("mix")) {
    message.channel.send("no pinta pa, sale apex");
  }
  if (message.content.startsWith("cs")) {
    message.channel.send("no pinta pa, sale apex");
  }
  if (message.content.startsWith("@everyone")) {
    message.channel.send("para cornudo estaba durmiendo que menciona");
  }
});

 
client.on("message", function(message){
  if(message.author.username === userID) {
    message.channel.send("para pesciallo pesado");
  } 
});
 

const teamSize = 10; // Maximum amount of players in the PUG
const team1 = []; // Array to hold the members in the PUG
const team5 = [];
const team6 = [];


function shuffle(array){
  var currentIndex = array.length, randomIndex;

  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex--;

    [array[currentIndex],array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function checkteamSize(){
    if (team1.length == 10){
        //TODO Create the two teams
        console.log(`PUG IS FULL: ${team1.length}`);
    }else{
        console.log(`THE PUG IS NOT FULL: ${team1.length}`);
    }
}

function addUserPug(msg){
    // console.log(msg.author);
    // Add user to the team1 Array if the array is not full
    if (team1.length<=10){
        team1.push(msg.author.username);
    }else{ // Create a new pug and pass the user into the array
        console.log("TODO: Create a new pug when current array is filled");
        // createNewPug(msg.author.username);
    }
    msg.channel.send(`${msg.author} agregado a la lista de jugadore ${team1.length}/10.`); // Mention the user that they are added into the queue
    // msg.reply(' added to queue. ' + `${team1.length}/6`);
    msg.delete()
    .then(msg => console.log(team1))
    .catch(console.error);
}


client.on('message', msg => {

    if (msg.content === '!add'){
        // console.log(msg.author);
        checkteamSize();
        if(team1.length <= 10 ){
          addUserPug(msg);
        }else{
          msg.channel.send(`Ya somos 10 pa`);
        } 
    }
    if(msg.content == '!juegan'){
      if(team1.length == 1){
        msg.channel.send(`Por ahora juega: ${team1}`); 
      }else{
        msg.channel.send(`Por ahora juegan: ${team1}`); 
      }
    }
     if (msg.content == '!mix'){
        shuffle(team1); //aca se mezclan los 10 players
        msg.channel.send(`El equipo 1 es: ${team1.slice(0,4)}`);
        msg.channel.send(`El equipo 2 es: ${team1.slice(5,9)}`);
    }
});

client.login("SUPER SECRET TOKEN"); //reemplazar por token

