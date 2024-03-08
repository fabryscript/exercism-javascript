// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardTypes = 0;
  stack.forEach((_, i) => _ === card && cardTypes++)
  return cardTypes
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let odd = 0;
  let even = 0
  for (let card of stack) {
    card % 2 === 0 ? even++ : odd++
  }
  return type === true ? even : odd
}
