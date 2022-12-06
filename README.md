
# Cypress + Jenkins + Sonar (CI)

This is a small and basic proyect, which there have no funcionalities 
but a lot of Funcional tests.


## Features

- Cypress 10
- Node Js 19.2.0
- Docker (Jenkins)
- SonarQube


## Configure Jenkins and Upload proyect to Github.

To run this project we need to install docker in our machine or 
in a cloud machine. We download the docker image from docker hub and
run it.

Once running, we need to upload our project to any repository.

Later, we must return to our Jenkins program and make some configurations

      1. We must install NodeJS, Docker Plugin, and Docker Pipeline (These last are necessary if we want to build our base image from an image docker) 
      2. After, We need to go to Administrator Jenkins > Global Tool configuration
         and in this view, we need to create a NodeJS installation with the node version of our project  
      3. We must create a new Job.
      4. Here (create job), we must create a Pipeline project.
      5. Once created our Pipeline, we need to go to our configurations 
         and activate the option GitHub hook trigger for GITScm polling
      6. Below in Pipeline, we need to set our git repository URL.
         We need to select Pipeline script from SCM and in CSM put GIT
      7. In Repository URL, we need to paste our URL repository
      8. Almost at the end, we need to specify the branch Jenkins will be listening.

With these instructions Jenkins will be ready for be used.

Now, we need to create the Jenkinsfile, this file is important because this
will have the configuration for run our project.

For this, we need to create this file in the root of our project.
This file looks like this.

````
pipeline{
    agent any

    tools{
        nodejs "node_js"
    }
    stages {

        stage("Build"){
            steps{
                git branch: 'main', url: 'https://github.com/acvillazon/cypress_test.git'
                sh 'npm ci'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh "npm run test:headless"
            }
        }
    }
}
````

## Configure SonarQube.

For this exercise, we are quickly going to deploy Sonar + Postgress with Docker using a docker-compose.yml
The file must looks like the next

````
version: '2'
 
services:
  sonarqube:
    image: sonarqube
    ports:
      - "9000:9000"
    networks:
      - sonarnet
    environment:
      - SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar
      - SONARQUBE_JDBC_USERNAME=sonar
      - SONARQUBE_JDBC_PASSWORD=sonar
    volumes:
      - sonarqube_conf:/opt/sonarqube/conf
      - sonarqube_data:/opt/sonarqube/data
      - sonarqube_extensions:/opt/sonarqube/extensions
      - sonarqube_bundled-plugins:/opt/sonarqube/lib/bundled-plugins
      
  db:
    image: postgres
    networks:
      - sonarnet
    environment:
      - POSTGRES_USER=sonar
      - POSTGRES_PASSWORD=sonar
    volumes:
      - postgresql:/var/lib/postgresql
      - postgresql_data:/var/lib/postgresql/data
      
networks:
  sonarnet:
    driver: bridge
 
volumes:
  sonarqube_conf:
  sonarqube_data:
  sonarqube_extensions:
  sonarqube_bundled-plugins:
  postgresql:
  postgresql_data:
````

If for any reason the container have problems, probably you should change the max_map_count of your VM.

````
open powershell
wsl -d docker-desktop
sysctl -w vm.max_map_count=262144
echo "vm.max_map_count = 262144" > /etc/sysctl.d/99-docker-desktop.conf
Restart docker-desktop
````

## Conectar Sonar con Jenkins

The first thing, we need to do is create a new proyecto into Sonar.
Later, we must create a new user with a new token authentication.
That token authentication, we need to put it in the sonar-proyect as a sonar.login
and..... we need to put the same token into the configuration of Sonar Scan (Jenkins), we need to set this token as a credentials

````
sonar.projectKey=Testing_Cypress_2
sonar.host.url=http://localhost:9000
sonar.login=squ_4c8fb90661eb310f2c9d3c99c503328e2250be5f
sonar.sourceEncoding=UTF-8
sonar.sources=.
````
