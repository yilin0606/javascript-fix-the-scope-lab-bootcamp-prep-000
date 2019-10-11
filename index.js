function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}


function add2(n) {
  const two = 2
  return n + two
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

theFunk = funkyFunction() {
  return function();
}


 describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})