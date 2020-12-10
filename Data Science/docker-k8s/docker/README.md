# Docker
**TODO 6 Dec** read on docker-compose
## What is Docker?
> If it works on your machine, it **will** work on the other machine.

- A tool for running applications in an isolated environment
- Similar to VM **but**:
    - Runs containers in seconds instead of minutes
    - Less resources results in less disk space
    - Uses less memory
    - Doesn't require an entire operating system
- Standard for software deployment

## Docker Image
- **An image is a template for creating an environment**
- Has everything needed to run the apps
- OS, software, app code
- **Dockerfile** is used to build our own Image
- Have tags and versioning
    - Allows control of image version
    - Avoids breaking changes

### Alpine Images
- Based on Alpine Linux
- Image size is much smaller

```sh
# example here: check out the tags on Docker Hub
docker pull nginx:alpine
docker pull node:lts-alpine
```

## Containers
- An **abstraction** at the app layer that packages code and dependencies together
- A running instance of an image
    - The major difference between a container and an image is _the top writable layer_
    - All writes to the container are stored in this writable layer
    - Underlying image remains unchanged
    - See this [link](https://docs.docker.com/storage/storagedriver/#images-and-layers) for a read
- Multiple containers can run on the same machine
- Share the OS kernel with other containers, each running as isolated processes in user space

**In contrast**,

- VMs are an abstraction of physical hardware turning one server into many servers
- The hypervisor allows multiple VMs to run on a single machine
- Each VM includes a full copy of an operating system, the application, necessary binaries and libraries - taking up tens of GBs
- VM can also be slow to boot

## Volumes
- Allows sharing of data, files, and folders
- Between **host** and **container**
- Between **containers**

## Get Started
> Example below uses nginx image, with Node.js and Express following the [tutorial](https://www.youtube.com/watch?v=Wf2eSG3owoA) in `sample-website` and `user-service-api`

### [Installation](https://docs.docker.com/get-docker/)
`docker --version`: Show version of Docker

### Images and Containers ([docs](https://docs.docker.com/reference/))

#### Common Images Commands
```bash
# Pull an image from a registry
docker pull repository:tag
docker pull nginx:1.19.5-alpine
# List images
docker images
docker image ls
# Remove an image
docker rmi image_id
docker image rm image_id
# Remove dangling images
docker image prune
```

#### Creating / Running Containers
```bash
# Use nginx as an example: default listens on port 80
docker run nginx:latest
# -d Detach mode: Run container in background and print container ID
docker run -d nginx:latest
# --name Name the container
docker run -d --name ctnr_name nginx:latest
# -p Exposing (multiple) ports: host_port:container_port
# map host port 3000 to container port 80
# map host port 8080 to container port 80
docker run -d --name ctnr_name -p 3000:80 -p 8080:80 nginx:latest
```

#### Creating Containers with volumes
##### Bind mount a volume
1. Navigate to the volume you want to mount on the host machine. \
   *Example: go to `sample-website` folder and run a container of nginx image*
2. Specifiy the volume in the following code snippet:
```bash
docker run -v host_volume_name:ctnr_path:options nginx:latest
# pwd: get current folder path
# ${pwd} for Windows PowerShell
# "$(pwd):container_path:options" for Linux to avoid invalid reference format
# ro: read-only option
docker run -v ${pwd}:/usr/share/nginx/html:ro nginx:latest -d -p 8080:80 nginx:latest
```

##### Mount volumes from another container
```bash
docker run --name this_ctnr_name --volumes-from another_ctnr_name -d -p 8081:80 nginx
```


#### Starting / Stopping Containers
```bash
# Start / Stop containers
docker start ctnr_name/id
docker stop ctnr_name/id
```

#### Removing Containers
```bash
# container should have stopped
docker rm ctnr_name/id
# Remove all containers (no container running)
# use -f to remove running containers
docker rm $(docker ps -aq)
docker rm -f $(docker ps -aq)
```

#### Managing Containers
```bash
# List running containers
docker ps
docker container ls

# List all containers including stopped
docker ps -a

# List all container ids
docker ps -aq

# Run a command in a running container
# create an interactive bash shell
docker exec -it ctnr_name bash
```

### Dockerfile and Building Images
- A Docker image is built up from **a series of layers**
- Each layer represents an instruction in the image's Dockerfile
- These layers (also called intermediate images) are generated when the commands in the Dockerfile are executed during the Docker image build
- They can be **re-used** by multiple images saving disk space and reducing time to build images while maintaining their integrity.

#### Creating a Dockerfile
```Dockerfile
# Example in sample-website folder
# sample website from Bootstrap

# from the nginx image: latest tag
FROM nginx:latest
# add all files at the current path
# to container path /usr/share/nginx/html
ADD . /usr/share/nginx/html
```

#### Caching and Layers in Dockerfile
> Set up Dockerfile to make use of caching so that rebuilding images are more efficient.

```Dockerfile
# Example in user-service-api folder

# from the Node.js image
FROM node:latest
# sets the working directory of RUN, CMD, ADD, etc.
# sets it to /app folder
WORKDIR /app

# make use of possible CACHING here: avoid npm install every time when building image
# add package.json and package-lock.json to the working directory
ADD package*.json .
# run command: npm install to install Express
RUN npm install

# add all files at the current path
# to the current working directory (app)
ADD . .
# default cmd when executing the container
CMD node index.js
```

#### Docker Build
##### `<none>:<none>` Images
1. Intermediate image layers that are useful to rebuild similar images (similar to caching).
2. **Dangling** Images that were not tagged when rebuilding images with the exact same `name:tag`. \
    **Remove with `docker image prune`**

```bash
# go to the sample-website folder containing Dockerfile
# --tag or -t: name and tag of the image
# . specify the path as current folder
docker build --tag website:latest .
```

#### Tagging Images
```bash
# the target image will point to the same source image
docker tag sourceimg:tag targetimg:tag
```

#### .dockerignore
Exclude files and folders to add to images using `ADD` in Dockerfile.
```dockerignore
# example of .dockerignore file in user-service-api
node_modules
Dockerfule
.git
```

### Other useful commands
```bash
# detailed info of the container
docker inspect ctnr_name
# get the logs of the container
docker logs ctnr_name

docker exec -it ctnr_name sh
```

### Docker Compose
**TODO**

## Docker Registries
- Highly scalable server side application that **stores and distributes** Docker images
- Used in CI/CD (Continuous Integration/Continuous Delivery) Pipeline
- Private or public registries
- [Docker Hub](https://hub.docker.com/), [quay.io](https://quay.io/), [Amazon ECR](https://aws.amazon.com/ecr/)
- `push` and `pull` similar to Git
