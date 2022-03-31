const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export function primes(limit: number): number[] {
  const array = range(2, limit, 1);

  const nonPrimes = array.reduce((acc, value) => {
    const multiples = range(value * 2, limit, value);
    return acc.concat(multiples);
  }, []);

  const temp = array.filter((num) => !nonPrimes.includes(num));

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

  return temp;
}
