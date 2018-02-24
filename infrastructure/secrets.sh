#!/bin/bash

set -e

kubectl create secret generic mariadb-credentials \
    --from-literal=mysql-root=`openssl rand -base64 32` \
    --from-literal=user=memeventory \
    --from-literal=password=`openssl rand -base64 32`
