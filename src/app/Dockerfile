# a dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.

# base image as a starting point for every other image
FROM node:latest AS build

# workdir creates and sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
WORKDIR /app
# pwd: /app


# copy {context} {working directory}
COPY . .

RUN npm install
RUN npm run build

# Stage 2
#Obtain a new base image for a new environment
FROM nginx:latest AS RUN

# copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

#for HTTP the port is 80, for HTTPS the port is 443 typically
EXPOSE 80