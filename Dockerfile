FROM node:17-alpine3.12
WORKDIR /usr/src/app
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "start"]
