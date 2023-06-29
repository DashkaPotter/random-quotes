const btn = document.querySelector('.btn');
const par = document.querySelector('.quote');

const quotes = [" “In my eyes, refusing cake is an immoral act.” ― Jonathan Stroud, The Creeping Shadow",
                "“Ambition is all very well, my lad, but you must cloak it.” ― Jonathan Stroud, The Amulet of Samarkand",
                "“There is always a way out for those clever enough to find it.” ― Rick Riordan, The Titan's Curse",
                "“A woman. It's like a man only smarter and with bigger balls.” ― Sebastien de Castell, Spellslinger",
                "“I must learn to be content with being happier than I deserve.” ― Jane Austen, Pride and Prejudice",
                "“Freedom is an illusion. It always comes at a price.” ― Jonathan Stroud, The Bartimaeus Trilogy Boxed Set",
                "“It is our choices, Harry, that show what we truly are, far more than our abilities.” ― J.K. Rowling, Harry Potter and the Chamber of Secrets",
                "“Thinking is not always...comforting. It is always good, but not always comforting.” ― Robin Hobb, Royal Assassin",
                "“I solemnly swear that I am up to no good.” ― J.K. Rowling, Harry Potter and the Prisoner of Azkaban",
                "“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.” ― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
                "“Has anyone got any bandages? I've just split my sides laughing.” ― Jonathan Stroud, The Creeping Shadow",
                "“The fight isn't over until you win.” ― Robin Hobb, Royal Assassin",
                "“A warm feeling filled me. It was made of tea and biscuits and sudden gratitude.” ― Jonathan Stroud, The Creeping Shadow",
                "“Stop worrying about the past. The past is for ghosts. We've all done things that we regret. It's what's ahead of us that counts.” ― Jonathan Stroud",
                "“Making tea is a ritual that stops the world from falling in on you.” ― Jonathan Stroud",
                "“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.” ― Jane Austen, Pride and Prejudice",
                "“I'm sorry, Miraculous One, it's difficult to think of new titles for you when you ask short questions.” ― Jonathan Stroud, The Amulet of Samarkand",
                "“Numbing the pain for a while will make it worse when you finally feel it.” ― J.K. Rowling, Harry Potter and the Goblet of Fire",
                "“Just because you have the emotional range of a teaspoon doesn't mean we all have.” ― J.K. Rowling, Harry Potter and the Order of the Phoenix",
                "“We are all stars; we all fail and fall, no doubt. But from that failier should shine a new glow.” ― Marissa Meyer",
                "“With great power... comes great need to take a nap. Wake me up later.” ― Rick Riordan, The Last Olympian",
                "“I told you it was foolish. But feelings do not have to be wise. Feelings just are.” ― Robin Hobb, Royal Assassin",
                "“Some things may be learned from words on a page, but some skills are learned first by a man’s hands and heart, and later by his head.” ― Robin Hobb, Royal Assassin"
]

btn.addEventListener("click",() => {
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    par.textContent = randomQuotes;
})