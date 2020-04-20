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
    'Either give me more wine or leave me alone.<br>Rumi, circa 1200s',
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
    '[I]t is the wine that leads me on, the wild wine, that sets the wisest man to sing at the top of his lungs, laugh like a fool \- it drives the man to dancing... it even tempts him to blurt out stories better never told.<br>Homer, The Odyssey',
    'As I ate the oysters with their strong taste of the sea and their faint metallic taste that the cold white wine washed away, leaving only the sea taste and the succulent texture, and as I drank their cold liquid from each shell and washed it down with the crisp taste of the wine, I lost the empty feeling and began to be happy and to make plans.<br>Ernest Hemingway, A Moveable Feast',
    'I pray you, do not fall in love with me, for I am falser than vows made in wine.<br>William Shakespeare, As You Like It',
    'I love everything that is old; old friends, old times, old manners, old books, old wines.<br>Oliver Goldsmith, The Vicar of Wakefield',
    'Age appears best in four things: old wood to burn, old wine to drink, old friends to trust and old authors to read.<br>Francis Bacon',
    'Wine enters through the mouth, Love,the eyes.  I raise the glass to my mouth, I look at you, I sigh.<br>William Butler Yeats',
    'There are thousands of wines that can take over our minds.  Don\'t think all ecstasies are the same!<br>Jalaluddin Rumi',
    'Wine can of their wits the wise beguile, Make the sage frolic, and the serious smile.<br>Homer',
    'Wine makes all things possible.<br>George R.R.Martin, The Mystery Knight',
    'Wine makes every meal an occasion, every table more elegant, every day more civilized.<br>Andre Simon',
    'A bottle of wine begs to be shared; I have never met a miserly wine lover.<br>Clifton Fadiman',
    '\"Never cook with a wine you wouldn\'t drink,\" he said.  Though I guess that presupposes that there is a wine I wouldn\'t drink.<br>Lev Grossman, The Magicians',
    'The first kiss and the first glass of wine are the best.<br>Marty Rubin',
    'I know I have a strong will because I have quit drinking wine a thousand times, and I will not stop but keep trying, bottle after bottle., TOSAYLIB.COM',
    'Better is old wine than new, and old friends likewise.– Charles Kingsley',
    'A glass of wine keeps the doctor away; a bottle of wine would keep everyone away. I think I’ll have a bottle.',
    'Wine rejoices the heart of man and joy is the mother of all virtues.– Johann Wolfgang von Goethe',
    'Making good wine is a skill. Fine wine is an art. – Robert Mondavi',
    'Alcohol may be man’s worst enemy, but the bible says love your enemy. – Frank Sinatra',
    'An empty bottle of wine is better than a filled one. It shows achievement.',
    'I’ve stopped drinking, but only while I’m asleep. —George Best',
    'In wine there is wisdom, in beer there is Freedom, in water there is bacteria. – Benjamin Franklin',
    'I get really clumsy around wine, I seem to always spill the whole bottle down my throat.',
    'The best part of having visitors is opening a bottle, serving them a glass and then getting to finish it myself.',
    'When I read about the evils of drinking, I gave up reading. – Henny Youngman',
    'My doctor said I could take wine only on joyous occasions, and my other doctor said I should always make every day joyous. So that settles it.',
    'I know I’m drinking myself to a slow death, but then I’m in no hurry. – Robert Benchley',
    'I drink to make other people more interesting. – Ernest Hemmingway',
    'When you are stressed take wine, if you are still stressed take more wine.',
    'I may be drunk, Miss, but in the morning I will be sober and you will still be ugly. – Winston Churchill',
    'The discovery of a good wine is increasingly better for mankind than the discovery of a new star. – Leonardo Da Vinci',
    'I am feeling really heroic today… I need to go rescue some wine trapped in their bottle.',
    'A bottle of wine contains more philosophy than all the books in the world. – Louis Pasteur',
    'Quickly, bring me a beaker of wine, so that I may wet my mind and say something clever. – Aristophanes',
    'It’s really not my fault I drank wine all day. The bottles keep calling my name. They are attracted to me.',
    'My most important rule in life : don’t drink wine when you are sleeping'
]

function displayQuote() {
    var quoteIndex = Math.floor(Math.random() * (wineQuotes.length));
       document.getElementById("randomQuote").innerHTML = wineQuotes[quoteIndex];
}
displayQuote();
function addWines() {
    document.getElementById("addWineForm").style.display = "block";
}
function addToCellar() {
    document.getElementById("addWineForm").submit;
    var e = document.getElementsByTagName('input');
    alert(e.length);
    for (i = 0; i < e.length; i++) {
        console.log(e[i].value);
    }    
}
function closeWindow() {
    document.getElementById("addWineForm").style.display = "none";
}