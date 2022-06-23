FROM node 16.14.0

EXPOSE 8080

WORKDIR /project/frontend
RUN npm install
RUN npm build
RUN rm .gitignore package.json package-lock.json public README.md src node_modules -rf


WORKDIR /project/backend/src
RUN npm install --omit=dev
ENTRYPOINT ["npm", "start"]