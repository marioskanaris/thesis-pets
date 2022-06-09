<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\FoundPetFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\FoundPet\FoundPetResource;
use App\Http\Resources\Visitor\FoundPet\FoundPetCollection;
use App\Models\FoundPet;
use Illuminate\Http\Request;

class FoundPetController extends Controller
{
    /**
     * Display a listing of pets for foundPet.
     *
     * @param  Request  $request
     * @param  FoundPetFilters  $foundPetFilters
     *
     * @return FoundPetCollection
     */
    public function index(Request $request, FoundPetFilters $foundPetFilters): FoundPetCollection
    {
        $foundPets = FoundPet::filter($foundPetFilters)->get();

        return new FoundPetCollection($foundPets);
    }

    /**
     * Display a pet for foundPet.
     *
     * @param  Request  $request
     * @param  FoundPet  $foundPet
     *
     * @return FoundPetResource
     */
    public function show(FoundPet $foundPet): FoundPetResource
    {
        return new FoundPetResource($foundPet);
    }
}
