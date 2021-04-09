# Stage 1

FROM node:latest as build-step
# Create app directory
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build --prod

COPY . .

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

# RUN COMMANDS FOR REF ONLY 
# docker build -t ashiwni47/sad-backend .
# docker run -d -it -p 8080:8080/tcp --name sad-backend ashiwni47/sad-backend:latest
#RUN npm run start
