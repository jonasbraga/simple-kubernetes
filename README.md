# Simple Kubernetes

This is just a simple application to apply some learnings from kubernetes course.

## Techs
* [Kubernetes](https://kubernetes.io/)
* [Kind](https://kind.sigs.k8s.io/)
* [Docker](https://www.docker.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)


## Running locally

To be able to simulate the k8s locally you'll first need to install [Docker](https://www.docker.com/), [Kind](https://kind.sigs.k8s.io/) and [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

After that:
 * ```npm run build:docker``` - To build the docker image
 * ```npm run start:docker``` - To run the docker container
 * [http://localhost:3000](http://localhost:3000) - Access the application

