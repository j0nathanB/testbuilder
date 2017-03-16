var should = chai.should();

var generateCardNumber = function (cardPrefix, cardLength){
  var result = cardPrefix.toString();
  for(var i = 0; i < cardLength - cardPrefix.toString().length; i++){
    var randomDigit = Math.floor(Math.random() * (10));
    result += randomDigit;
  }
  return result;
}

describe('Diner\'s Club', function() {
  for (var prefix = 38; prefix <= 39; prefix++) {
    (function(prefix) {
       it('has a prefix of ' + prefix + ' and a length of 14', function() {
        var testCardNumber = generateCardNumber(prefix, 14);
        detectNetwork(testCardNumber).should.equal('Diner\'s Club');  
      });
    })(prefix)  
  }
});

describe('American Express', function() {
  for (var prefix = 34; prefix <= 37; prefix+= 3) {
    (function(prefix) {
       it('has a prefix of ' + prefix + ' and a length of 15', function() {
        var testCardNumber = generateCardNumber(prefix, 15);
        detectNetwork(testCardNumber).should.equal('American Express');  
      });
    })(prefix)  
  }
});

describe('Visa', function() {
  for (var length = 13; length <= 19; length+= 3) {
    (function(length) {
       it('has a prefix of 4 and a length of ' + length, function() {
        var testCardNumber = generateCardNumber(4, length);
        detectNetwork(testCardNumber).should.equal('Visa');  
      });
    })(length)  
  }
});

describe('MasterCard', function() {
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
       it('has a prefix of ' + prefix + ' and a length of 16', function() {
        var testCardNumber = generateCardNumber(prefix, 16);
        detectNetwork(testCardNumber).should.equal('MasterCard');  
      });
    })(prefix)  
  }
});

describe('Discover', function() {
  for (var length = 16; length <= 19; length+=3) {
    (function(length) {
       it('has a prefix of 6011 and a length of ' + length, function() {
        var testCardNumber = generateCardNumber(6011, length);
        detectNetwork(testCardNumber).should.equal('Discover');  
      });
    })(length)  
  }

  for (var prefix = 644; prefix <= 649; prefix++) {
    for(var length = 16; length <= 19; length+= 3){
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
         var testCardNumber = generateCardNumber(prefix, length);
         detectNetwork(testCardNumber).should.equal('Discover');  
        });
      })(prefix, length)
    }  
  }

  for (var length = 16; length <= 19; length+=3) {
    (function(length) {
       it('has a prefix of 65 and a length of ' + length, function() {
        var testCardNumber = generateCardNumber(65, length);
        detectNetwork(testCardNumber).should.equal('Discover');  
      });
    })(length)  
  }
});


describe('Maestro', function() {
  var cardPrefixes = ['5018', '5020', '5038', '6304'];

  for (var prefix = 0; prefix < cardPrefixes.length; prefix++) {
    for(var length = 12; length <= 19; length++){
      (function(prefix, length) {
        it('has a prefix of ' + cardPrefixes[prefix] + ' and a length of ' + length, function() {
         var testCardNumber = generateCardNumber(cardPrefixes[prefix], length);
         detectNetwork(testCardNumber).should.equal('Maestro');  
        });
      })(prefix, length)
    }  
  }
});

describe('China UnionPay', function() {
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for(var length = 16; length <= 19; length++){
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
         var testCardNumber = generateCardNumber(prefix, length);
         detectNetwork(testCardNumber).should.equal('China UnionPay');  
        });
      })(prefix, length)
    }  
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    for(var length = 16; length <= 19; length++){
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
         var testCardNumber = generateCardNumber(prefix, length);
         detectNetwork(testCardNumber).should.equal('China UnionPay');  
        });
      })(prefix, length)
    }  
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    for(var length = 16; length <= 19; length++){
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
         var testCardNumber = generateCardNumber(prefix, length);
         detectNetwork(testCardNumber).should.equal('China UnionPay');  
        });
      })(prefix, length)
    }  
  }
});

describe('Switch', function() {
  var cardPrefixes =['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var cardLengths = [16, 18, 19];

  for (var prefix = 0; prefix < cardPrefixes.length; prefix++) {
    for(var length = 0; length < cardLengths.length; length++){
      (function(prefix, length) {
        it('has a prefix of ' + cardPrefixes[prefix] + ' and a length of ' + cardLengths[length], function() {
         var testCardNumber = generateCardNumber(cardPrefixes[prefix], cardLengths[length]);
         detectNetwork(testCardNumber).should.equal('Switch');  
        });
      })(prefix, length)
    }  
  }
});
