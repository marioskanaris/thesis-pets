<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\LostPetFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\LostPet\LostPetResource;
use App\Http\Resources\Visitor\LostPet\LostPetCollection;
use App\Models\LostPet;
use Illuminate\Http\Request;

class LostPetController extends Controller
{
    /**
     * Display a listing of pets for lostPet.
     *
     * @param  Request  $request
     * @param  LostPetFilters  $lostPetFilters
     *
     * @return LostPetCollection
     */
    public function index(Request $request, LostPetFilters $lostPetFilters): LostPetCollection
    {
        $lostPets = LostPet::filter($lostPetFilters)->get();

        return new LostPetCollection($lostPets);
    }

    /**
     * Display a pet for lostPet.
     *
     * @param  Request  $request
     * @param  LostPet  $lostPet
     *
     * @return LostPetResource
     */
    public function show(LostPet $lostPet): LostPetResource
    {
        return new LostPetResource($lostPet);
    }
}
