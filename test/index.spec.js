var util = require('util');

describe('Chirp', function() {
var ptor;

beforeEach(function(){
	browser.get('http://localhost:3000/');
ptor = protractor.getInstance();


	});

  it('should have a title', function() {
  	ptor = protractor.getInstance();
    element(by.model('current_user'));
    //expect(ptor.getLocationAbsUrl()).toMatch("/");
//},50000);
    console.log('success');
  });
});

 