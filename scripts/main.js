//  take a look at the expected behavior here: https://youtu.be/WH2TbnkirpQ
//
// assume you have access to 2 provided functions:
// 1. later(target, callback) finds a valediction that is appropriate for a target.
//    targetQuery: to whom you'd like to offer an appropriate valediction (https://en.wikipedia.org/wiki/Valediction)
//                  (if it is a substring of a known target, the corresponding valediction will be provided,
//                   otherwise a random one will be selected)
//    callback: function that you want later to call with the valediction result when it's ready.
//              this function will be called with the following arguments:
//        result: an object with the keys:
//            target: to whom the result is intended to go
//            valediction: what to say to the target
// 2. options(callback) finds all known valediction targets or those that include the substring specified in query, if it's provided.
//    callback: function that you want options to call with the known valediction targets, when they're ready.
//              this function will be called with the following arguments:
//        keys: an array of known valediction targets
//    query: a constraint on which valediction targets to include. Only those of which query is a substring will be included.

// get refs to the input and output elements in the page
const input = document.getElementById("target");
const output = document.querySelector("output");

// when the input has focus and enter is pressed, invoke the function named later
input.addEventListener("keydown", (ev) => {
  console.log("keydown", ev.key);
  if (ev.key === "Enter") {
    console.log("Enter detected. current value:", input.value);
    console.log(_laters)
    later(input.value, (r) => setOutput(r.target, r.valediction))
    // ...?
  }
});

// when you have the result from this function, update the content of the output element with the result formatted as:
// "RESULT, TARGET" // where the all caps are placeholders for the corresponding values
// example:
// if the result of invoking later with a target of "alligator"
// is "see you later", the output element should be updated to read:
// see you later, alligator

//
const setOutput = (target, valediction) => {
  console.log("setOutput", target, valediction);
  output.innerText = `${valediction}, ${target}`;
};
