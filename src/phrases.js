export default class Phrases {
  constructor() {
    this.sentences = ["yeah it's the juggernaut!", "slow motion for me", 
    "I like it like that", "smash that wall", 
    "type this type this", "no one asks how's the juggernaut?", "smash smash smash", 
    "you think this is easy?", "was I in deadpool 2", 
    "yeah it's the juggernaut, bricks!", "I'm a dumb guy, my world view is limited", 
    "I got my helmet back!", "this is a long street", 
    "why does this road have walls", "most intense jog ever", "damn I hate cardio"];

    this.successfulSentences = ["GuEsS sMaShInG's BaCk oN tHe MeNu bOyS!", 
      "YOU'RE A TYPING BEAST", "How are you so good at this =O", 
      "whoa you type really fast!", "Teach me your typing ways" ];
  }

  samplePositivity() {
    return this.successfulSentences[Math.floor(Math.random() * this.successfulSentences.length)];
  }

  sample() {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }
  
}