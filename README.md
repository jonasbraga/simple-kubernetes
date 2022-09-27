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
 * ```cp .env.example .env``` - Create the .env file with its variables
 * ```npm run build:docker``` - Build the docker image
 * ```npm run start:docker``` - Run the docker container
 * [http://localhost:3000](http://localhost:3000) - Access the application

## Useful commands

Creating local cluster with kind:
```kind create cluster --config=k8s/kind.yaml --name=sd-cluster```

Removing the cluster from the memory
```kind delete clusters sd-cluster```

Creating a new pod based on the yaml file
```kubectl apply -f k8s/pod.yaml```

Deploy new version of image

```docker build -t jonasbraga/kubernets-node-server:<tagVersion> .```

```docker login```

```docker push jonasbraga/kubernets-node-server:<tagVersion>```

Check deployment versions
```kubectl rollout history deployment node-server```

Undo the last deployment (use --to-revision=<revision_number> flag to choose disered version)
```kubectl rollout undo deployment node-server```


Foward traffic to specific port
```kubectl port-forward <TYPE/NAME> 9000:80```

## Overview application

Script:

Deploy application without kubernets
Building the image based on the Dockerfile
```docker build -t node-server-image .```
Running the image (creating the container)
```docker run -p 3000:3000 -d --name node-server-container node-server-image```
Accessing the application
[http://localhost:3000](http://localhost:3000)

Talk about kubernets structure
Explain kind
```kind create cluster --config=k8s/kind.yaml --name=sd-cluster```

Explain pod
```kubectl apply -f k8s/pod.yaml```
```kubectl get pods```
```kubectl describe pod <pod_id>```
```kubectl delete pod <pod_id>```
```kubectl get pods``` // There's nothing left

Talk about ReplicaSet (replicas and so on)
Implement Deployment
```kubectl apply -f k8s/deployment.yaml```
```kubectl get deployments```
```kubectl get replicasets```
```kubectl get pods```
Show replicaset creating new pod automatically
```kubectl delete pod <pod_id>```
```kubectl get pods```
Change image in deployment and show the deployment recreating the pods with the new version
```kubectl apply -f k8s/deployment.yaml```
```kubectl get pods```
```kubectl describe pod <pod_id>```
```kubectl delete pod <pod_id>```


========================================================


Creating local cluster with kind:
```kind create cluster --config=k8s/kind.yaml --name=sd-cluster```

Applying pvc
```kubectl apply -f k8s/pvc.yaml```

Applying deployment
```kubectl apply -f k8s/deployment.yaml```

Applying service
```kubectl apply -f k8s/service.yaml```

Fowarding the traffic to our service, then it will balance the request through all our nodes and pods
```kubectl port-forward service/node-server-service 9000:80```




