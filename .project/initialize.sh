#!/bin/sh
cd ../;
echo "Preparing to add remote repository:";
git remote add jw-red $1@s193745.gridserver.com@jasonwharff.com:domains/dev.jasonwharff.com/html/jw-red.git;
git push --set-upstream jw-red master;
echo "Added remote repositories:";
git remote -v;
