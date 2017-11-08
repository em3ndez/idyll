
var parse = require('./parser');
var Lexer = require('./lexer');

module.exports = function(input, options) {
  options = Object.assign({}, { spellcheck: false, smartquotes: true }, options || {});
  var lex = Lexer();
  var lexResults = lex(input);
  console.log(JSON.stringify(lexResults));
  var output = parse(input, lexResults.tokens.join(' '), lexResults.positions, options);
  return output;
}
