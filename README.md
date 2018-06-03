# implementation-prototype-string-indexof
Implementation of the String Prototype indexOf method in Vanilla Javascript.

## Definition
The `indexOf() method` returns the index within the calling `String` object of the first occurrence of the specified value, starting the search at `fromIndex`. Returns -1 if the value is not found.

## Proposal
The first thing came to my mind were the `guard clauses` that helped me to `isolate` the code not related to the algorithm itself.
Doing this, instead of nested conditionals we got a "flat" list of conditionals, one after the other. It makes the code easier to read too.
        
The idea behind my solution is to iterate until we find a match with the first letter of the string we are looking for.
If we don't find any, we return -1. If we do, we start to check the other character of the given string.

Once we have found the first character, if the given string has `length === 1` it means we can return that index. If there are more characters to check, we go for it.

If the next character to check is different than the character in `this` we leave from that second loop and we go for another match with the first character of the given word.

``` Javascript
String.prototype.indexOfNew = function(searchValue, from = 0) {
  // Truncate `from` because we can't secure that it's an integer
  var _fromTruncated = Math.trunc(from);
  if (searchValue === '' && _fromTruncated < 0) {
    return 0;
  }

  if (searchValue === '' && _fromTruncated >= this.length) {
    return this.length;
  }

  if (searchValue === '') {
    return _fromTruncated;
  }

  // GIVEN:
  //	* A string `this`
  // 	* A string to find in `this`
  // 	* An initial position to start searching
  //
  // THEN:
  //	* Returns -1 if the string to find has not been matched in `this`.
  // 	* Returns the position of the first occurence of the string in `this`
  for (var i = _fromTruncated; i < this.length; i++) {
    var thisCharsLeft = this.length - i;
    if (this[i] === searchValue[0]) {
      var initial = i;
      if (searchValue.length === 1) {
        return initial;

      } else if (thisCharsLeft > searchValue.length - 1) {
        for (var j = 1; j < searchValue.length; j++) {
          if (this[++i] !== searchValue[j]) {
            break;
          } else if (j === (searchValue.length - 1)) {
            return initial;
          }
        }
      }
    }
  }

  return -1;
};
```