FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3031
CMD ["yarn", "dev"]  
