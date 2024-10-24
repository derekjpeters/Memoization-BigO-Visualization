/* 
1. O(1) – Constant time: The operation takes the same amount of time regardless of the input size.
        - Example: Accessing an element in an array by index.
2. O(n) – Linear time: The time grows linearly with the size of the input.
        - Example: Searching through an unsorted array.
3. O(log n) – Logarithmic time: The time grows slower as the input size increases.
        - Example: Binary search, where each step halves the dataset.
4. O(n²) – Quadratic time: The time grows proportionally to the square of the input size.
        - Example: Nested loops over an array (e.g., bubble sort). 
*/

// Function to check if a number exists in an array (O(n) complexity)
//Example of O(n) Time complexity
function isNumberInArray(array, targetNumber) {
	//loop through each element in the array
	for (let i = 0; i < array.length; i++) {
		if (array[i] === targetNumber) {
			return true;
		}
	}

	return false;
}

console.log(isNumberInArray([1, 2, 3, 4, 5, 6], 3));

const numbers = [10, 20, 30, 40, 50];

console.log(numbers[2]);

//Function to find if any two numbers in the array add up to the target O(n^2)

function hasPairWithSum(array, targetSum) {
	//nested loop to check each pair of numbers
	for (i = 0; i < array.length; i++) {
		console.log(i, array[i]);
		for (j = i + 1; j < array.length; j++) {
			console.log(j, array[j]);
			if (array[i] + array[j] === targetSum) {
				return true;
			}
		}
	}
	return false;
}
console.log(hasPairWithSum([1, 2, 3, 4, 5, 6], 11));
let bob = 3;
let counter = 0;
let sum = 0;
for (let i = 1; i <= bob; i++) {
	console.log(`Outer loop iteration: ${i}`);
	for (let j = 1; j <= bob - 1; j++) {
		console.log(`-- Inner loop iteration: ${j}`);
		for (let w = 1; w <= bob - 1; w++) {
			console.log(`--- Inner loop iteration: ${w}`);
			for (let o = 1; o <= bob - 1; o++) {
				console.log(`---- Inner loop iteration: ${o}`);

                counter++;
                sum += i + j + w + o;
			}
		}
	}
	console.log("---End of loop---");
    console.log(`total iterations: ${counter}`);
    console.log(`sum of all loop values: ${sum}`);
}

/* function isNumberInArray(array, targetNumber) {
    console.log("Starting search for number:", targetNumber);
    for (let i = 0; i < array.length; i++) {
      console.log(`Checking array element: ${array[i]}`);
      if (array[i] === targetNumber) {
        console.log("Number found!");
        return true;
      }
    }
    console.log("Number not found!");
    return false;
  }
  
  // Event listener for checking number in the array
  document.getElementById("check-number").addEventListener("click", function () {
    const result = isNumberInArray([1, 2, 3, 4, 5], 3);
    const resultDisplay = document.getElementById("big-o-result");
    resultDisplay.textContent = result
      ? "Number 3 is in the array!"
      : "Number 3 is NOT in the array!";
  });
  
  // Node class representing a single element in the linked list
  class ListNode {
    constructor(data) {
      this.data = data;  // The value of the node
      this.nextNode = null;  // Pointer to the next node in the list
    }
  }
  
  // LinkedList class to manage the list of nodes
  class LinkedList {
    constructor() {
      this.firstNode = null;  // Head (first node) of the list
      this.nodeCount = 0;  // Keep track of how many nodes are added
    }
  
    // Add a new node at the end of the list
    addNode(data) {
      console.log("Adding node with data:", data);
      const newNode = new ListNode(data);
      if (this.firstNode === null) {
        console.log("This is the first node in the list.");
        this.firstNode = newNode;  // Set as the first node if the list is empty
      } else {
        let currentNode = this.firstNode;
        // Traverse to the end of the list
        while (currentNode.nextNode !== null) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;  // Add the new node at the end
      }
      this.nodeCount++;
    }
  
    // Print all nodes in the list
    printAllNodes() {
      let currentNode = this.firstNode;
      let nodesData = [];
      while (currentNode !== null) {
        console.log("Node data:", currentNode.data);
        nodesData.push(currentNode.data);  // Store the node data for display
        currentNode = currentNode.nextNode;
      }
      return nodesData;
    }
  }
  
  // Initialize linked list and add some nodes
  const myLinkedList = new LinkedList();
  let nodeCounter = 1;  // Keeps track of the data for new nodes
  
  // Event listener to add a new node to the linked list
  document.getElementById("add-node").addEventListener("click", function () {
    myLinkedList.addNode(`Node ${nodeCounter}`);
    nodeCounter++;
    const listOutput = document.getElementById("list-output");
    listOutput.innerHTML = ""; // Clear previous output
    const nodes = myLinkedList.printAllNodes();
    nodes.forEach((nodeData) => {
      const li = document.createElement("li");
      li.textContent = `Node: ${nodeData}`;
      listOutput.appendChild(li);
    });
  });
  */
