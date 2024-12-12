const arr = ["kamlesh", "sameer", "sagar", "saurabh"];

const button = document.getElementById("hello");

button.addEventListener("click", () => {
  //   button.innerHTML = arr[0];
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     button.innerHTML = element;
//     }
    setTimeout(() => {
        button.innerHTML = arr[0];
    },0)
    setTimeout(() => {
        button.innerHTML = arr[1];
    },1000)
    setTimeout(() => {
        button.innerHTML = arr[2];
    },2000)
    setTimeout(() => {
        button.innerHTML = arr[3];
    },3000)
});



// Closure
// A  Closure is the combination of a function bundled to gether(enclosed) with 
// reference to its surrounding scope or state(the lexical enviroment).
// it other word a Closure gives you access to an outer function's scope an inner function.
var sum = function (a, b, c) {
  return {
    getSumtwo: function () {
      return a + b;
    },
    getSumthree: function () {
      return a + b + c;
    },
  };
};

var store = sum(4, 7, 3);
console.log(store.getSumtwo());
console.log(store.getSumthree());



// Hosting
// Hosting refers to the process where by the interpreter appears to move the
// diclarations to the top of the code before execition.

// variables can thus be referenced before they are diclared in javascript.

// function expressions and class expressions are not hoisted
console.log(a);
console.log(sumh(7, 6));
function sumh(a, b) {
  console.log(multi(2, 7, 9));
  return a + b;
}

function multi(c, d, m) {
  return c * d + m;
}
var a;



// Currying
// Currying is a technique in functional programing where a function that takes 
// multiple arguments is transformed into a series of functions that each take 
// a single argument.

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let res = Addition(3)(7)(7);
console.log(res);

let userObj = { name: "kamlesh", age: 28 };

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let rest = userInfo(userObj);
console.log(rest("name"));

// Infinity currying in Js
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(4)(6)(3)(7)());



// Memoization
// Memoization in JavaScript is an optimization technique that involves caching the 
// result of expensive function call and returning the cached result when the same 
// input occur again.This is especially useful for function that perform repetitive 
// calculations with same inputs, such as recursive algorithms or expensive computations.
let sumo = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sumo += i;
  }
  return sumo;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};
const efficient = memoize(calc);
console.log(efficient(5));



// Debouncing
// Debouncing improving performance by delaying the execution of a function until 
// the specified amount of time has passed since the last time it was called.
// In the context of the search input, the debouncing can be used to delay the execution 
// of a search function until the user has finished typing.This can easily prevent 
// excessive processing & reduce the number of unnecessary network request.
let Res = document.querySelector('[data=debres]');
let counter = 0;
const getData = () => {
  console.log("Featching Data...", counter++);
  // const newRes = document.createElement("span");
  Res.innerHTML = "Featching Data..."
  // Res.textContent = "Featching data...";
  // console.log(newRes);
  console.log(Res);
};

const Debouncing = function (fn, d) {
  let timer;
  return function () {
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
    getData.apply(context, arguments);
    }, d);
  };
};

const Betterfunction = Debouncing(getData, 600);



// Throttling
// Throttling is a techique used to limit the rate of which a function is called. 
// Throttling transforms a function such that it can only be called once in a specifc 
// interval of time. 
let count = 0;
const ThroT = document.getElementById("Throt");
let apicalling;

const throttle = (fn , time) => {
  if (apicalling) return;
  apicalling = true;
  setTimeout(() => {
    fn();
    apicalling = false;
  }, time);
}
ThroT.addEventListener("click", () => {
  throttle(() => {
    console.log("throttling not working", count++);
  },5000)
})



// Callback
// A callback function is a function passed into another
// function an argument which is complete an action.

// Define a function that accepts a callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

// Define a callback function
function afterGreeting() {
    console.log("Greeting is complete.");
}

// Call the function and pass the callback
greet("Alice", afterGreeting);



//evet bubbling
// Event Bubbling is a concept in the DOM.It happens when an element receives an event,
// and that event bubbles up(or you can say is transmitted or propagated) to its parent 
// and ancestor elements in the DOM tree until it gets to the root element.
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
  alert("Parent clicked")
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");

  alert("Child clicked")
});



//event delegation
// Event delegation is a technique in JavaScript where a single event listener is 
// attached to a parent element instead of attaching event listeners to multiple child 
// elements.When an event occurs on a child element, the event bubbles up the DOM tree, 
// and the parent element's event listener handles the event based on the target element.
const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");

// Add a single event listener to the parent
itemList.addEventListener("click", (event) => {
  // Check if the clicked element is an <li> with the class "item"
  if (event.target && event.target.matches("li.item")) {
    alert(`Item clicked: ${event.target.textContent}`);
  }
});

    // Dynamically add new list items
    addItemButton.addEventListener('click', () => {
      const newItem = document.createElement('li');
      newItem.classList.add('item');
      newItem.textContent = `Item ${itemList.children.length + 1}`;
      itemList.appendChild(newItem);
    });



//Promises
// The Solution to the callback hell is promises.A promise is a "Promise of code 
// execution". The code either execues or fails, in both the cases the subscriber 
// will be notified.
const Promises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);    
})

Promises.then(function() {
    console.log("Promise consumed");
})
//
new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "kamlesh", email: "kamlesh@example.com" });
    }, 1000)
}).then(function(user) {
console.log(user);
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let Error = false;
        if (!Error) {
            resolve({ username: "kamlesh", password: "123456" });
        } else {
            reject('ERROR: Somthing went wrong');
        }
    }, 1000)
});

promiseThree.then(function(user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function(error) {
    console.log(error);
})


// Event loop 
