<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\ShelterFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Shelter\ShelterResource;
use App\Http\Resources\Visitor\Shelter\ShelterPetsCollection;
use App\Http\Resources\Visitor\Shelter\ShelterCollection;
use App\Models\Shelter;
use Illuminate\Http\Request;

class ShelterController extends Controller
{
    /**
     * Display a listing of the shelters.
     *
     * @param  Request  $request
     * @param  ShelterFilters  $shelterFilters
     *
     * @return ShelterCollection
     */
    public function index(Request $request, ShelterFilters $shelterFilters): ShelterCollection
    {
        $shelters = Shelter::where('activated', true)->filter($shelterFilters)->paginate($request->pageSize);

        return new ShelterCollection($shelters);
    }

    /**
     * Display the specified shelter.
     *
     * @param  Shelter  $shelter
     *
     * @return ShelterResource
     */
    public function show(Shelter $shelter): ShelterResource
    {
        return new ShelterResource($shelter);
    }

    /**
     * Display a listing of the shelter pets.
     *
     * @param  Request  $request
     * @param  ShelterFilters  $shelterFilters
     *
     * @return ShelterPetsCollection
     */
    public function pets(Shelter $shelter): ShelterPetsCollection
    {
        $pets = $shelter->pets()->take(4)->get();

        return new ShelterPetsCollection($pets);
    }
}
