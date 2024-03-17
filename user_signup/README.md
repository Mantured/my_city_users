# user_signup BE

### First Installation
- Clone this repo in your environment
- Create a database in MySQL
- In root directory copy .env.example file and rename it to .env
- Open your `.env` file and set the following variables according to your environment configuration
    - `DB_CONNECTION`
    - `DB_HOST`
    - `DB_PORT`
    - `DB_DATABASE`
    - `DB_USERNAME`
    - `DB_PASSWORD`
- In root directory run these commands in order:
    - `composer install`
    - `php artisan key:generate`
    - `php artisan serve` (could be optional, depends on your environment)

