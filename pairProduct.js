// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  // todo
  // return me
  let returnMe;
  // iterate numbers
  numbers.forEach((num1, i, nums) => {
    nums.slice(i + 1).forEach((num2, j) => {
      if ((num1 * num2) === targetProduct) {
        returnMe = [i, (i + j + 1)];
      }
    });
  });
    // iterate the rest of numbers
      // if nums product = target
        // set return to indices
  // return
  return returnMe;
};