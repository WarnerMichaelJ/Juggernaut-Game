export default class Phrases {
  constructor() {
    this.sentences = ["yeah it's the juggernaut!", "slow motion for me", "I miss NBA Jam",
    "I like it like that", "smash that wall", "my neck's wider than a pillow", "I can't turn my neck",
    "type this type this", "no one asks, hey how's the juggernaut?", "smash smash smash", 
    "you think this is a game?", "was I in deadpool 2", 
    "yeah it's the juggernaut, bricks!", "I'm a dumb guy, my world view is limited", 
    "this road never ends amirite", "this is a long street", 
    "why does this road have walls", "most intense jog ever", "damn I hate cardio",
    "damn helmet no peripheral vision", "I don't remember why I hate walls so much"];

    this.successfulSentences = ["GuEsS sMaShInG's BaCk oN tHe MeNu bOyS!", 
      "YOU'RE A TYPING BEAST", "How are you so good at this =O", 
      "whoa you type really fast!", "Teach me your typing ways", "READING IS FUN", "LoOk aT yOu gO!!", 
      "I could type too if my fingers weren't so MEATY", "UGGHHHH I LIKE IT LIKE THAT, SLOW MOTION FO ME~~" ];
  }

  samplePositivity() {
    return this.successfulSentences[Math.floor(Math.random() * this.successfulSentences.length)];
  }

  sample() {
    return this.sentences[Math.floor(Math.random() * this.sentences.length)];
  }
  
}