FROM node

WORKDIR /usr/app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/ClauHenrique/front-dev-nuvem.git

WORKDIR /usr/app/front-dev-nuvem

EXPOSE 5173

CMD ["sh", "-c", "git pull && npm install && npm run dev -- --host"]
