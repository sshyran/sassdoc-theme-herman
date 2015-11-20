module.exports = {
  sassyJson: function (contents) {
    // Parse the contents of a file containing SassyJSON output and return the
    // first SassyJSON line found as a JS object.
    var startMarker = '/*! json-encode:';
    var endMarker = '*/';
    var start = contents.indexOf(startMarker);
    var end = contents.indexOf(endMarker, start);
    var jsondata = contents.slice(start + startMarker.length, end);
    return JSON.parse(jsondata);
  }
}