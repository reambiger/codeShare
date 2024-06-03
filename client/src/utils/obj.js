export function compareAnything(first, second) {
    if (first === null || second === null) return false;
    if (first === second) return true;
    if (typeof first !== "object" || typeof second !== "object") return false;
    let first_keys = Object.getOwnPropertyNames(first);
    let second_keys = Object.getOwnPropertyNames(second);
    if (first_keys.length !== second_keys.length) return false;
    for (let key of first_keys) {
      if (!Object.hasOwn(second, key)) return false;
      if (compareAnything(first[key], second[key]) === false) return false;
    }
    return true;
  }