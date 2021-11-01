FROM ubuntu:focal-20210827
MAINTAINER RunOps first@runops.io

ARG VERSION

ENV DEBIAN_FRONTEND=noninteractive
ENV ACCEPT_EULA=y
ENV PATH="/opt/mssql-tools/bin:${PATH}"

ADD checksums/* /tmp/

# http://bugs.python.org/issue19846
# > At the moment, setting "LANG=C" on a Linux system *fundamentally breaks Python 3*, and that's not OK.
ENV LANG C.UTF-8

RUN apt-get update -y && \
    apt-get install -y \
        python3-pip \
        python3-dev \
        apt-utils \
        curl \
        gnupg \
        gnupg2 \
        groff \
        unzip \
        expect \
        lsb-release

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
    curl -sL https://packages.microsoft.com/config/ubuntu/20.04/prod.list | tee /etc/apt/sources.list.d/msprod.list && \
    curl -sL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    curl -sL https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - && \
    curl -sL https://apt.releases.hashicorp.com/gpg | apt-key add - && \
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

RUN apt-get update -y && \
    apt-get install -y \
        mongodb-org-tools mongodb-org-shell libyaml-cpp0.6 \
        vault=1.5.9 libcap2-bin \
        openjdk-11-jre \
        default-mysql-client \
        postgresql-client-13 \
        mssql-tools unixodbc-dev && \
        rm -rf /var/lib/apt/lists/* && \
        setcap cap_ipc_lock= /usr/bin/vault && \
        ln -s /usr/bin/vault /usr/sbin/vault

RUN pip3 install -U \
    boto3==1.18.31 \
    appdirs==1.4.4 \
    CacheControl==0.12.6 \
    chardet==4.0.0 \
    colorama==0.4.4 \
    contextlib2==0.6.0 \
    distlib==0.3.1 \
    distro==1.5.0 \
    html5lib==1.1 \
    lockfile==0.12.2 \
    msgpack==1.0.2 \
    ordered-set==4.0.2 \
    pandas==1.3.2 \
    paramiko==2.7.2 \
    packaging==20.9 \
    pep517==0.9.1 \
    progress==1.5 \
    psycopg2-binary==2.9.1 \
    pyparsing==2.4.7 \
    pytoml==0.1.21 \
    pytz==2021.1 \
    requests==2.26.0 \
    SQLAlchemy==1.4.23 \
    retrying==1.3.3 \
    toml==0.10.2 \
    webencodings==0.5.1

ADD target/uberjar/agent-$VERSION-standalone.jar /agent/app.jar

CMD ["java", "-jar", "/agent/app.jar"]
