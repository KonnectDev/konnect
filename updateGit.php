<?php

    chdir(__DIR__);


    chdir('/opt/bitnami/apache2/htdocs/');
    echo 'GIT fetch' . PHP_EOL;
    echo shell_exec('cd /opt/bitnami/apache2/htdocs/') . PHP_EOL;
    echo shell_exec('git fetch --all') . PHP_EOL;
    echo shell_exec('git reset --hard master') . PHP_EOL;
    echo shell_exec('git pull') . PHP_EOL;
    echo shell_exec('git checkout master') . PHP_EOL;
    echo shell_exec('sudo chmod -R 777 storage/') . PHP_EOL;
    echo shell_exec('php artisan migrate') . PHP_EOL;

//    echo 'Composer & NPM' . PHP_EOL;
//    echo shell_exec('composer install --optimize-autoloader --no-dev');
//    echo shell_exec('composer update');
//    echo shell_exec('npm install');
//    echo shell_exec('npm run-script build');
//

    echo 'done' . PHP_EOL;

