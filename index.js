/**
* Pulls in the required parameters
**/
const express               = require('express');
const commandLineArgs       = require('command-line-args');

/**
* Command line properties
**/
const optionDefinitions     = [

  { name: 'count', alias: 'c', type: Number },
  { name: 'port', alias: 'p', type: Number },

]

/**
* Parse out the command line arguments
**/
const args                  = commandLineArgs(optionDefinitions);

/**
* The amount of pages to show
**/
const AMOUNT_RESERVED       = 1;
const AMOUNT_OF_PAGES       = parseInt(args.count || process.env.PAGES || 100) || 100;
const AMOUNT_OF_DIRS        = Math.round(AMOUNT_OF_PAGES / 500) || 1;
const DELTA_PAGES           = AMOUNT_OF_PAGES - AMOUNT_RESERVED - AMOUNT_OF_DIRS;

/**
* Loop and build a array of pages we can use
**/ 
var   PAGES = [];

/**
* Do the actual loop
**/
for(var i = 0; i < DELTA_PAGES; i++) {

  // set the pages
  var LISTING_TO_USE = Math.ceil( Math.random() * AMOUNT_OF_DIRS );

  // add the page
  PAGES.push({

    dir:        LISTING_TO_USE,
    index:      1 * i // clone to avoid ref issues

  });

}

/**
* PORT TO LISTEN ON
**/
const PORT                = parseInt(args.port || process.env.PORT || 8080)

/**
* Setup express with pug to render templates
**/
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

/**
*
**/
app.use(function(req, res, next) {

  // total amount of requested pages
  res.locals.pagecount  = DELTA_PAGES;

  // array of pages that we can render
  res.locals.pages      = PAGES;

  // amount of directories to show 
  res.locals.dirs       = AMOUNT_OF_DIRS;

  // move on
  next();

});

app.get('/', function(req, res) {

  // else just render a nice message. With a link to home :)
  res.render('home', {})

});

/**
* Handles showing a individual page
**/
app.get('/p/:pageid', function(req, res) {

  // check if the page id exists
  var pageid = parseInt(req.params.pageid);

  // check if number
  if(pageid === NaN || 
      pageid === undefined || 
        pageid === null) {

    // yes stop it
    return res.status(404).render('notfound');

  }

  // check sanity check just for fun
  if(pageid > DELTA_PAGES || 
      pageid == 0) {

    // yes stop it
    return res.status(404).render('notfound');

  }

  // else just render a nice message. With a link to home :)
  res.render('page', {

    pageid:   pageid

  })

});

/**
* Handles showing the directory
**/
app.get('/d/:dirid', function(req, res) {

  // check if the page id exists
  var dirid = parseInt(req.params.dirid);

  // check if number
  if(dirid === NaN || 
      dirid === undefined || 
        dirid === null) {

    // yes stop it
    return res.status(404).render('notfound');

  }

  // check sanity check just for fun
  if(dirid > AMOUNT_OF_DIRS || 
      dirid == 0) {

    // yes stop it
    return res.status(404).render('notfound');

  }

  // loop it
  res.render('directory', {

    dirid:    dirid

  })

});

/**
* Start listening
**/
app.listen(PORT, ()=>{

  // output logging info, just to be cool
  console.log('Server with', AMOUNT_OF_PAGES, 'pages running on port', PORT)

});