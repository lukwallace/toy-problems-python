/* 
Given a list of people with both thier birth and death years, implement a method to compute the year wwith the most number of peolple alive. You may assume that all people were born between 1900 and 2000 (inclusive). If a person was alive during any of that year, they should be included in that year's count. For example, Person (birth = 1908, death = 1909) is included in the counts for both 1908 and 1909.
*/

/* Assuming we have a birth array and a death array, i.e. birth[i] and death[i] is birth and death years of a person */


// Brute force solution is to iterate through the years with keep a count of the number of people still alive
// O(NR) where R is the range 
let livingPeople = (births, deaths) => {
  const min = births.reduce((acc, birth) => acc > birth ? birth : acc);
  const max = deaths.reduce((acc, death) => acc < death ? death : acc);

  let currAlive = 0;
  let maxAlive = 0;
  console.log(min, max);
  for(let year = min; year <= max+1; year++) {
    /* For each year */
    for(let i = 0; i < births.length; i++) {
      if(year === births[i]) {
        currAlive++;
        maxAlive = Math.max(maxAlive, currAlive);
      }
      /*  If you died in the previous year you subtract see example in prompt  */
      if(year - 1 === deaths[i]) {
        currAlive--;
      }
    }
  }
  return maxAlive;
};

/* Or we could try to remove checking years entirely */
/* O(N + R) */
livingPeople = (births, deaths) => {
  const min = births.reduce((acc, birth) => acc > birth ? birth : acc);
  const max = deaths.reduce((acc, death) => acc < death ? death : acc);
  const deltas = [];
  for(let person = 0; person < births.length; person++) {
    const offset = births[person] - min;
    if(deltas[offset] === undefined) {
      deltas[offset] = 0;
    }
    deltas[offset]++;
    const deathset = deaths[person] - min;
    if(deltas[deathset+1] === undefined) {
      deltas[deathset+1] = 0;
    }
    deltas[deathset+1]--;
  }
  let currAlive = 0;
  let maxAlive = 0;
  deltas.forEach(delta => {
    currAlive += delta;
    maxAlive = Math.max(currAlive, maxAlive);
  });
  return maxAlive;
};

const births = [12, 20, 10, 1, 10, 23, 13, 90, 83, 75];
const deaths = [15, 90, 98, 72, 98, 82, 98, 98, 99, 94];
console.log(livingPeople(births,deaths));
