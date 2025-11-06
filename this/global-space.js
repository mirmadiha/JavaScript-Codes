console.log(this);
// 'this' in the global space refers to the global object.
// The global object differs based on the runtime environment.
// In the browser, the global object is 'window'.
// In Node.js, the global object is 'global'.
// Note: The behaviour of 'this' changes in strict mode vs non-strict mode.
