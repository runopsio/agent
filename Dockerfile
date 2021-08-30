FROM python:3.8-slim
MAINTAINER RunOps first@runops.io 

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

RUN pip3 install -U boto3==1.18.31 \
    pytz==2021.1 \
    pandas==1.3.2

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

ADD target/uberjar/agent-0.1.0-SNAPSHOT-standalone.jar /agent/app.jar

CMD ["java", "-jar", "/agent/app.jar"]
