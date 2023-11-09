FROM node:16
WORKDIR /app

COPY package*.json ./
RUN curl -f https://get.pnpm.io/v6.js | node - add --global pnpm
RUN pnpm install
COPY . .

EXPOSE 8080

CMD ["npx", "vuepress", "dev", ".", "--port", "8080"]