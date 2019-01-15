# Portfolio

The main aim of this project was to find a best way to capture my work and present it to the public. I ended up creating a custom theme for [Jekyll](https://jekyllrb.com/). Later on I introduced [Gulp.js](https://gulpjs.com/), because certain funcationality, important to me, is still missing in Jekyll for ex. live browser refresh, vendor autoprefix, javascript minification, image minification, better handling of sass and more advanced watch tasks.

## Contents

- [Getting started](#getting-started)
- [Windows](#windows)
- [MacOS](#macos)
  - [Updating installed tools](#updating-installed-tools)
  - [Clean install](#clean-install)
    - [Git](#git)
    - [Jekyll](#jekyll)
    - [Gulp.js](#gulp.js)
- [Workflow](#workflow)
- [Extra](#extra)
- [Author](#author)
- [Ownership](#ownership)

## Getting started

The instructions below cover Windows 10 and MacOS 10.13.1, and later versions.

## Windows

1. Install [RubyInstaller](https://rubyinstaller.org/downloads/)
2. Run `gem jekyll install bundler`
3. Install [Node.js](https://nodejs.org/en/)
4. Run `npm install`
5. Run `npm install -g gulp-cli`

## MacOS

### Updating installed tools

If you have already installed GCC, Git, Node.js and Gulp.js I would recommend checking for updates and installing all available updates.

- GCC: Download all available updates for [Xcode in App Store](https://itunes.apple.com/au/app/xcode/id497799835?mt=12)
- Git: The easiest way to update Git is to download the latest version from the [official website](https://git-scm.com/)
- Node.js and Gulp.js can be updated by running `npm update -g` 

If any of these tools are missing on your side I would strongly recommend to do a clean install.

### Clean install

Following the order of instructions is recommended to prevent possible errors.

#### Git

1. Install [Git](https://git-scm.com/)
2. [Fork this repository](https://github.com/alljamin/portfolio#fork-destination-box)
3. Clone forked repository to your local machine

#### Jekyll

1. Install command line tools `xcode-select --install`
2. Install [Homebrew](https://brew.sh/)
3. Install rbenv `brew install rbenv`
4. Make rbenv run everytime terminal is open `echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
5. Install Ruby with rbenv `rbenv install 2.5.1`
6. Switch from system Ruby to rbenv `rbenv global 2.5.1`
7. Install Jekyll: `gem install jekyll` (no need to use `sudo`)
8. Update all system gems: `gem update --system`

#### Gulp.js

1. Install [Node.js](https://nodejs.org/en/).
   1. `npm config get prefix` should return `/usr/local` if it returns just `/usr` check [this](https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory) before proceeding further.
   2. `sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}` changing the ownership of lib/node_modules, bin, and share folders.
2. Install [Gulp.js CLI](https://gulpjs.com/) globally by running `npm install gulp-cli -g`.
3. Install all dependencies specified in `package.json` by running `npm install`.
4. Check for updates for all devDependecies by installing [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package `npm install npm-check-updates -g`
   1. Run `ncu` to see what updates are available.
   2. Run `ncu -u` to install all available updates.
5. Run project by typing `gulp`

Good source for setting correct permissions [Node.js official docs](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

## Workflow

Here is what happens when you type `gulp` in terminal:

1. Gulp takes files from `_assets` directory (don't rename this directory) applies all the specified Gulp tasks, creates `assets` directory and copies optimized assets into this directory. 

2. When all assets are built Gulp triggers `jekyll build` and Jekyll grabs everything from `assets` directory and copies to `_site/assets` directory. 

3. When Jekyll is built, Gulp executes a watch task and tracks changes (yes, even `_config.yml`) and applies them straight away with live browser reloading.

To push all changes to `master` and `_site` contents to `gh-pages` branches, `package.json` has a handy script called `deploy`. You can call it by `npm run deploy`. 

For more information look into the contents of `gulpfile.js` and `package.json`.

## Extra

- If anyone is using [Visual Studio Code](https://code.visualstudio.com/) I would recommend installing a [SASS syntax indentation and highlighting extension](https://github.com/robinbentley/vscode-sass-indented).
- If you decide to create your own project based on my, and host it on Github Pages, you might face issues with relative links. To solve this you need to do two changes one in `_config.yml` and second in `gulpfile.js`. In `_config.yml` you need to change:
```
baseurl: /YOUR_GITHUB_REPOSITORY_NAME
url: YOUR_GITHUB_USERNAME.github.io
```
  In `gulpfile.js` you'll need to create tasks Jekyll separate for local development and Github Pages like so:
```
gulp.task('build:jekyll:dev', function(callback) {
     var shellCommand = 'jekyll build --incremental --baseurl "" ';
    
     return gulp.src('')
         .pipe(run(shellCommand))
         .on('error', gutil.log);

     callback();
 });

gulp.task('build:jekyll:prod', function(callback) {
    var shellCommand = 'jekyll build --incremental';
    
    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);

    callback();
});
```
Calling `build:jekyll:dev` will rewrite the `_config.yml` baseurl and keep relative links intact.


## Author

Aleksandr Ljamin
- https://github.com/alljamin
- https://twitter.com/alljamin

## Ownership

Bits and pieces of code are used from the following awesome projects:
- [Poole Hyde](https://github.com/poole/hyde) built by [Mark Otto](https://github.com/mdo). Open sourced under the [MIT license](LICENSE.md). 
- [Forty Jekyll theme](https://github.com/andrewbanchich/forty-jekyll-theme) built by [Andrew Banchich](https://github.com/andrewbanchich) based on [Forty HTML5 theme](https://html5up.net/forty) by [HTML5UP](https://html5up.net/). Under [Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/).
- Inspiration on CSS transitions from [Riley Carroll](http://rileycarroll.co/).
- Jekyll and Gulp integration is based on the [post](https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html) by [Anne Tomasevich](https://github.com/AnneTee).


