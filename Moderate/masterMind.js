/* 
The computer has four slots, and each slot will ocntain a ball that is red (R), yellow (Y), green (G), or blue (B). For example, the copmuter might have RGGB (Slot #1 is red, Slots #2 and #3 are green, and Slot #4 is blue). 

You, the user, are trying to guess the solution. You might, for example, guess YRGB.

When you guess the correct color the correct slot, you get a "hit". If you guess a color that exists but is in the wrong slot, you get a "hit". If you guesss a color that exists but is in the wrong slot, you get a "psuedo-hit". Note that a slot that is a hit can never count as a psuedo-hit.

For example, if the actual solution is RGBY and you guess GGRR, you have one hit and one pseudo-hit. Write a method that, given a guess and a solution, returns the number of hits and psuedo-hits.
*/

const fourSlots = (ans, guess) => {
  let psuedo_hits = 0;
  let hits = 0;
  const seen = {};
  const psuedo = {};
  const hitInd = [false, false, false, false];
  for(let i = 0; i < 4; i++) {
    if(guess.charAt(i) === ans.charAt(i)) {
      hitInd[i] = true;
      seen[guess.charAt(i)] = true;
      hits++;
    } else {
      psuedo[ans.charAt(i)] = true;
    }
  }
  console.log('seen', seen);
  console.log('psuedo', psuedo);
  console.log('hitInd', hitInd);

  for(let i = 0; i < 4; i++) {
    const guessChar = guess.charAt(i);
    if(hitInd[i] === false &&
      seen[guessChar] === undefined &&
      psuedo[guessChar] === true) {

      psuedo[guessChar] = false;
      psuedo_hits++;
    }
  }
  console.log(psuedo_hits, hits);
};

fourSlots('RGBY', 'GGRR'); // 1 1
fourSlots('RGBY', 'GGRY'); // 1 2
fourSlots('RGBY', 'GGYR'); // 2 1
