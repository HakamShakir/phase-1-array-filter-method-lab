// Code your solution here

function findMatching(arr, driverName) {
  const matchedName = arr.filter(
    (name) => name.toLowerCase() == driverName.toLowerCase()
  );
  return matchedName;
}

function fuzzyMatch(arr, driverName) {
  let str = driverName.charAt(0);
  const firstLetterMatched = arr.filter((name) => str == name.charAt(0));
  return firstLetterMatched;
}

function matchName(obj, string) {
  const matched = obj.filter((el) => el.name == string);
  return matched;
}
