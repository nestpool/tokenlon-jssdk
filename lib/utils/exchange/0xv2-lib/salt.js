"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configured_bignumber_1 = require("@0x/utils/lib/src/configured_bignumber");
var MAX_DIGITS_IN_UNSIGNED_256_INT = 78;
/**
 * Generates a pseudo-random 256-bit salt.
 * The salt can be included in a 0x order, ensuring that the order generates a unique orderHash
 * and will not collide with other outstanding orders that are identical in all other parameters.
 * @return  A pseudo-random 256-bit number that can be used as a salt.
 */
function generatePseudoRandomSalt() {
    // BigNumber.random returns a pseudo-random number between 0 & 1 with a passed in number of decimal places.
    // Source: https://mikemcl.github.io/bignumber.js/#random
    var randomNumber = configured_bignumber_1.BigNumber.random(MAX_DIGITS_IN_UNSIGNED_256_INT);
    var factor = new configured_bignumber_1.BigNumber(10).pow(MAX_DIGITS_IN_UNSIGNED_256_INT - 1);
    var salt = randomNumber.times(factor).round();
    return salt;
}
exports.generatePseudoRandomSalt = generatePseudoRandomSalt;
//# sourceMappingURL=salt.js.map