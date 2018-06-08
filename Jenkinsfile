@Library("SonarqubeLib@master")
import org.technion.sonarqube.*

node('Node1'){
    
    stage('cleanup'){
        //Clean workspace
        cleanWs()
    }
    
    stage('clone repo'){
        //clone project to workspace folder (notice the . after the url)
        if(isUnix()){
            shell("git clone " + "${GIT_URL}" + " .")
        } else {
            bat("git clone " + "${GIT_URL}" + " .")
        }
    }
    
    stage('export profiles'){
        //Script params: 
        //SONARSRV - example: http://localhost:9000
        //PRDIR - the name of the profiles folder, example: sonar-profiles 
        //PROJECTKEY - the project key from sonarQube 
        println("WRITING TO USEFULFILE.TXT")
        writeFile("usefulfile.txt","This file is useful, need to archive itxxx.")

        try {
            def exportProfile = new ExportProfile()
            exportProfile.exportProfile("${SONARSRV}","${WORKSPACE}\\${PRDIR}","${PROJECTKEY}")
        } catch(IOException e) {
            println(e.getMessage())
            currentBuild.result = 'FAILURE'
        }
    }
    
    // in case of failure in previous stage - return
    if (currentBuild.result == 'FAILURE') {
        return
    }
    
    stage('push profile to repository'){
        if(isUnix()){
            shell("git add ${PRDIR}")       
            shell('git diff-index --quiet HEAD || git commit -m "Sonar profiles changes"')
            shell("git push")
        } else {
            bat("git add ${PRDIR}")       
            bat('git diff-index --quiet HEAD || git commit -m "Sonar profiles changes"')
            bat("git push")
        }
    }
}
