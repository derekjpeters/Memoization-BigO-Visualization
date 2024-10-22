# Memoization and Big-O Visualization

This project demonstrates the concept of **memoization** and its impact on algorithm efficiency by comparing non-memoized and memoized recursive algorithms for calculating Fibonacci numbers and factorials. It also introduces **Big-O Notation** and how it can be used to evaluate the time complexity of algorithms.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Concepts Covered](#concepts-covered)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can view a live demo of the project [here](#link-to-live-demo).

## Features
- **Non-memoized vs Memoized**: Compare the performance of non-memoized and memoized versions of the Fibonacci and Factorial functions.
- **Execution Time Tracking**: Visualize the time taken by each algorithm using performance measurement tools.
- **Recursive Call Tracking**: Display the number of recursive calls made by both versions of the algorithms.
- **Interactive Input**: Users can input a number and see the results in real-time.
- **Performance Benefits**: Clearly demonstrate how memoization optimizes recursive functions.
  
## Installation
To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Memoization-BigO-Visualization.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Memoization-BigO-Visualization
    ```
3. Open the `index.html` file in your browser to view the project.

## How to Use
1. Open the project in your web browser.
2. Enter a number to calculate its Fibonacci or factorial value.
3. Click "Calculate" for Fibonacci or "Calculate Factorial" for factorial results.
4. Observe the result, the number of recursive calls made, and the execution time for both non-memoized and memoized versions.

## Concepts Covered
- **Memoization**: An optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.
- **Big-O Notation**: A way to express the time complexity of algorithms, showing how they scale with input size.
- **Recursive Algorithms**: Recursive functions that call themselves to break down a problem into smaller sub-problems.
- **Performance Measurement**: Using `performance.now()` to track the execution time of different algorithms.

## Technologies Used
- **HTML5**: Structure and layout of the application.
- **CSS3**: Styling for a modern and engaging user interface.
- **JavaScript (ES6)**: Core logic for memoization, recursion, and performance measurement.
  
## Contributing
Contributions are welcome! Please feel free to submit a Pull Request if you'd like to enhance the project or add new features.

1. Fork the repo.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your message"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
