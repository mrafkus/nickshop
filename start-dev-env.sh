#!/bin/bash

SCRIPT=`realpath $0`
SCRIPTPATH=`dirname $SCRIPT`

alacritty -e bash -c "i3-msg move container to workspace number 10 && cd ${SCRIPTPATH}/../nickshop-backend && sudo /opt/lampp/lampp startmysql && npx nodemon ./index.js" &
alacritty -e bash -c "i3-msg move container to workspace number 10 && cd ${SCRIPTPATH} && npm run dev" &
