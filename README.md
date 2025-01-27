# Library Application 
## Objective
This project demonstrates the process of automating, containerizing, and deploying a simple React application using modern DevOps practices. The goal is to set up a basic frontend application, containerize it using Docker, automate the CI/CD pipeline with GitHub Actions, and deploy the containerized app to Minikube using Kubernetes.

## Application Overview
The application is a basic React frontend that displays a static list of books. The project focuses on deployment and automation rather than extensive development.

## Project Structure

## Steps to Build and Run the Application Locally

### 1. Clone the repository, Install the Dependencies and Run Locally
git clone git@github.com:steve2030/library-frontend.git
cd library-frontend
npm install
npm start
### 2. Dockerization.
#### Build Docker image.
 docker build -t steve001steve/library:latest .
#### Push to DockerHub on a private Repository
 docker push steve001steve/library:latest
### 3. Deployment
#### Install minikue locally WSL2 preferred.
#### Start Minikube
 minikube start
#### Confirm that Minikube is Working properly
 minikube status
#### Create a namespace 
 kubectl create ns library
#### Create a kubernetes folder and add deployment and service file.
#### Apply the manifest files in that specific namespace
 kubectl apply -f kubernetes/deployment.yaml -n library
 kubectl apply -f kubernetes/service.yaml -n library
#### Confirm that the pods are running
 kubectl get pods -n library
#### Check the service
 kubectl get svc -n library
#### Access the application from the Browser.
#####get minikube Ip address.
 minikube IP
 Http://<minikube ip>30001
 or 
 minikube service library-app-service --url -n library
 or 
 kubectl port-forward svc/library-app-service 8080:80 -n library
 http://localhost/8080




