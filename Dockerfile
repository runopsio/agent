FROM ubuntu:focal-20210827
MAINTAINER RunOps first@runops.io

ARG VERSION
ARG NODE_VERSION=16.13.0
ARG CLOJURE_VERSION=1.10.3.1040
ARG ELIXIR_VERSION=1.13.0-1

ENV DEBIAN_FRONTEND=noninteractive
ENV ACCEPT_EULA=y

ADD checksums/* /tmp/

# Common
RUN apt-get update -y && \
    apt-get install -y \
        python3-pip \
        python3-dev \
        locales \
        gosu \
        tini \
        redis-tools \
        apt-utils \
        curl \
        gnupg \
        gnupg2 \
        groff \
        unzip \
        expect \
        lsb-release && \
	adduser runops --system --group

# Node
# https://github.com/nodejs/docker-node/blob/main/16/bullseye/Dockerfile
RUN ARCH= && dpkgArch="$(dpkg --print-architecture)" \
  && case "${dpkgArch##*-}" in \
    amd64) ARCH='x64';; \
    ppc64el) ARCH='ppc64le';; \
    s390x) ARCH='s390x';; \
    arm64) ARCH='arm64';; \
    armhf) ARCH='armv7l';; \
    i386) ARCH='x86';; \
    *) echo "unsupported architecture"; exit 1 ;; \
  esac \
  # gpg keys listed at https://github.com/nodejs/node#release-keys
  && set -ex \
  && for key in \
    4ED778F539E3634C779C87C6D7062848A1AB005C \
    94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
    74F12602B6F1C4E913FAA37AD3A89613643B6201 \
    71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
    8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 \
    C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C \
    DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
    A48C2BEE680E841632CD4E44F07496B3EB3C1762 \
    108F52B48DB57BB0CC439B2997B01419BD92F80A \
    B9E2F5981AA6E0CD28160D9FF13993A75599653C \
  ; do \
      gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys "$key" || \
      gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key" ; \
  done \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
  && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
  && grep " node-v$NODE_VERSION-linux-$ARCH.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
  && tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
  && rm "node-v$NODE_VERSION-linux-$ARCH.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  # smoke tests
  && node --version \
  && npm --version

# kubectl / aws-cli / aws-session-manager
RUN curl -sL "https://dl.k8s.io/release/v1.22.1/bin/linux/amd64/kubectl" -o kubectl && \
        sha256sum -c /tmp/checksum-kubectl.txt --ignore-missing --strict && \
        chmod 755 kubectl && \
        mv kubectl /usr/local/bin/kubectl && \
    curl -sL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.2.42.zip" -o awscli-exe-linux-x86_64-2.2.42.zip && \
        sha256sum -c /tmp/checksum-aws-cli.txt --ignore-missing --strict && \
        unzip -q awscli-exe-linux-x86_64-2.2.42.zip && \
        aws/install && \
        aws --version && \
        rm -rf aws && \
    curl -sL "https://s3.amazonaws.com/session-manager-downloads/plugin/1.2.245.0/ubuntu_64bit/session-manager-plugin.deb" -o session-manager-plugin.deb && \
        sha256sum -c /tmp/checksum-aws-sess-manager-plugin.txt --ignore-missing --strict && \
        dpkg -i session-manager-plugin.deb && \
        rm -f /tmp/* session-manager-plugin.deb

RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ focal-pgdg main" | tee /etc/apt/sources.list.d/pgdg.list && \
    echo "deb [arch=amd64,arm64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list && \
    echo "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list && \
    echo "deb https://cli-assets.heroku.com/apt ./" > /etc/apt/sources.list.d/heroku.list && \
    curl -sL https://cli-assets.heroku.com/apt/release.key | apt-key add - && \
    curl -sL https://packages.microsoft.com/config/ubuntu/20.04/prod.list | tee /etc/apt/sources.list.d/msprod.list && \
    curl -sL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    curl -sL https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - && \
    curl -sL https://apt.releases.hashicorp.com/gpg | apt-key add - && \
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl -fsSLO https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && \
        dpkg -i erlang-solutions_2.0_all.deb

RUN apt-get update -y && \
    apt-get install -y \
        mongodb-mongosh mongodb-org-tools mongodb-org-shell libyaml-cpp0.6 \
        vault=1.5.9 libcap2-bin \
        heroku \
        openjdk-11-jre \
        elixir=$ELIXIR_VERSION \
        default-mysql-client \
        postgresql-client-13 \
        mssql-tools unixodbc-dev && \
        rm -rf /var/lib/apt/lists/* && \
        setcap cap_ipc_lock= /usr/bin/vault && \
        ln -s /usr/bin/vault /usr/sbin/vault

# clojure
RUN curl -sL https://download.clojure.org/install/linux-install-$CLOJURE_VERSION.sh -o clojure-install.sh && \
    sha256sum clojure-install.sh && \
    echo "665e35e8d7dd0996edaba36220fd5048fee95f5155ec0426f628f18770239821 clojure-install.sh" | sha256sum -c - && \
    bash clojure-install.sh && \
    rm clojure-install.sh && \
    clojure -e "(clojure-version)"

RUN npm install --global moment@2.29.1 \
    axios@0.24.0 \
    mongodb@4.2.0 \
    mysql@2.18.1 \
    pg@8.7.1 \
    aws-sdk@2.1038.0 \
    mongoose@6.0.13 \
    moment-timezone@0.5.34 \
    lodash@4.17.21 \
    serve@14.0.1 \
    firebase-admin@10.0.0

RUN pip3 install -U \
    arrow==1.2.1 \
    boto3==1.20.39 \
    appdirs==1.4.4 \
    CacheControl==0.12.6 \
    chardet==4.0.0 \
    colorama==0.4.4 \
    contextlib2==0.6.0 \
    cryptography==36.0.1 \
    distlib==0.3.1 \
    distro==1.5.0 \
    html5lib==1.1 \
    hvac==0.11.2 \
    kubernetes==20.13.0 \
    lockfile==0.12.2 \
    msgpack==1.0.2 \
    ordered-set==4.0.2 \
    openpyxl==3.0.9 \
    pandas==1.3.5 \
    paramiko==2.7.2 \
    packaging==20.9 \
    pep517==0.9.1 \
    progress==1.5 \
    psycopg2-binary==2.9.3 \
    pymssql==2.2.3 \
    PyMySQL==1.0.2 \
    pyparsing==2.4.7 \
    pytoml==0.1.21 \
    pytz==2021.1 \
    PyYAML==6.0 \
    requests==2.27.1 \
    slack-bolt==1.11.2 \
    SQLAlchemy==1.4.23 \
    retrying==1.3.3 \
    toml==0.10.2 \
    PyJWT==2.3.0 \
    webencodings==0.5.1

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen && \
    mkdir -p /.cpcache && \
    chown runops: -R /.cpcache
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8

ENV PATH="/opt/mssql-tools/bin:${PATH}"

ADD target/uberjar/agent-$VERSION-standalone.jar /agent/app.jar
COPY rootfs/ /

# webapp ui
EXPOSE 8000

ENTRYPOINT ["tini", "--"]
CMD ["/usr/local/bin/run-agent.sh"]
