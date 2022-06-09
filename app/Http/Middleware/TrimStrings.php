<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\TrimStrings as Middleware;

class TrimStrings extends Middleware
{
    /**
     * The names of the attributes that should not be trimmed.
     *
     * @var array
     */
    protected $except = [
        'password',
        'password_confirmation',
        'alias',
        'aliases'
    ];

    protected function transform($key, $value)
    {
        $exceptFound = collect($this->except)->map(function ($exc) use ($key) {
            if (strpos($key, $exc) !== false) {
                return true;
            }
        })->contains(true);

        if ($exceptFound) {
            return $value;
        }

        return is_string($value) ? trim($value) : $value;
    }
}
