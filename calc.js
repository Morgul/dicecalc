//----------------------------------------------------------------------------------------------------------------------
// Brief description for calc.js module.
//
// @module calc.js
//----------------------------------------------------------------------------------------------------------------------

var _ = require('lodash');
var package = require('./package');
var enumerator = require('./lib/enumerator');
var dice_table = require('./lib/dice_table');

//----------------------------------------------------------------------------------------------------------------------

console.log('EotE Dice Probability Calculator, v%s\n', package.version);

//----------------------------------------------------------------------------------------------------------------------

var results = enumerator.enumerateDicePool([
    'proficiency',
    'proficiency',
    'difficulty',
    'difficulty',
    'difficulty',
    'difficulty'
]);

//----------------------------------------------------------------------------------------------------------------------

var outcomes = _.map(results, dice_table.Outcome);
//console.log(outcomes);

var filters = [
    {title: '1 success', filter: function(outcome) {return outcome.netSuccesses == 1;}},
    {title: '2 successes', filter: function(outcome) {return outcome.netSuccesses == 2;}},
    {title: '3 successes', filter: function(outcome) {return outcome.netSuccesses == 3;}},
    {title: '4 successes', filter: function(outcome) {return outcome.netSuccesses == 4;}},
    {title: '5 successes', filter: function(outcome) {return outcome.netSuccesses == 5;}},
    {title: '5 successes', filter: function(outcome) {return outcome.netSuccesses == 5;}},
    {title: '6 successes', filter: function(outcome) {return outcome.netSuccesses == 6;}},
    {title: '7 successes', filter: function(outcome) {return outcome.netSuccesses == 7;}},
    {title: '8 successes', filter: function(outcome) {return outcome.netSuccesses == 8;}},
    {title: '======================================='},
    {title: 'Any successes', filter: function(outcome) {return outcome.netSuccesses > 0;}},
    {title: ''},
    {title: '1 advantage', filter: function(outcome) {return outcome.netAdvantages == 1;}},
    {title: '2 advantages', filter: function(outcome) {return outcome.netAdvantages == 2;}},
    {title: '3 advantages', filter: function(outcome) {return outcome.netAdvantages == 3;}},
    {title: '4 advantages', filter: function(outcome) {return outcome.netAdvantages == 4;}},
    {title: '5 advantages', filter: function(outcome) {return outcome.netAdvantages == 5;}},
    {title: '6 advantages', filter: function(outcome) {return outcome.netAdvantages == 6;}},
    {title: '7 advantages', filter: function(outcome) {return outcome.netAdvantages == 7;}},
    {title: '8 advantages', filter: function(outcome) {return outcome.netAdvantages == 8;}},
    {title: '======================================='},
    {title: 'Any advantages', filter: function(outcome) {return outcome.netAdvantages > 0;}},
    {title: ''},
    {title: '1 failure', filter: function(outcome) {return outcome.netFailures == 1;}},
    {title: '2 failures', filter: function(outcome) {return outcome.netFailures == 2;}},
    {title: '3 failures', filter: function(outcome) {return outcome.netFailures == 3;}},
    {title: '4 failures', filter: function(outcome) {return outcome.netFailures == 4;}},
    {title: '5 failures', filter: function(outcome) {return outcome.netFailures == 5;}},
    {title: '5 failures', filter: function(outcome) {return outcome.netFailures == 5;}},
    {title: '6 failures', filter: function(outcome) {return outcome.netFailures == 6;}},
    {title: '7 failures', filter: function(outcome) {return outcome.netFailures == 7;}},
    {title: '8 failures', filter: function(outcome) {return outcome.netFailures == 8;}},
    {title: '======================================='},
    {title: 'Any failures', filter: function(outcome) {return outcome.netFailures > 0;}},
    {title: ''},
    {title: '1 threat', filter: function(outcome) {return outcome.netThreats == 1;}},
    {title: '2 threats', filter: function(outcome) {return outcome.netThreats == 2;}},
    {title: '3 threats', filter: function(outcome) {return outcome.netThreats == 3;}},
    {title: '4 threats', filter: function(outcome) {return outcome.netThreats == 4;}},
    {title: '5 threats', filter: function(outcome) {return outcome.netThreats == 5;}},
    {title: '6 threats', filter: function(outcome) {return outcome.netThreats == 6;}},
    {title: '7 threats', filter: function(outcome) {return outcome.netThreats == 7;}},
    {title: '8 threats', filter: function(outcome) {return outcome.netThreats == 8;}},
    {title: '======================================='},
    {title: 'Any threats', filter: function(outcome) {return outcome.netThreats > 0;}},
    {title: ''},
    {title: '1 triumph', filter: function(outcome) {return outcome.triumphs == 1;}},
    {title: '2 triumphs', filter: function(outcome) {return outcome.triumphs == 2;}},
    {title: '3 triumphs', filter: function(outcome) {return outcome.triumphs == 3;}},
    {title: '4 triumphs', filter: function(outcome) {return outcome.triumphs == 4;}},
    {title: '5 triumphs', filter: function(outcome) {return outcome.triumphs == 5;}},
    {title: '6 triumphs', filter: function(outcome) {return outcome.triumphs == 6;}},
    {title: '7 triumphs', filter: function(outcome) {return outcome.triumphs == 7;}},
    {title: '8 triumphs', filter: function(outcome) {return outcome.triumphs == 8;}},
    {title: '======================================='},
    {title: 'Any triumphs', filter: function(outcome) {return outcome.triumphs > 0;}},
    {title: ''},
    {title: '1 despair', filter: function(outcome) {return outcome.despairs == 1;}},
    {title: '2 despairs', filter: function(outcome) {return outcome.despairs == 2;}},
    {title: '3 despairs', filter: function(outcome) {return outcome.despairs == 3;}},
    {title: '4 despairs', filter: function(outcome) {return outcome.despairs == 4;}},
    {title: '5 despairs', filter: function(outcome) {return outcome.despairs == 5;}},
    {title: '6 despairs', filter: function(outcome) {return outcome.despairs == 6;}},
    {title: '7 despairs', filter: function(outcome) {return outcome.despairs == 7;}},
    {title: '8 despairs', filter: function(outcome) {return outcome.despairs == 8;}},
    {title: '======================================='},
    {title: 'Any despairs', filter: function(outcome) {return outcome.despairs > 0;}},
];

_.forEach(filters, function(f)
{
    if(!f.filter)
    {
        return console.log(f.title);
    } // end if

    var percent = ((_.filter(outcomes, f.filter).length / outcomes.length) * 100).toFixed(2);

    if(percent || f.title.indexOf('Any') !== -1)
    {
        return console.log('%s: %s%%', f.title, percent);
    } // end if
});

//----------------------------------------------------------------------------------------------------------------------