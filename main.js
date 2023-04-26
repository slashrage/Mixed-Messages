let joke = [
    "What's the best thing about Switzerland?", 
    "I invented a new word!",
    "Did you hear about the mathematician who's afraid of negative numbers?",
    "Why do we tell actors to 'break a leg?'",
    "Helvetica and Times New Roman walk into a bar. ",
    "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, 'What's the word on the street?'",
    "Knock! Knock! Who's there? Control Freak. ",
    "Hear about the new restaurant called Karma? ",
    "A woman in labor suddenly shouted, 'Shouldn't! Wouldn't! Couldn't! Didn't! Can't!' "];

let response = [
    " I don't know, but the flag is a big plus.",
    "Plagiarism!",
    "He'll stop at nothing to avoid them.",
    "Because every play has a cast.",
    "'Get out of here!' shouts the bartender. 'We don't serve your type.'",
    " Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house.",
    "Con… OK, now you say, “Control Freak who?”",
    "There's no menu: You get what you deserve.",
    "'Don't worry,' said the doc. 'Those are just contractions.'"
    ];

let mixedMessages = () => {
    return joke[Math.floor(Math.random() * 9)] + response[Math.floor(Math.random() * 9)];
}

console.log(mixedMessages());