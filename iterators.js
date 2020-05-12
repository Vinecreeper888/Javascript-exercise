
//Challenge 1
//A) Create a for loop that iterates through an array and returns the sum of the elements of the array. 
//B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.

//A
function sumFunc(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for(let i = 0;i<arr.length;i++) {
    sum+=arr[i]
  }
  return sum;
}

// Uncomment the lines below to test your work
//const array = [1, 2, 3, 4];
//console.log(sumFunc(array)); // -> should log 10

//B
function returnIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  function next() {
    const element = arr[i];
    i++;
    return element;
  }
 return next;
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'




// //Challenge 2
// //Create an iterator with a next method that returns each value of the array when .next is called.

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  
  const iterator = {
    next: function() {
      const element = arr[i];
      i++;
      return element;
    }
  }
  return iterator;
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

//Challenge 3
//Write code to iterate through an entire array using your nextIterator and sum the values.

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let accumulator = 0;
  let iterator = nextIterator(arr);
  let next = iterator.next();
  
  while(next) {
   accumulator+=next;
   next = iterator.next();
  }
 return accumulator;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// //Challenge 4
// //Create an iterator with a next method that returns each value of a set when .next is called

function setIterator(set) {
  // YOUR CODE HERE
  let first = set.values();
  
  const iterator = {
    
    next: function() {
      
     let newValue = first.next();
     let v = newValue.value;
     return v;
      
   }
    
  }
  return iterator;

}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'


// //Challenge 5
// //Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.

function indexIterator(arr) {
  // YOUR CODE HERE
  let index = 0;
  
  const iterator = {
    
    next: function() {
      
      let element = arr[index]
      let element_index = index;
      index++;
      
      return [element_index,element];
    }
  }
  return iterator;

}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']




// //Challenge 6
// //Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!) 
// //Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
    let index = 0;
    let splitStr = this.str.split(/\s/);

    return {
      next: function() {
        
          if(index < splitStr.length) {
            const value = splitStr[index];
            index++;
            return {value: value, done: false};
          } else {
          return {done:true};
        }
    }
  }
}

// // Uncomment the lines below to test your work
// //const helloWorld = new Words('Hello World');
// //for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'



// //Challenge 7
// //Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index. 
// //Note: if it is the first element it should say that it is the first

function valueAndPrevIndex(array){
 let index = 0;
  
  return {
    sentence: function() {
      const element = array[index];
      const statement = " was found after ";
      
        if(index == 0) {
          const first = String(element)+" is the first";
          index++;
          return first;
        } else {
           const merged_sentence = String(element)+statement+String(index-1);
          index++;
         return merged_sentence;
       }
      }
    }
   return iterator;  
}
  

// //UNCOMMENT
// //const returnedSentence = valueAndPrevIndex([4,5,6,7])
// // console.log(returnedSentence.sentence());
// // console.log(returnedSentence.sentence());
// // console.log(returnedSentence.sentence());
// // console.log(returnedSentence.sentence());


//Challenge 8
//Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'. 
//Do not use any type of loop constructor and only make the call to createConversation once.
// function* createConversation(string) {

setTimeout(function() {
  if(string.toLowerCase() == 'english') {
    console.log("hello there");
  } else {
    console.log('gibberish');
  }
},3000);



// //UNCOMMENT
// //console.log(createConversation('englisiuyuyf').next());
// //console.log(createConversation('english').next());



// //Challenge 9
// //Use async/await to console.log a sentence comprised of a noun and verb
// //in which the non async function takes in a noun, concatenates it with a 
// //hard coded verb and returns it to the async function to be console.logged 
// //after a duration of 3 seconds. Call the async function only once, 
// //feeding it a noun to make this happen.

function waitForVerb(noun) {
  const merged_sentence = noun+" barks";
  console.log(merged_sentence);
}

async function f(noun) {
 await setTimeout(waitForVerb(noun),3000)
};

// //Uncomment
// //f("dog");
