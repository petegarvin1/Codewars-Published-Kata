// Kata: https://www.codewars.com/kata/5706be574f2c297a7b00060d

/* Description  <img src = https://pbs.twimg.com/media/CWTTemEWcAER1Rk.jpg>

What do action men wear? Isn't it obvious? 1) Shirt. 2) Cowboy Boots. 3)
ACTION PANTS!! Any self respecting action hero heading out to cause some
trouble knows the uniform... If you see a man striding towards you in this
outfit you should be very careful, he's probably dangerous.

Chucks action pants are extra special though. Due to his immense power, and
slightly odd fan base, Chuck's used action pants actually increase in value!!
That man can make money from anywhere!

Your task, to pass the kata and potentially, if Chuck reads this, to be sent a
 pair of old action pants by the man himself, is as follows:

```
Inputs:
Starting price: start (dollars)
Use: soil (percentage)
Age: age (years)
```
The action pants appreciate every year depending on the level to which they
are soiled (soil input):

```
Barely used: 10
Seen a few high kicks: 25
Blood stained: 30
Heavily soiled: 50
```
You will be given the relevant string as the soil input. Return a string
prefixed with $ and to 2 decimal places e.g.:

```
'$25.00'
```
The inputs should be Number, string, Number... if any of those aren't as
expected then return 'Chuck is bottomless!'. Same if the soil input is not
one of the specified statements.

Price that gusset!*/

// Solution:
function price(start, soil, age) {
  var ans = 0, count = 0;

  if (start != Number(start) || age != Number(age) || soil === Number(soil) || soil === [] || start === []) return 'Chuck is bottomless!';
  if (soil != 'Barely used' && soil != 'Seen a few high kicks' && soil != 'Blood stained' && soil != 'Heavily soiled') return 'Chuck is bottomless!';

  if (soil === 'Barely used') soil = 10;
  else if (soil === 'Seen a few high kicks') soil = 25;
  else if (soil === 'Blood stained') soil = 30;
  else if (soil === 'Heavily soiled') soil = 50;

  while (count < age) start = (start*(1+(soil/100))), count++;
  return '$'+ start.toFixed(2);
}
