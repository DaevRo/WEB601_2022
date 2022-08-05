Intro to Node.js
***************************************************************

history
***************************


1994 pre - nodejs version
    * netscapeenterprise server 1994
    * IIS 1996
    Not very successful

2009 Birth of node.js created by Ryan Dahl

2010 Express was born 

2014 proejct stagnation leads to a fork - io.js 

************************************************
Non BLocking I/O
********************************

This is a "classical" multi-threaded parallel execution

***************************
Event Loops
************************************************

there are event loop implementations for many languages in platform. but in node.js the event loop IS the platform.js

WHAT NOT TO DO IN THE EVENT LOOP
******************************

* everything that is cpu intensive
    * image / video processing 
    * heavy number crunching 
    * compressing files
    * actually everything involving complex algorithms

however you can write native extensions


REFRESH ES6 ES5 Call back functions


**************************************************
EXPRESS CMDS
**********************************************

npm init -y
npm i express@latest
npm i express-generator
express -e simple-run
node run start



