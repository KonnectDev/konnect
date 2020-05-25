<?php

    chdir(__DIR__);


    chdir('/opt/bitnami/apache2/htdocs/');
    echo 'GIT fetch' . PHP_EOL;

    echo shell_exec('git fetch --all');
    echo shell_exec('git reset --hard master');
    echo shell_exec('git pull');
    echo shell_exec('git checkout master');
    echo shell_exec('sudo chmod -R 777 storage/');
    echo shell_exec('php artisan migrate');

//    echo 'Composer & NPM' . PHP_EOL;
//    echo shell_exec('composer install --optimize-autoloader --no-dev');
//    echo shell_exec('composer update');
//    echo shell_exec('npm install');
//    echo shell_exec('npm run-script build');
//

