export function primes(limit: number): number[] {
  const sieve = []
  const primes = []

  for (let i = 2; i < limit + 1; i++) {
    if (sieve[i] === true) continue;
    primes.push(i)
    for (let j = i * 2; j < limit + 1; j += i)
        sieve[j] = true;
  }

  return primes
}





