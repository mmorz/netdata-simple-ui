#!/bin/bash

set -e

npm run compile
sudo cp -r dist/* /usr/share/netdata/custom/
sudo chown -R netdata:netdata /usr/share/netdata/custom
