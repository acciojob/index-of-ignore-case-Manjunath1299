function indexOfIgnoreCase(str, subStr) {
  // Handle empty strings
  if (!str || !subStr) return -1;

  // Convert both strings to lowercase for case-insensitive comparison
  str = str.toLowerCase();
  subStr = subStr.toLowerCase();

  // Iterate through the main string, comparing substrings
  for (let i = 0; i <= str.length - subStr.length; i++) {
    if (str.substring(i, i + subStr.length) === subStr) {
      return i; // Return the index of the first match
    }
  }

  // If no match is found, return -1
  return -1;
}

// Uncomment these lines to test the function with user input:
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
