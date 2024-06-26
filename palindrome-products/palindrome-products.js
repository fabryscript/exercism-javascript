export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }

    let smallest = {
      value: null,
      factors: [],
    };

    let largest = {
      value: null,
      factors: [],
    };

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          if (smallest.value === null || product < smallest.value) {
            smallest = { value: product, factors: [[i, j]] };
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }
          if (largest.value === null || product > largest.value) {
            largest = { value: product, factors: [[i, j]] };
          } else if (product === largest.value) {
            largest.factors.push([i, j]);
          }
        }
      }
    }

    return { smallest, largest };
  }
}

function isPalindrome(num) {
  const strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
}
