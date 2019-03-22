var wineQuotes = [
    'Wine improves with age. The older I get, the better I like it.<br>Anonymous',
    'I cook with wine, sometimes I even add it to the food.<br>W.C. Fields, circa 1930s',
    'In victory, you deserve Champagne. In defeat you need it.<br>Napoleon Bonaparte',
    'Life is too short to drink bad wine.<br>Anonymous',
    'Give me wine to wash me clean of the weather\-stains of cares.<br>Ralph Waldo Emerson',
    'I can certainly see that you know your wine. Most of the guests who stay here wouldn\'t know the difference between Bordeaux and Claret.<br>Basil Fawlty, \'Fawlty Towers\'',
    'Age is just a number. It\'s totally irrelevant unless, of course, you happen to be a bottle of wine.<br>Joan Collins',
    'Men are like wine \- some turn to vinegar, but the best improve with age.<br>Pope John XXIII',
    'Penicillin cures, but wine makes people happy.<br>Alexander Fleming',
    'One should always be drunk. That\'s all that matters... But with what? With wine, with poetry, or with virtue, as you choose. But get drunk.<br>Charles Baudelaire, circa 1850s',
    'Wine is the most healthful and most hygienic of beverages.<br>Louis Pasteur',
    'It takes a lot of good beer to make great wine.<br> Brian O\'Donnell, Winemaker of Belle Pente, 2013',
    'Champagne is appropriate for breakfast, lunch or dinner.<br>Madeline Puckette, 2010',
    'Either give me more wine or leave me alone.<br>Rumi, circa 1200\'s',
    'The discovery of a wine is of greater moment than the discovery of a constellation. The universe is too full of stars.<br>Benjamin Franklin, circa 1700s',
    'She gets to keep the chalet and the Rolls, I want the Montrachet.<br>Forbes Magazine, May 6, 1996',
    'My only regret in life is that I didn\'t drink enough Champagne.<br>Robert Noecker',
    'Nothing makes the future look so rosy as to contemplate it through a glass of Chambertin.<br>Napoleon Bonaparte',
    'Accept what life offers you and try to drink from every cup. All wines should be tasted; some should only be sipped, but with others, drink the whole bottle.<br>Paulo Coelho',
    'A gourmet meal without a glass of wine just seems tragic to me somehow.<br>Kathy Mattea',
    'Anyone who tries to make you believe that he knows all about wines is obviously a fake.<br>Leon Adams, The Commonsense Book of Wine',
    'Wine is one of the most civilized things in the world and one of the most natural things of the world that has been brought to the greatest perfection, and it offers a greater range for enjoyment and appreciation than, possibly, any other purely sensory thing.<br> Ernest Hemingway',
    'I am not sure I trust you.<br>You can trust me with your life, My King.<br>But not with my wine, obviously. Give it back.<br> Megan Whalen Turner, The King of Attolia',
    'I should say upfront that I have never been in a cellar in my life. In fact, I can see no reason why anyone should ever go into a cellar unless there is wine involved.<br>Rachel Hawkins, Hex Hall',
    'If reassurances could dull pain, nobody would ever go to the trouble of pressing grapes.<br>Scott Lynch, The Lies of Locke Lamora',
    '[I]t is the wine that leads me on, the wild wine, that sets the wisest man to sing at the top of his lungs, laugh like a fool – it drives the man to dancing... it even tempts him to blurt out stories better never told.<br>Homer, The Odyssey'
]

function displayQuote() {
    var quoteIndex = Math.floor(Math.random() * (wineQuotes.length));
       document.getElementById("randomQuote").innerHTML = wineQuotes[quoteIndex];
}
displayQuote();