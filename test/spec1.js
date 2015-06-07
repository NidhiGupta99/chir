describe("Test the Chirp Application",function(){
var login;
var register;
var logout;
		it("Test to check if we are on the right page",function(){
		
		    browser.get("http://localhost:3000/");
			expect(browser.getCurrentUrl()).toContain("#/");
			console.log("succeeded");
			
			  login = element(by.linkText('Login'));
			 
			 register = element(by.linkText('Register'));
			 
			  console.log("login element");
			  
			
		});
		
		
		it("Logging in with wrong credentials",function(){
		
		    browser.get("http://localhost:3000/");
			
			login.click();
			
			 expect(browser.getCurrentUrl()).toContain("/login");
			console.log("checking URL success");
			
			element(by.model("user.username")).sendKeys("abcd");
			element(by.model("user.password")).sendKeys("1234");
			element(by.buttonText("Log in")).click();
			expect(browser.getCurrentUrl()).toContain("/login");
			//expect($('[text-warning].ng-binding').isDisplayed()).toBeFalse();
		
		});
			
			it("Logging in with empty credentials",function(){
		
		    browser.get("http://localhost:3000/");
			
			login.click();
			
			 expect(browser.getCurrentUrl()).toContain("/login");
			console.log("checking URL success");
			
			element(by.model("user.username")).sendKeys("");
			element(by.model("user.password")).sendKeys("");
			element(by.buttonText("Log in")).click();
			expect(browser.getCurrentUrl()).toContain("/login");
			//expect($('[text-warning].ng-binding').isDisplayed()).toBeFalse();
		
		});


		it("Logging in with correct credentials",function(){
		
		    browser.get("http://localhost:3000/");
			
			login.click();
			
			 expect(browser.getCurrentUrl()).toContain("/login");
			console.log("checking URL success");
			
			element(by.model("user.username")).sendKeys("abc");
			element(by.model("user.password")).sendKeys("123");
			element(by.buttonText("Log in")).click();
			expect(browser.getCurrentUrl()).toContain("/#");
			element(by.model("newPost.text")).sendKeys("this is a text");
			element(by.buttonText("Chirp")).click();
			expect($('[ng-show=authenticated].navbar-text').isDisplayed()).toBeTruthy();
			
			});
		
	

			it("Refreshing the Page and checking if the user is logged in",function(){
			
			browser.refresh(5);
			logout = element(by.linkText('Logout'));
			logout.click();
			expect(browser.getCurrentUrl()).toContain("/#");
			console.log("End of test");
			});

			
			
			it("Register user",function(){
				
				
				browser.get("http://localhost:3000/");
				register.click();
				expect(browser.getCurrentUrl()).toContain("/signup");
				element(by.model("user.username")).sendKeys("abc");
				element(by.model("user.password")).sendKeys("123");
				element(by.buttonText("Register")).click();
				expect(browser.getCurrentUrl()).toContain("/#");
				//browser.pause();
				//element(by.model('newPost.text')).sendKeys("this is second text");
				element(by.xpath('//form[1]/input[@type="submit"]')).click();
				//element(by.buttonText("Chirp")).click();
				expect($('[ng-show=authenticated].navbar-text').isDisplayed()).toBeTruthy();
				console.log(" After Registration ");
				
			});
				
	});