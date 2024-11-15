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
console.log(sumh(7, 6));
function sumh(a, b) {
  console.log(multi(2, 7, 9));
  return a + b;
}

function multi(c, d, m) {
  return c * d + m;
}
// Currying
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
let counter = 0;
const getData = () => {
  console.log("Featching Data...", counter++);
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




// Callback
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



//evet bubling
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});



//event delegation




//Promises
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