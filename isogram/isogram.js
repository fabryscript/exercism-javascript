//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// I hate not having the right ts libs...

function replaceAll(input, search, replacement) {
  return input.split(search).join(replacement);
}

export const isIsogram = (word) => {
  if (word === "") return true;

  const split = replaceAll(word.toLowerCase(), /[\s-]/g, "").split("");
  const set = new Set(split);

  return split.length === set.size;
};
