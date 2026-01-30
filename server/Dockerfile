# use an official image of Node.js
From node:22-alpine

#set working directory inside the container
WORKDIR /app

#copying the package.json file in the working directory
COPY package*.json ./

#install dependencies	
RUN npm install

COPY . .

ENV PORT=8080

CMD ["npm", "start"]
