
# Cypress + Jenkins (CI)

This is a small and basic proyect, which there have no funcionalities 
but a lot of Funcional tests.


## Features

- Cypress 10
- Node Js 19.2.0
- Docker (Jenkins)


## Deployment

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
