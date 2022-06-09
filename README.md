## Docker setup

The application is set to be run on Docker environment. It is inspired
by [Laravel Sail](https://laravel.com/docs/8.x/sail).

You can call commands with `./bin/sail` or put an alias in `.bash_pofile`

`alias sail='bash ./bin/sail'`

```
# up docker environment
sail up -d --build

# stop docker environment
sail down

# list all commands
sail artisan

# use console artisan commands
sail artisan <command_name>

# use php-cli
sail php <command_name>  # "sail php -v"

# npm commands
sail npm run watch
```

For macOS users you need to set dedicated `COMPOSE_FILE=docker-compose-mac.yml` file in `.env` file. This file uses NFS
sync, and you need to ensure that
you [expose necessary volumes](https://blog.fingo.pl/speed-up-docker-using-nfs-volumes/)

# Init project

Before running init commands ensure you made all necessary changes in `.env` file

NOTE: if you are working on Linux you need to run this command first:

`sudo chown -R www-data:www-data ./storage`

After this you may run

`sail composer install`

`sail npm install`

`sail artisan migrate:fresh`

`sail artisan db:seed`

### .env Parameters

You can change variables provided in .env.example whatever you need. You need to copy this file with `cp .env.example .env` command
This file does not contain all possible variables, but you can see all possible variables in docker-compose.yml file

Please note that you need to set the value of the APP_LOCAL_PATH variable according to your absolute path to the html directory inside the project
