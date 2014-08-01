Franciszkańska
==============
This application was written as a two days project for my father Piotr. The solution may be useful for people who have a dynamic IP and need to keep track of their current address. The aim of this project was to create a server that would keep dynamic IP address and redirect request to this address. The second part is a simple service that pushes current address updates to the server.

Used technology
---------------
Project is prepared to be deployed to [heroku](http://heroku.com/).
Database is mongodb, for this project [mongolab](http://mongolab.com/) solution was used.
All the codeing was done in JavaScript.

### Server
The server is written in [express](http://expressjs.com/) with a simple usage of [mongodb](https://www.npmjs.com/package/mongodb) and [path](https://www.npmjs.com/package/path).

### Client
Client is written in [Vanilla JS](http://vanilla-js.com/) and uses [wtfismyip](http://wtfismyip.com) to resolve current IP address.

### Tests
Tests make an usage of the following libraries: [chai](http://chaijs.com/), [mocha](http://mochajs.org/), [sinon](http://sinonjs.org/).
All automatization is done using [grunt](http://gruntjs.com/)

Deploy the project
------------------
* Install heroku [tooblet](https://toolbelt.heroku.com/).
* Clone project repository: `git clone https://github.com/precz/Franciszkanska.git`.
* Enter project directory: `cd Franciszkanska`.
* Create new heroku project: `heroku create`.
* Add mongolab database to project: `heroku addons:add mongolab`.
* Set secret authentication code: `heroku config:set AUTH_CODE=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)`.
* Push project to heroku `git push heroku master`
* Run the client `http://<heroku application name>.herokuapps.com/public?auth=<AUTH_CODE>`
Tip: You can see the client logs in your browser debugger.
* Now you can navigate to `http://<heroku application name>.herokuapps.com` and get redirected to your current IP address.

Run the tests
-------------
* Clone project repository: `git clone https://github.com/precz/Franciszkanska.git`.
* Install [nodejs](http://nodejs.org/).
* Create new config file: `cp test/config.json.example test/config.json`
* Update config.json with your test database url.
* Install external dependences `npm install`.
* Run tests `grunt`.

Licence
-------
The MIT License (MIT)

Copyright (c) 2015 Paweł Preczyński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.