// you are not intended to read or understand this file
// it provides 2 functions:
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

// s/o: https://www.sbac.edu/site/handlers/filedownload.ashx?moduleinstanceid=103&dataid=519&FileName=208-Goodbye-Rhymes-18x24.pdf
const _laters = {
  Alligator: "See You Later",
  Crocodile: "After A While",
  Buffalo: "Gotta Go",
  Raccoon: "See You Soon",
  Parakeet: "Be Sweet",
  "Polar Bear": "Take Care",
  "Garter Snake": "In A Shake",
  "Happy Toad": "Hit The Road",
  "Blue Jay": "Can't Stay",
  Butterfly: "Bye-Bye",
  Ladybug: "Give A Hug",
  Kangaroo: "Toodle-Loo",
  "Little Newt": "Time To Scoot",
  Penguin: "'Til Then",
  Hippos: "Adios",
  Iguana: "Hasta Manana",
  Goldfish: "Give A Kiss",
  Porcupine: "Get in Line",
  Dinosaur: "Out The Door",
  Octopus: "On The Bus",
  "Quiet Mouse": "To Your House",
  Ounce: 'Gotta bounce',
};

const later = (target, cb) => {
  const keys = Object.keys(_laters);
  const rand = Math.floor(Math.random() * keys.length);
  let result = { target: keys[rand], valediction: _laters[keys[rand]] };
  if (target) {
    if (target in keys) {
      result = { target, valediction: _laters[target] };
    } else {
      const matches = keys.filter((k) =>
        k.toLowerCase().includes(target.toLowerCase())
      );
      if (matches.length) {
        const randMatch = Math.floor(Math.random() * matches.length);
        result = {
          target: matches[randMatch],
          valediction: _laters[matches[randMatch]],
        };
      }
    }
  }
  return setTimeout(() => cb(result), Math.random() * 3000);
};

const options = (cb, query) =>
  setTimeout(() => {
    let keys = Object.keys(_laters);
    if (query) {
      keys = keys.filter((k)=> k.includes(query));
    }
    cb(keys);
  }, 2000 + Math.random() * 3000);
