// Regular Fibonacci function (non-memoized) - inefficient for large numbers
function fibonacci(n) {
    // Log each time the Fibonacci function is called
    console.log(`Calculating fibonacci(${n})`);
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
  }
  
  // Memoized Fibonacci function - efficient for large numbers
  function memoizedFibonacci() {
    let memo = {}; // Object to store computed Fibonacci values
    console.log('Initializing memoization storage');
  
    // Inner function for calculating Fibonacci with memoization
    function fib(n) {
      // Log if the function is using a memoized result
      if (memo[n] !== undefined) {
        console.log(`Retrieving memoized result for fibonacci(${n})`);
        return memo[n]; // Return cached result
      }
  
      // Log each time the memoized Fibonacci function is called
      console.log(`Calculating fibonacci(${n}) without memoization`);
  
      // Base case: return n if 0 or 1
      if (n <= 1) return n;
  
      // Recursive case: calculate Fibonacci using memoized results
      let result = fib(n - 1) + fib(n - 2);
      memo[n] = result; // Store the result in memo object
      console.log(`Memoizing result for fibonacci(${n}): ${result}`);
      return result;
    }
  
    return fib; // Return the inner function so it can be reused
  }
  
  // Get references to HTML elements for interaction
  const fibInput = document.getElementById('fibInput');
  const resultDiv = document.getElementById('result');
  const calculateBtn = document.getElementById('calculateBtn');
  const memoCallsDiv = document.getElementById('memoCalls');
  const normalCallsDiv = document.getElementById('normalCalls');
  const memoizedCallsDiv = document.getElementById('memoizedCalls');
  const normalTimeDiv = document.getElementById('normalTime');
  const memoizedTimeDiv = document.getElementById('memoizedTime');
  
  // Variables to track recursive calls
  let normalCallCount = 0;
  let memoizedCallCount = 0;
  
  // Override the normal Fibonacci function to track recursive calls
  function trackedFibonacci(n) {
    normalCallCount++; // Increment normal call counter
    console.log(`Normal Fibonacci call count: ${normalCallCount}`);
    if (n <= 1) return n;
    return trackedFibonacci(n - 1) + trackedFibonacci(n - 2);
  }
  
  // Memoized Fibonacci with call tracking
  function memoizedTrackedFibonacci() {
    let memo = {}; // Memoization storage
    console.log('Initializing memoization storage for tracked Fibonacci');
  
    function fib(n) {
      memoizedCallCount++; // Increment memoized call counter
      console.log(`Memoized Fibonacci call count: ${memoizedCallCount}`);
      if (memo[n] !== undefined) {
        console.log(`Retrieving memoized result for tracked fibonacci(${n})`);
        return memo[n]; // Return memoized result
      }
      if (n <= 1) return n;
  
      let result = fib(n - 1) + fib(n - 2); // Recursively calculate Fibonacci
      memo[n] = result; // Memoize the result
      console.log(`Memoizing result for tracked fibonacci(${n}): ${result}`);
      return result;
    }
  
    return fib;
  }
  
  // Memoized function instance
  const fibMemo = memoizedTrackedFibonacci();
  
  // Event listener for calculating Fibonacci
  calculateBtn.addEventListener('click', () => {
    const num = parseInt(fibInput.value); // Get user input
    console.log(`User entered: ${num}`);
  
    if (isNaN(num)) {
      resultDiv.innerText = 'Please enter a valid number!'; // Handle invalid input
      console.log('Invalid input: not a number');
      return;
    }
  
    // Clear previous memoization call logs
    memoCallsDiv.innerText = '';
    normalCallCount = 0; // Reset normal call counter
    memoizedCallCount = 0; // Reset memoized call counter
  
    // Measure time for normal Fibonacci (non-memoized)
    const normalStart = performance.now();
    const normalResult = trackedFibonacci(num); // Calculate non-memoized Fibonacci
    const normalEnd = performance.now();
  
    // Measure time for memoized Fibonacci
    const memoizedStart = performance.now();
    const memoizedResult = fibMemo(num); // Calculate memoized Fibonacci
    const memoizedEnd = performance.now();
  
    // Display results for both normal and memoized Fibonacci
    resultDiv.innerText = `Fibonacci of ${num} is: ${memoizedResult}`;
    normalCallsDiv.innerText = `Non-Memoized Calls: ${normalCallCount}`;
    memoizedCallsDiv.innerText = `Memoized Calls: ${memoizedCallCount}`;
  
    // Display execution times
    normalTimeDiv.innerText = `${(normalEnd - normalStart).toFixed(4)} ms`;
    memoizedTimeDiv.innerText = `${(memoizedEnd - memoizedStart).toFixed(4)} ms`;
  
    // Log performance times to the console
    console.log(`Non-Memoized Fibonacci took ${(normalEnd - normalStart).toFixed(4)} ms`);
    console.log(`Memoized Fibonacci took ${(memoizedEnd - memoizedStart).toFixed(4)} ms`);
  });
  
  // Memoized factorial function
  function memoizedFactorial() {
    let memo = {}; // Memoization storage
    console.log('Initializing memoization storage for factorials');
  
    function fact(n) {
      // Check if factorial of n is already memoized
      if (memo[n] !== undefined) {
        console.log(`Retrieving memoized result for factorial(${n})`);
        return memo[n];
      }
  
      // Base case: factorial of 0 is 1
      if (n === 0) return 1;
  
      // Recursive case: factorial of n = n * factorial(n - 1)
      let result = n * fact(n - 1);
      memo[n] = result; // Memoize the result
      console.log(`Memoizing result for factorial(${n}): ${result}`);
      return result;
    }
  
    return fact;
  }
  
  // Memoized function instance for factorial
  const factMemo = memoizedFactorial();
  
  // Event listener for calculating factorial
  const factorialInput = document.getElementById('factorialInput');
  const factorialResultDiv = document.getElementById('factorialResult');
  const factorialBtn = document.getElementById('factorialBtn');
  
  factorialBtn.addEventListener('click', () => {
    const num = parseInt(factorialInput.value); // Get user input
    console.log(`User entered: ${num} for factorial`);
  
    if (isNaN(num) || num < 0) {
      factorialResultDiv.innerText = 'Please enter a non-negative integer!';
      console.log('Invalid input for factorial');
      return;
    }
  
    // Calculate memoized factorial and display result
    const result = factMemo(num);
    factorialResultDiv.innerText = `Factorial of ${num} is: ${result}`;
    console.log(`Calculated factorial of ${num}: ${result}`);
  });
  