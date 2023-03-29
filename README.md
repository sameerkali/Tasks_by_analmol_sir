# Tasks_by_analmol_sir
my manager LinkedIn profile https://www.linkedin.com/in/anmol-kumar-08543a22b/


this is for peactice my skills



**Remove node_modules from git in vscode


Create .gitignore file and add node_modules there:

touch .gitignore && echo "node_modules" >> .gitignore
Remove cached data:

git rm -r --cached .
Update your last commit:

git add .

git commit --amend --no-edit

git push --force-with-lease