#!~/.brew/bin/bash

echo $BASH_VERSION
if [ -z "$1" ]
then
	echo "I need an IP address"
else
	cd scraped
	#mkdir ./scraped ; cd ./scraped
	#wget -np -r -A "README*" -nd -l 0 -e robots=off http://$1/.hidden/
	index=`ls | grep README | wc -l`
	readme="README."
	while [ $index != 0 ]
	do
		str=$readme$index
		echo " -n toto"
		#`cat $str | grep flag`
		index=$(($index-1))
	done
fi
