FROM node:19-alpine
WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install
COPY . .
EXPOSE 3000
RUN npm config set unsafe-perm true 
CMD ["npm", "run", "serve"]