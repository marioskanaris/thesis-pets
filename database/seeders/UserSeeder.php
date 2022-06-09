<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "Admin",
            "role" => "admin",
            "email" => "admin@email.com",
            "phone" => "6987654321",
            "password" => bcrypt("12345678"),
        ]);
    }
}
