<?php

    chdir(__DIR__);
    chdir('/var/www/html/');
    echo 'GIT fetch' . PHP_EOL;
    echo shell_exec('git fetch --all');
    echo shell_exec('git clone https://github.com/KonnectDev/konnect.git');

    echo 'Composer & NPM' . PHP_EOL;
    echo shell_exec('composer install');
    echo shell_exec('composer update');
    echo shell_exec('npm install');
    echo shell_exec('npm run build --modern');


