import Exercise from "../root/models/exerciseModel.js";

const exercisesData = [
  {
    name: "Spread Operator",
    explanation:
      "Create a function that receive two arrays and uses the spread operator to merge them.",
    difficultyLevel: 2,
    testCases: [
      {
        funcInputs: "[1,2],[3, 4]",
        result: [1, 2, 3, 4],
      },
      {
        funcInputs: "[10,7,5],[5,4]",
        result: [10, 7, 5, 5, 4],
      },
    ],
    codeBlock: `const myFunc=(arr1,arr2)=>{      
      const mergedArray = ?;
      return mergedArray;
    }
    `,
  },
  {
    name: "Loops",
    explanation:
      "Create a function that receives two arrays that return a new arrays with all the items with out duplicates.",
    difficultyLevel: 5,
    testCases: [
      {
        funcInputs: "[1, 2, 3, 4, 5],[2,4,6,8,10]",
        result: [1, 2, 3, 4, 5, 6, 8, 10],
      },
      {
        funcInputs: "[11, 14, 18, 19],[-1,10,18,14]",
        result: [11, 14, 18, 19, -1, 10],
      },
    ],

    codeBlock: `
    function myFunc(arr1, arr2) {
        // Create a prototype to track 
        //the number of element and 
        let elementTracker = ?;
        
        //create an array to store the unique items
        let unionArray = [];
        
        // Helper function to add elements to the 
        //union array if they are not
        // already present in one of the the arrays
        function addElements(arr) {
            for (let i = 0; i < arr.length; i++) {

                }
            }
        }
        
        // Add elements from both arrays
        addElements(arr1);
        addElements(arr2);
        
        return unionArray;
    }
    `,
  },
  {
    name: "Reduce Function",
    explanation:
      "create a function that calculates the sum of an array of numbers using the reduce method.",
    difficultyLevel: 3,
    testCases: [
      {
        funcInputs: "[1, 2, 3, 4]",
        result: 10,
      },
      {
        funcInputs: "[10, 20, 30, 40]",
        result: 100,
      },
    ],
    codeBlock: `const myFunc = (arr) => {
      const sum = arr.reduce(?);
      return sum;
    }
    `,
  },
  {
    name: "Recursion",
    explanation: `Write a recursive program to calculate the factorial of a number.  `,
    difficultyLevel: 4,
    testCases: [
      {
        funcInputs: "5",
        result: 120,
      },
      {
        funcInputs: "7",
        result: 5040,
      },
    ],
    codeBlock: `function myFunc(n) {
      // Base case:what are the base cases
      // and what should they return
      if (n === ? || n === ?) {
        return ?;
      }
      return n * myFunc(n - 1);
    }
    `,
  },
];

export const generateExercise = async () => {
  try {
    for (let index = 0; index < exercisesData.length; index++) {
      const newExercise = await Exercise.create(exercisesData[index]);
    }
  } catch (error) {
    console.log(error);
  }
};
