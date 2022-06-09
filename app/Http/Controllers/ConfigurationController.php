<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ConfigurationController extends Controller
{
    public function runMigrations()
    {
        Artisan::call('migrate', ['--force' => true]);
    }
}
