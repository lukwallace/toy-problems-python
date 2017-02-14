// Helper file for bit manipulation

const getBit = (num, ind) => (num & (1 << ind)) !== 0 ? 1 : 0;
const setBit = (num, ind) => (num | (1 << ind))
const clearBit = (num, ind) => (num & (~(1 << ind)));
const updateBit = (num, ind, bit) => {
  const mask = ~(1 << ind);
  return (num & mask) | (value << ind);
};

// console.log(getBit(3, 0)); // 1
// console.log(clearBit(3, 0)); // 2
// console.log(setBit(3, 0)); // 3

module.exports = {
  getBit,
  setBit,
  clearBit,
  updateBit
}