<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\AdoptionFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\Adoption\AdoptionResource;
use App\Http\Resources\Visitor\Adoption\AdoptionCollection;
use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{
    /**
     * Display a listing of pets for adoption.
     *
     * @param  Request  $request
     * @param  AdoptionFilters  $adoptionFilters
     *
     * @return AdoptionCollection
     */
    public function index(Request $request, AdoptionFilters $adoptionFilters): AdoptionCollection
    {
        $adoptions = Adoption::filter($adoptionFilters)->get();

        return new AdoptionCollection($adoptions);
    }

    /**
     * Display a pet for adoption.
     *
     * @param  Request  $request
     * @param  Adoption  $adoption
     *
     * @return AdoptionResource
     */
    public function show(Adoption $adoption): AdoptionResource
    {
        return new AdoptionResource($adoption);
    }

    /**
     * Display the first three pets for adoption.
     *
     * @return AdoptionCollection
     */
    public function threePetsForAdoption(): AdoptionCollection
    {
        $pets = Adoption::take(3)->get();

        return new AdoptionCollection($pets);
    }
}
