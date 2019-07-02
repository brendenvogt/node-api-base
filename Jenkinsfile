pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Hello'
      }
    }
    stage('Do Stuff') {
      parallel {
        stage('Do Stuff') {
          steps {
            sleep 10
          }
        }
        stage('Do More Stuff') {
          steps {
            sleep 12
          }
        }
      }
    }
    stage('Finish') {
      parallel {
        stage('Finish') {
          steps {
            echo 'Done'
          }
        }
        stage('error') {
          steps {
            echo 'yay'
          }
        }
      }
    }
  }
}