export function primes(limit: number): number[] {

  let array = [];
  for (let i = 2; i <= limit; i++) {
    array.push(i);
  }

  for (let i = 2; i < limit; i++) {
    let multiples = [];
    for (let j = 2; j < limit; j++) {
      multiples.push(i*j);
    }
    array = array.filter(num => !multiples.includes(num));
  }

  return array;
}
