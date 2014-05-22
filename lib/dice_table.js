//----------------------------------------------------------------------------------------------------------------------
// A table of all the possible outcomes for EotE dice. They are stored in an object, keyed by name. Each key holds an
// array of strings, where the strings are a single character representation of what's on the side:
//
// * '' - Blank
// * 'a' - Advantage
// * 't' - Threat
// * 's' - Success
// * 'f' - Failure
// * 'T' - Triumph
// * 'D' - Despair
// * 'd' - DarkSide
// * 'l' - LightSide
//
// @module dice_table.js
//----------------------------------------------------------------------------------------------------------------------

var _ = require('lodash');

//----------------------------------------------------------------------------------------------------------------------

var results = {
    '': 'blank',
    a: 'advantage',
    t: 'threat',
    s: 'success',
    f: 'failure',
    T: 'triumph',
    D: 'despair',
    d: 'darkside',
    l: 'lightside'
};

var diceTable = {
    boost:       ['',   '',   's',  'sa', 'aa', 'a'],
    setback:     ['',   '',   'f',  'f',  't',  't'],
    ability:     ['',   's',  's',  'ss', 'a',  'a',  'sa', 'aa'],
    difficulty:  ['',   'f',  'ff', 't',  't',  't',  'tt', 'ft'],
    proficiency: ['',   's',  's',  'ss', 'ss', 'a',  'sa', 'sa', 'sa', 'aa', 'aa', 'T'],
    challenge:   ['',   'f',  'f',  'ff', 'ff', 't',  't',  'ft', 'ft', 'tt', 'tt', 'D'],
    force:       ['d',  'd',  'd',  'd',  'd',  'd',  'dd', 'l',  'l',  'll', 'll', 'll']
}; // end diceTable

//----------------------------------------------------------------------------------------------------------------------

function Outcome(result)
{
    if(this.constructor != Outcome)
    {
        return new Outcome(result);
    } // end if

    var counted = _.countBy(result);

    var key = [];
    _.forEach(counted, function(count, outcome)
    {
        for(var i = 0; i < count; i++)
        {
            key.push(outcome);
        } // end for
    }); // end _.forEach iterator
    this.key = key.join('');

    _.forEach(results, function(result, tag)
    {
        switch(result)
        {
            case 'success':
                result = result + 'es';
                break;
            default:
                result = result + 's';
        } // end switch

        this[result] = counted[tag] || 0;
    }.bind(this));

    this.netSuccesses = this.successes + this.triumphs - this.failures - this.despairs;
    this.netFailures = Math.max(-this.netSuccesses, 0);
    this.netSuccesses = Math.max(this.netSuccesses, 0);

    this.netAdvantages = this.advantages - this.threats;
    this.netThreats = Math.max(-this.netAdvantages, 0);
    this.netAdvantages = Math.max(this.netAdvantages, 0);
} // end Outcome

Outcome.prototype.toString = function()
{
    return this.key;
}; // end Outcome#toString

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    dice: diceTable,
    results: results,
    Outcome: Outcome
};

//----------------------------------------------------------------------------------------------------------------------