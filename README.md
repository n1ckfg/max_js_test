# Max JS test

Examples of the old and new JS API for Max/MSP/Jitter. (TL;DR you probably want the new one.)

The <a href="https://docs.cycling74.com/max8/refpages/node.script">node.script object</a> was introduced in Max 8. It uses node.js and the Chrome V8 engine, and runs in its own thread. Its API is more complex but it can use JS ES6 and external libraries.

The Max <a href="https://docs.cycling74.com/max5/refpages/max-ref/js.html">js object</a> was introduced in Max 5. It uses the Firefox SpiderMonkey engine, and runs in the main thread. It has a simpler API but can only use JS ES5 without external libraries.

