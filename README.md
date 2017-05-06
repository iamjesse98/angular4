# angular4
angular4 the latest

## deploy
```
$ ng build # normal
$ ng build --prod # minified
$ npm i -g angular-cli-ghpages
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin git@github.com:<name>/<projectname>.git
$ git push -u origin master
$ ng build --prod --base-href https://<name>.github.io/<projectname>
$ ngh
```
