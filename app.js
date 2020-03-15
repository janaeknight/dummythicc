// RANDOM QUOTE GENERATOR

var possibleFortunes = [
    "Your trouble will pass away soon.", "Be unconventional, even visionary.", "Don't count your chickens before they hatch.", "Anyone can hold the helm when the sea is calm.", "The mistakes of your past form the roots of the wisdom of you future.", "Dream of tomorrow, live in the now.", "You can't overcome fear by thinking about it.", "Life, death, balance.", "Some get wiser with age, some get richer, but everybody gets older.", "If you don't know, listen to those who do.", "Don't look a gift horse in the mouth.", "The fortune you seek is in another cookie.", "Sane is boring.", "Congratulations!", "You can have great success being a total idiot.", "Look for a needle in your haystack.", "When nothing goes right, go left.", "The answer is: A traffic light.", "Each day provides its own gifts.", "Questions travel far.", "Three can keep a secret if you get rid of two.", "It’s just a bad day, not a bad life.", "Don't get in cars with strangers.", "Feel the fear and do it anyway."
]

function randomQuote() {
    var todayFortune = possibleFortunes[Math.floor(Math.random()*possibleFortunes.length)];
}

randomQuote();