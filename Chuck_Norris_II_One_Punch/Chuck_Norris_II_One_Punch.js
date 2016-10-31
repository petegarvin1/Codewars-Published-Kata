// Challenge: https://www.codewars.com/kata/57057a035eef1f7e790009ef

/* Description <img src=https://cdn.meme.am/instances/21245401.jpg>

Chuck Norris is the world's toughest man - he once kicked a horse in the chin.
Its descendants today are known as giraffes.

Like his punches, Chuck NEVER needs more than one line of code.

Your task, to please Chuck, is to create a function that chains 4 methods on
 a SINGLE LINE! You can pass with multiple lines, but CHuck will pity you. Go
 big or go home. ONE LINE!!

Chuck expects his list of favourite items to be split, sorted, joined AND have
any occurrences of the letters 'e' and 'a' removed - why, you ask? Well Nunchuks
 hasn't got the letters 'a' or 'e' in it has it?? Chuck says shut your mouth...
 and don't forget the capitals.

If anyone dares to provide Chuck with an empty string, an integer or an array,
just return a description of their face once Chuck finds out: 'Broken!'

Go, go go!!!*/

// Solution:
function onePunch(items){if (items !== items.toString() || items.length < 1) return 'Broken!'; return items.split(" ").sort().join(" ").replace(/[aeAE]/g, "" );}
