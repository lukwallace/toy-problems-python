/* Given an input file with four billion non-negative integers, provide an algorithm to generate an integer that is not contained in the file. Assume you have 1 GB of memory available for the task 

4,000,000,000 numbers
With a 32bit Integer there is 2^31 possible non-negative integers
1GB -> 1000 MB -> 1,000,000 kb -> 1,000,000,000 bytes -> 8,000,000,000 bits

1,000,000,000 distinct numbers 
10MB -> 10,000 kb -> 10,000,000 bytes -> 80,000,000 bits
cannot fit into memory in a bit array, so divide up into ranges, and count occurances

*/