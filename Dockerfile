FROM node:16
WORKDIR /app

COPY package*.json ./
RUN npm install -g vuepress
RUN npm install
COPY . .
EXPOSE 3000

CMD ["vuepress", "dev", "."]
