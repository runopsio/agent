FROM python:3.8-slim
MAINTAINER RunOps first@runops.io

ARG VERSION

RUN apt-get update -y && \
    apt-get install -y \
        apt-utils \
        software-properties-common \
        curl \
        gnupg \
        gnupg2 \
        openjdk-11-jre \
        default-mysql-client \
        postgresql-client-13

RUN pip3 install -U \
    boto3==1.18.31 \
    pytz==2021.1 \
    pandas==1.3.2 \
    SQLAlchemy==1.4.23 \
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
    paramiko==2.7.2 \
    packaging==20.9 \
    pep517==0.9.1 \
    progress==1.5 \
    pyparsing==2.4.7 \
    pytoml==0.1.21 \
    retrying==1.3.3 \
    toml==0.10.2 \
    webencodings==0.5.1

# mongodb
RUN curl -s https://www.mongodb.org/static/pgp/server-4.0.asc | apt-key add -
RUN echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list && \
    apt-get update -y && \
    apt-get install -y mongodb-org libyaml-cpp0.6

# vault
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
RUN apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" && \
    apt-get update && apt-get install -y vault=1.5.9 libcap2-bin && \
    setcap cap_ipc_lock= /usr/bin/vault && \
    ln -s /usr/bin/vault /usr/sbin/vault # to maintain compatibility

# kubectl
RUN curl -L "https://dl.k8s.io/release/v1.22.1/bin/linux/amd64/kubectl" -o /usr/local/bin/kubectl && \
    chmod 755 /usr/local/bin/kubectl

RUN rm -rf /var/lib/apt/lists/*

ADD target/uberjar/agent-$VERSION-standalone.jar /agent/app.jar

CMD ["java", "-jar", "/agent/app.jar"]
