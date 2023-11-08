class CallCenter {
	constructor(name) {
	  this.name = name;
	}

	sayHello() {
	  console.log(`Hello, this is ${this.name}`);
	}

	callMeLater(delay) {
	  setTimeout(() => {
		this.sayHello();
	  }, delay);
	}
  }

  // Example usage:
  const callCenterInstance = new CallCenter("Customer Support");
  callCenterInstance.sayHello(); // Output: Hello, this is Customer Support
  callCenterInstance.callMeLater(2000); // Calls sayHello() after a 2-second delay

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
