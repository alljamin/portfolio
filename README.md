# Portfolio

The main aim of this project was to find a best way to capture my work and present it to the public. I ended up creating a custom theme for [Jekyll](https://jekyllrb.com/). Later on I introduced [Gulp.js](https://gulpjs.com/), because certain funcationality, important to me, is still missing in Jekyll for ex. live browser refresh, vendor autoprefix, javascript minification, image minification, better handling of sass and more advanced watch tasks.

## Contents

- [Usage](#usage)
  - [Updating installed tools](#updating-installed-tools)
  - [Clean install](#clean-install)
    - [Git](#git)
    - [Jekyll](#jekyll)
    - [Gulp.js](#gulp.js)
- [Workflow](#workflow)
- [Extra](#extra)
- [Author](#author)
- [Ownership](#ownership)

## Usage

These instructions only cover macOS 10.13.1 and later. Windows users are encouraged to update this readme via pull requests. These are not universal intructions and perhaps some advanced users may find better ways setup the project.

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
3. `export PATH=/usr/local/bin:$PATH`
4. `launchctl setenv PATH “/usr/local/bin:$PATH”`
3. Install separate from OS version of Ruby: `brew install ruby`
4. Install Jekyll: `gem install jekyll` (no need to use `sudo`)
5. Update all system gems: `gem update --system`

Good source for troubleshooting: [Jekyllrb official docs](https://jekyllrb.com/docs/troubleshooting/#jekyll-amp-mac-os-x-1011)

#### Gulp.js

1. Install [Node.js](https://nodejs.org/en/).
   1. `npm config get prefix` should return `/usr/local` if it returns just `/usr` check [this](https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory) before proceeding further.
   2. ` sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}` changing the ownership of lib/node_modules, bin, and share folders.
2. Install [Gulp.js](https://gulpjs.com/) globally by running `npm install gulp-cli -g`.
3. Install all dependencies specified in `package.json` by running `npm install`.
4. Check for updates for all devDependecies by installing [npm-check-updates].(https://www.npmjs.com/package/npm-check-updates) package `npm install npm-check-updates -g`
   1. Run `ncu` to see what updates are available.
   2. Run `ncu -u` to install all available updates.
5. Run project by typing 'gulp'

Good source for setting correct permissions [Node.js official docs](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

## Workflow

Gulp takes files from `_assets` directory (don't rename this directory) applies all the specified Gulp tasks, creates `assets` directory and copies optimized assets to this directory. 

Gulp triggers `jekyll build` and Jekyll grabs everything from `assets` directory and copies to `_site/assets` directory. 

Deploying to Github Pages with `git subtree push --prefix _site origin gh-pages`.

All the changes are tracked by Gulp Watch (yes, even `_config.yml`) and applied straight away with live browser reloading.

For more information look into the contents of `gulpfile.js`.

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


