# phlex-docs
Site and documentation for [Phlex](https://github.com/lxndrdagreat/phlex).

[Read the documentation here.](https://phlex.io)

# Requirements

A [Gulp.js](http://gulpjs.com/) workflow is used for developing the Phlex 
documentation.

- [Phlex](https://github.com/lxndrdagreat/phlex)
- Node.js and npm
- [Gulp](http://gulpjs.com/)

# Building

Clone this repo.

    $ git clone https://github.com/lxndrdagreat/phlex-docs

Make sure Phlex and its dependencies are installed; from the repo folder:

    $ pip install -r ./requirements.txt

Install Gulp and dependencies; again, from the repo folder:

    $ npm install

# Running

Using Gulp:

    $ gulp

This will start the default task, which will build the documentation to the
`docs` folder and will fire up `browser-sync` to allow for live reloads while
edits are being done.
