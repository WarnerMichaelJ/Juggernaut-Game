export default class Phrases {
  constructor() {
    this.sentences = ["yeah it's the juggernaut!", "slow motion for me", 
    "I like it like that", "smash that wall", "wow you type so fast", 
    "type this type this", "no one asks how's the juggernaut?", "smash smash smash", 
    "you think this is easy?", "was I in deadpool 2", 
    "yeah it's the juggernaut, bricks!", "I'm a dumb guy, my world view is limited", 
    "I got my helmet back!", "this is a long street", 
    "why does this road have walls", "most intense jog ever", "damn I hate cardio"];
  }

  sample() {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }
  
}