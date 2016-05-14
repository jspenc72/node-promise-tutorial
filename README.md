# nodejs promise tutorial

Tutorial Steps

- 1. Run npm init

```bash
$ npm init
```
- 2. Add Bluebird promis library as a dependency

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