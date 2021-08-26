FROM alpine
MAINTAINER RunOps first@runops.io 

# java / curl
RUN apk add --update-cache curl openjdk11-jre

# mysql / postgres
RUN apk add mysql-client postgresql-client

# python / pip / boto3
RUN apk add py3-pip
RUN pip3 install -U pip boto3 pytz

# mongodb
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb yaml-cpp=0.6.2-r2

# vault
RUN apk add vault libcap
RUN setcap cap_ipc_lock= /usr/sbin/vault

# kubectl
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
RUN install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

RUN rm -rf /var/cache/apk/*

ADD target/uberjar/agent-0.1.0-SNAPSHOT-standalone.jar /agent/app.jar

CMD ["java", "-jar", "/agent/app.jar"]
