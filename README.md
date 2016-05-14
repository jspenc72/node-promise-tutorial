# nodejs promise tutorial

Tutorial Steps

- 1. Run npm init

```bash
$ git clone https://github.com/jspenc72/node-promise-tutorial
$ cd node-promise-tutorial
$ mkdir mytutorial
$ cd mytutorial
$ npm init
```
- 2. Add Bluebird promis library as a dependency

```bash
$ npm install bluebird -save
```

- 2. Create index.js

```bash
$ touch index.js
```

Install dependencies:
```bash
$ npm install
```

Promise Code Sample

```js

var Promise = require('bluebird');

var myFunction = function(){

	return new Promise(function(resolve, reject){

	})
}


```