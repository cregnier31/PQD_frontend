#!/bin/ksh
for file in `ls *.png`; do 
    convert -resize 40% $file resize/$file
done
