function setup() {
    noCanvas(); // No drawing canvas needed
  
    // Create a div to hold the inputs, button, and headers
    const loginContainer = select('#login-container');
    loginContainer.style('display', 'flex');
    loginContainer.style('flex-direction', 'column');
    loginContainer.style('align-items', 'center');
    loginContainer.style('justify-content', 'center');
  
    const header = createElement('h1', 'Time Tumbler');
    loginContainer.child(header);
  
    const subHeader = createElement('h2', 'User Login');
    loginContainer.child(subHeader);

    const usernameInput = createInput();
    usernameInput.attribute('placeholder', 'Username');
    loginContainer.child(usernameInput);
  

    const passwordInput = createInput('', 'password'); 
    passwordInput.attribute('placeholder', 'Password');
    loginContainer.child(passwordInput);
  
    
    const submitButton = createButton('Login');
    loginContainer.child(submitButton);
  
   
    submitButton.mousePressed(() => {
      const username = usernameInput.value();
      const password = passwordInput.value();
  
      // Hardcoded only for the user demo
      if (username === 'user' && password === 'password') {
        window.location.href = 'addEvent.html';
      } else {
        alert('Invalid username or password');
      }
    });
  }
  
  function draw() {
    // Nothing to draw
  }
  