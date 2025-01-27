# Library Application 
## Objective
This project demonstrates the process of automating, containerizing, and deploying a simple React application using modern DevOps practices. The goal is to set up a basic frontend application, containerize it using Docker, automate the CI/CD pipeline with GitHub Actions, and deploy the containerized app to Minikube using Kubernetes.

## Application Overview
The application is a basic React frontend that displays a static list of books. The project focuses on deployment and automation rather than extensive development.

## Project Structure

## Steps to Build and Run the Application Locally

### 1. Clone the repository, Install the Dependencies and Run Locally
```bash 
git clone git@github.com:steve2030/library-frontend.git
cd library-frontend
npm install
npm start
 ```
### 2. Dockerization.
```bash 
#Build Docker image.
 docker build -t steve001steve/library:latest .
 #Push to DockerHub on a private Repository
 docker push steve001steve/library:latest
```
### 3. Deployment
#### Install minikube locally WSL2 preferred.
``` bash
curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64

```
#### Start Minikube
 ```bash
minikube start
```

#### Confirm that Minikube is Working properly
 ```bash
minikube status
```
#### Create a namespace 
```bash
 kubectl create ns library
```
#### Create a kubernetes folder Add and Apply the manifest files in that specific namespace
```bash
mkdir kubernetes
cd kubernetes
```
```bash
 kubectl apply -f kubernetes/deployment.yaml -n library
```
```bash
 kubectl apply -f kubernetes/service.yaml -n library
```
#### Confirm that the pods are running
 ```bash 
kubectl get pods -n library
```
#### Check the service
```python
 kubectl get svc -n library
```

#### Access the application from the Browser.
##### Get minikube Ip address.
```bash
 minikube ip
```
```bash
 Http://<minikube ip>30001
```
###### or 
 ```bash 
minikube service library-app-service --url -n library
```
 or 
```bash
 kubectl port-forward svc/library-app-service 8080:80 -n library
```
Access on the Browser
 ```bash
http://localhost/8080
```




