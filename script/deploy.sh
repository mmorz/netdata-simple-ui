#!/bin/bash

set -e

npm start
sudo cp -r dist/* /usr/share/netdata/custom/
sudo chown -R netdata:netdata /usr/share/netdata/custom
