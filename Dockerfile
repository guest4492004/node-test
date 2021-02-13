FROM node:10.13-alpine
WORKDIR /root
COPY index.js .
EXPOSE 8080
CMD ["node", "index.js"]
