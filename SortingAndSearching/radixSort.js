/* Implementing radix sort simply because I haven't implemented it before */

const radixSort = (arr, place=1) => {
  const buckets = [];
  for(let i = 0; i < 10; i++) {
    buckets[i] = [];
  }

  arr.forEach(elem => {
    const digit = Math.floor(elem % (place * 10) / place);
    buckets[digit].push(elem);
  });

  const group = buckets.reduce((acc, bucket) =>  acc.concat(bucket));
  console.log(group, place);
  if(buckets[0].length === arr.length) {
    return group;
  }

  return radixSort(group, place*10);
};

console.log(radixSort([4, 23, 100, 13, 1, 54]));