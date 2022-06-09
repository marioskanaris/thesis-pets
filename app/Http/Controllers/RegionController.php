<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;

class RegionController extends Controller
{
    /**
     * Display a listing of the regions.
     *
     * @return Collection
     */
    public function __invoke()
    {
        return new Collection(config('regions'));
    }
}
