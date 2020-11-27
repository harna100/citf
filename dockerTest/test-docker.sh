#!/bin/sh
maxSleep=30

mongoSuccess=false
backendSuccess=false
frontendSuccess=false
nginxSuccess=false
nginxFrontendSuccess=false
frontendDevServerSuccess=false


for i in `seq 1 $maxSleep`;
do
    # prod doesn't need dev server check
    if [ "$ENV" = "PROD" ]; then
        echo "In Prod"
        frontendDevServerSuccess=true
        frontendSuccess=true
    elif ! [ $frontendDevServerSuccess = true ]; then
        echo "In dev"
        nc -z frontend 4200 && frontendDevServerSuccess=true
    fi

    if ! [ $frontendSuccess = true ]; then
        # try to get the title of the page
        echo "wget -qO- frontend:4200"
        wgetOut=$(wget -qO- frontend:4200 | grep title)
        # search the title for expected, echo the title for logs and set flag to true
        echo $wgetOut | grep $TITLE_NAME && echo $wgetOut && frontendSuccess=true
    fi

    if ! [ $nginxSuccess = true ]; then
        nc -z webserver 80 && nginxSuccess=true
    fi

    if ! [ $nginxFrontendSuccess = true ]; then
        # try to get the title of the page
        echo "wget -qO- webserver:80"
        wgetOut=$(wget -qO- webserver:80 | grep title)
        echo $wgetOut
        # search the title for expected, echo the title for logs and set flag to true
        echo $wgetOut | grep $TITLE_NAME && echo $wgetOut && nginxFrontendSuccess=true
    fi

    if ! [ $mongoSuccess = true ]; then
        nc -z mongo 27017 && mongoSuccess=true
    fi


    if ! [ $backendSuccess = true ]; then
        nc -z backend 3000 && backendSuccess=true
    fi

    if
        [ $mongoSuccess = true ] &&
        [ $backendSuccess = true ] &&
        [ $frontendSuccess = true ] &&
        [ $nginxSuccess = true ] &&
        [ $nginxFrontendSuccess = true ] &&
        [ $frontendDevServerSuccess = true ]; then
        echo "All Services running"
        exit 0
    fi

    sleep 1

    if [ "$i" = "$maxSleep" ]; then
        echo "Max sleep reached"
    fi
done

echo "Some Services failed to start"
echo "mongoSuccess: $mongoSuccess"
echo "backendSuccess: $backendSuccess"
echo "frontendSuccess: $frontendSuccess"
echo "nginxSuccess: $nginxSuccess"
echo "nginxFrontendSuccess: $nginxFrontendSuccess"
echo "frontendDevServerSuccess: $frontendDevServerSuccess"
exit 1
