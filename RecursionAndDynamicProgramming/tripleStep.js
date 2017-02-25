// A child isrunning up a staircase with n steps and hop either 1 step, 2 steps or 3 steps at a teime. Implement a method to count how many possible ways the child can run up the stairs

const tripleStep = (n) => {
  if(n <= 0) {
    return 0;
  }

  if(n === 1) {
    return 1; // Only one way (1)
  }

  if(n === 2) {
    return 2; // Two ways: (11) and (2)
  }

  if(n === 3) {
    return 4; // Four ways: (111) (12) (21) (3)
  }

  return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
};

console.log(tripleStep(4));
