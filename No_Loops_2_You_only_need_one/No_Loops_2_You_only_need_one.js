// Kata: https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

/* Description:  *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check
whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array
 contains the value, false if not. With strings you will need to account for
 case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

<a> https://www.codewars.com/kata/no-loops-1-small-enough</a>

<a> https://www.codewars.com/kata/no-loops-3-copy-within</a>*/

// Solution:
function check(a,x){return a.some(z=>z==x)};
