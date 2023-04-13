#!/bin/bash

# Envia os resultados de teste em Json, para o servidor do Allure
# Dessa forma é possível visualizar os resultados em formato Web

ALLURE_SERVER='https://allure.conexa.com.br'
EXECUTION_TYPE='default-icon'

ALLURE_RESULTS_DIRECTORY='__Env.Allure.Results.Directory__'
PROJECT_ID='__Env.Allure.Project.Id__'
EXECUTION_NAME='__Env.Allure.Execution.Name__'
EXECUTION_FROM='__Env.Allure.Execution.From__'
SECURITY_USER='__Env.Allure.Security.User__'
SECURITY_PASS='__Env.Allure.Security.Pass__'

echo "***************************** LOGIN *****************************"
  set -o xtrace
  curl -X POST "$ALLURE_SERVER/allure-api/allure-docker-service/login" -H 'Content-Type: application/json' -d "{ "\""username"\"": "\""$SECURITY_USER"\"", "\""password"\"": "\""$SECURITY_PASS"\""}" -D cookiesFile


echo "***************************** EXTRACTING: CSRF-ACCESS-TOKEN and ACCESS_TOKEN_COOKIE *****************************"
  CRSF_ACCESS_TOKEN_VALUE=$(cat cookiesFile | grep -o 'csrf_access_token.*'| grep -oP '(?<=\=).*?(?=;)')
  ACCESS_TOKEN_COOKIE_VALUE=$(cat cookiesFile | grep -o 'access_token_cookie.*' | grep -oP '.*(?=\; Secure)')


echo "***************************** CLEAN-RESULTS *****************************"
  curl -X GET "$ALLURE_SERVER/allure-api/allure-docker-service/clean-results?project_id=$PROJECT_ID" -H "X-CSRF-TOKEN: $CRSF_ACCESS_TOKEN_VALUE"  -H "Cookie: $ACCESS_TOKEN_COOKIE_VALUE"


echo "***************************** FILES TO SEND *****************************"
FILES_TO_SEND=$(ls -dp $ALLURE_RESULTS_DIRECTORY/* | grep -v /$)

if [ -z "$FILES_TO_SEND" ]; then
  exit 1
fi

i=0
declare -a FILES
for FILE in $FILES_TO_SEND; do
  i=$((i+1))
  n=$((i / 100))
  FILES[n]+="-F files[]=@$FILE "
done

for ((i=0;i<${#FILES[*]};i++)); do


echo "***************************** SEND-RESULTS *****************************"
  set -o xtrace
  curl -X POST "$ALLURE_SERVER/allure-api/allure-docker-service/send-results?project_id=$PROJECT_ID" -H 'Content-Type: multipart/form-data' -H "X-CSRF-TOKEN: $CRSF_ACCESS_TOKEN_VALUE"  -H "Cookie: $ACCESS_TOKEN_COOKIE_VALUE" ${FILES[i]} -ik
done


echo "***************************** GENERATE-REPORT *****************************"
  set -o xtrace
  curl -X GET "$ALLURE_SERVER/allure-api/allure-docker-service/generate-report?project_id=$PROJECT_ID&execution_name=$EXECUTION_NAME&execution_from=$EXECUTION_FROM&execution_type=$EXECUTION_TYPE" -H "X-CSRF-TOKEN: $CRSF_ACCESS_TOKEN_VALUE" -H "Cookie: $ACCESS_TOKEN_COOKIE_VALUE" -ik