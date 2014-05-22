//----------------------------------------------------------------------------------------------------------------------
// Given the requested dice, this module enumerates the possibilities.
//
// @module enumerator.js
//----------------------------------------------------------------------------------------------------------------------

var _ = require('lodash');
var dice = require('./dice_table').dice;

//----------------------------------------------------------------------------------------------------------------------

function enumerateDicePool(pool)
{
    // Assemble the pool
    var dicePool = [];
    _.each(pool, function(dieName)
    {
        dicePool.push(dice[dieName]);
    });

    // Enumerate the possible results
    var results = generateResults([], dicePool);

    function generateResults(prefix, remainingDice)
    {
        if(remainingDice.length === 0)
        {
            return [prefix.join('')];
        } // end if

        var results = [];
        var nextDie = remainingDice[0];
        remainingDice = remainingDice.slice(1);
        _.forEach(nextDie, function(side)
        {
            results = results.concat(generateResults(prefix.concat(side), remainingDice));
        });
        return results;
    } // end generateResults

    return results;
} // end enumerateDicePool

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    enumerateDicePool: enumerateDicePool
}; // end exports

//----------------------------------------------------------------------------------------------------------------------