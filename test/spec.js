describe("test zoo site",function(){
		
		
		beforeEach(function(){
		//test code
		//runs before each test runs
		browser.get("http://www.thetestroom.com/jswebapp");
	
	
	});
		
		it("to test input field",function(){
			
			//validation statements: expect
			
			expect(browser.getCurrentUrl()).toContain("jswebapp");
			
			//expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
			
			
			
			//element(by.buttonText("CONTINUE")).click();
			//element(by.model("animal")).$('[value= "1"]').click();
			//element(by.partialButtonText("CONT")).click();
			
		});

		
		it("should generate correct text",function(){
			
			//validation statements: expect
			
		
			
			var textMessage = "I will subscribe";
			element(by.model("person.name")).sendKeys(textMessage);
			element(by.binding("person.name")).getText().then(function(text){
			//console.log(text);
			
			expect(text).toEqual("I will subscribe");
			});
			//element(by.buttonText("CONTINUE")).click();
			//element(by.model("animal")).$('[value= "1"]').click();
			//element(by.partialButtonText("CONT")).click();
			
		});
		

		it("should be able to adopt an animal",function(){
						//validation statements: expect
			element(by.buttonText("CONTINUE")).click();
			element(by.model('animal').$('[value="1"]')).click();
			console.log("not selecting");
			element.all(by.css(".ng-pristine options")).then(function(items){
				
				expect(items.length).toBe(4);
				expect(items[1].getText()).toBe("George the Turtle");
				
			});
			element(by.buttonText("CONTINUE")).click();
			


});




			it("should check user is on the thankyou page",function(){
			
			//validation statements: expect
			element(by.buttonText("CONTINUE")).click();
			
			element(by.buttonText("CONTINUE")).click();
			
			expect(browser.getCurrentUrl()).toContain("confirm");


});








});