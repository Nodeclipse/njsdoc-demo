
function HiWorld() {
	
}

/** This is a method on the base class
 * @arg a {string} This is a detailed comment for the parameter a 
 * @arg b
 * @arg c 
 * @ret {number} The result of a/0 */
HiWorld.prototype.foo = function(a, b, c) {
	return a/0;
};

/**
 * Constructor for dummy class
 * @arg {AnotherWorld} abc The world to which we are saying hello 
 */
function HelloWorld(abc) {
	this.noProtoVar = 123;
	
	// Invoke content assist here
	//this.
	// You can jump to definition of these:
	this.foo(a, b, c);
	this.myFun(a);
}

HelloWorld.prototype = new HiWorld();

/**
 * Documentation for member variable.
 * 
 * @type {integer}
 */
HelloWorld.prototype.myMember = 69;

HelloWorld.prototype.myFun = HelloWorld_myFun;

/** Static member docs*/
HelloWorld.staticMember = 123;

/**
 * This is a function with documentation
 * 
 * @arg {integer} a The number
 * @return {integer} The number plus one
 */
function HelloWorld_myFun(a) {
	
	// Invoke content assist here
	//this.
	return a + 1;
};

/**
 * Documentation for global object literal
 * @type {any}
 */
var MyVar = {
		/**
		 * This variable contains the string "abd"
		 * @type {String}
		 */
		a: "abd"
		//xss
};
     

// This is an immediately invoked function  
var IIFE = (function(indirection) {
	// Monkey patch the prototype of HelloWorld:
	indirection.monkeyPatchingIsBad = function() {
		console.log("in monkeyPatchingIsBad");
		// Note that the type of this is correctly inferred:
		this.foo(a, b, c);
	};
	
	// Define IIFE.a and IIFE.b
	return { a: "abc",
		/**
		 * @arg arg1 {String}
		 * @returns {number} A number
		 */
		b: function() { return 0;}
	};
})(HelloWorld.prototype);
