const split = (array) => {
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const mid = Math.floor(array.length / 2);
  const leftHalf = split(array.slice(0, mid)); // Left half of the array
  const rightHalf = split(array.slice(mid)); // Right half of the array

  // Recursively merge the two sorted halves
  return sort(leftHalf, rightHalf);
};

const sort = (left, right) => {
  // edge cases where arrays are uneven, taking care of scenarios where one side would be an empty array
  if (left.length === 0) {
    return right;
  }
  if (right.length === 0) {
    return left;
  }

  if (left[0] < right[0]) {
    // remove smaller left value from left array
    // keep iterating till left is no longer smaller than right
    return [left[0], ...sort(left.slice(1), right)];
  } else {
    // remove smaller right value from right array
    // keep iterating till right is no longer smaller than left
    return [right[0], ...sort(left, right.slice(1))];
  }
};

const array = [3, 2, 1, 13, 8, 5, 0, 1, 11];

console.log(split(array));
