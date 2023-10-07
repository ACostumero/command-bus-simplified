FROM node:18.14.0

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install -g @angular/cli@16.2.5
RUN npm install --save-dev @angular-devkit/build-angular@16.2.5
 
COPY . .
 
CMD ["npm", "start"]
EXPOSE 4200/tcp