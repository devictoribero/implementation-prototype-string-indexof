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