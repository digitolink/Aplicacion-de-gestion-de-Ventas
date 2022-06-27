FROM node 16.14.0

EXPOSE 8080

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/project/frontend
RUN npm install
RUN npm build
RUN rm .gitignore package.json package-lock.json public README.md src node_modules -rf


WORKDIR /usr/src/app/project/backend/src
RUN npm install --omit=dev
ENTRYPOINT ["npm", "start"]