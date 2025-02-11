#!/bin/bash

set -o errexit
set -o nounset
set +x

usage() {
    cat <<EOF
Usage: provision.sh [options...]
Options (use one of the following):
 --nomad_sha SHA          full git sha to install from S3
 --nomad_version VERSION  release version number (ex. 0.12.3+ent)
 --nomad_binary FILEPATH  path to file on host
 --nostart                do not start or restart Nomad

EOF

    exit 2
}


INSTALL_DIR=/usr/local/bin
INSTALL_PATH="${INSTALL_DIR}/nomad"
PLATFORM=linux_amd64
START=1
install_fn=

install_from_s3() {
    # check that we don't already have this version
    if [ "$(command -v nomad)" ]; then
        nomad -version | grep -q "${NOMAD_SHA}" \
            && echo "$NOMAD_SHA already installed" && exit 0
    fi

    S3_URL="s3://nomad-team-dev-test-binaries/builds-oss/nomad_${PLATFORM}_${NOMAD_SHA}.tar.gz"
    aws s3 cp --quiet "$S3_URL" nomad.tar.gz
    sudo tar -zxvf nomad.tar.gz -C "$INSTALL_DIR"
    set_ownership
    if [ $START == "1" ]; then sudo systemctl restart nomad; fi
}

install_from_uploaded_binary() {
    # we don't check for reinstallation here because we do it at the user's
    # end, rather than on the remote host, so that we don't bother copying
    # if we don't have to
    sudo cp "$NOMAD_UPLOADED_BINARY" "$INSTALL_PATH"
    set_ownership
    if [ $START == "1" ]; then sudo systemctl restart nomad; fi
}

install_from_release() {
    # check that we don't already have this version
    if [ "$(command -v nomad)" ]; then
        nomad -version | grep -v 'dev' | grep -q "${NOMAD_VERSION}" \
            && echo "$NOMAD_VERSION already installed" && exit 0
    fi

    RELEASE_URL="https://releases.hashicorp.com/nomad/${NOMAD_VERSION}/nomad_${NOMAD_VERSION}_${PLATFORM}.zip"
    curl -sL --fail -o /tmp/nomad.zip "$RELEASE_URL"
    sudo unzip -o /tmp/nomad.zip -d "$INSTALL_DIR"
    set_ownership
    if [ $START == "1" ]; then sudo systemctl restart nomad; fi
}

set_ownership() {
    sudo chmod 0755 "$INSTALL_PATH"
    sudo chown root:root "$INSTALL_PATH"
}

while [[ $# -gt 0 ]]
do
opt="$1"
    case $opt in
        --nomad_sha)
            if [ -z "$2" ]; then echo "Missing sha parameter"; usage; fi
            NOMAD_SHA="$2"
            install_fn=install_from_s3
            shift 2
            ;;
        --nomad_release | --nomad_version)
            if [ -z "$2" ]; then echo "Missing version parameter"; usage; fi
            NOMAD_VERSION="$2"
            install_fn=install_from_release
            shift 2
            ;;
        --nomad_binary)
            if [ -z "$2" ]; then echo "Missing file parameter"; usage; fi
            NOMAD_UPLOADED_BINARY="$2"
            install_fn=install_from_uploaded_binary
            shift 2
            ;;
        --nostart)
            # for initial packer builds, we don't want to start Nomad
            START=0
            shift
            ;;
        *) usage ;;
    esac
done

# call the appropriate instalation function
if [ -z "$install_fn" ]; then echo "Missing install option"; usage; fi
$install_fn
