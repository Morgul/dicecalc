# Dice Percentage Calculator

Calculates the exact percentage of EotE dice rolls.

## Usage

Right now, you will need to edit `calc.js` to change the roll. For example, you might have this:

```javascript

var results = enumerator.enumerateDicePool([
    'proficiency',
    'proficiency',
    'difficulty',
    'difficulty',
    'difficulty',
    'difficulty'
]);

```

Simple run `node ./calc.js` and it will run for a bit, and then spit out output like this:

```
EotE Dice Probability Calculator, v0.1.0

1 success: 18.89%
2 successes: 10.33%
3 successes: 3.22%
4 successes: 0.42%
5 successes: 0.00%
5 successes: 0.00%
6 successes: 0.00%
7 successes: 0.00%
8 successes: 0.00%
=======================================
Any successes: 32.86%

1 advantage: 7.04%
2 advantages: 2.38%
3 advantages: 0.51%
4 advantages: 0.05%
5 advantages: 0.00%
6 advantages: 0.00%
7 advantages: 0.00%
8 advantages: 0.00%
=======================================
Any advantages: 9.99%

1 failure: 20.12%
2 failures: 13.40%
3 failures: 6.89%
4 failures: 2.76%
5 failures: 0.84%
5 failures: 0.84%
6 failures: 0.19%
7 failures: 0.03%
8 failures: 0.00%
=======================================
Any failures: 44.24%

1 threat: 21.36%
2 threats: 22.87%
3 threats: 17.55%
4 threats: 9.44%
5 threats: 3.43%
6 threats: 0.80%
7 threats: 0.11%
8 threats: 0.01%
=======================================
Any threats: 75.55%

1 triumph: 15.28%
2 triumphs: 0.69%
3 triumphs: 0.00%
4 triumphs: 0.00%
5 triumphs: 0.00%
6 triumphs: 0.00%
7 triumphs: 0.00%
8 triumphs: 0.00%
=======================================
Any triumphs: 15.97%

1 despair: 0.00%
2 despairs: 0.00%
3 despairs: 0.00%
4 despairs: 0.00%
5 despairs: 0.00%
6 despairs: 0.00%
7 despairs: 0.00%
8 despairs: 0.00%
=======================================
Any despairs: 0.00%
```

The 'Successes' and 'Failures' take Triumph and Despair into account.