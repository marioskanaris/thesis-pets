<?php

namespace App\Http\Controllers;

use App\Filters\ShelterFilters;
use App\Http\Requests\ShelterRequest;
use App\Http\Requests\ShelterUpdateRequest;
use App\Http\Resources\Shelter\ShelterCollection;
use App\Http\Resources\Shelter\ShelterResource;
use App\Models\Shelter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $this->authorize('viewAllShelters', Shelter::class);

        $shelters = Shelter::filter($shelterFilters)->paginate($request->pageSize);

        return new ShelterCollection($shelters);
    }

    /**
     * Store a newly created shelter in storage.
     *
     * @param  ShelterRequest  $ShelterRequest
     *
     * @return ShelterResource
     */
    public function store(ShelterRequest $ShelterRequest): ShelterResource
    {
        $shelter = $ShelterRequest->validated();

        $image = Storage::disk('local')->put(config('shelters.images'), $shelter['image']);
        $shelter['image'] = basename($image);

        $shelter = Shelter::create($shelter);

        return new ShelterResource($shelter);
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
     * Update the specified shelter in storage.
     *
     * @param  ShelterUpdateRequest  $shelterUpdateRequest
     * @param  Shelter  $shelter
     *
     * @return ShelterResource
     */
    public function update(ShelterUpdateRequest $shelterUpdateRequest, Shelter $shelter): ShelterResource
    {
        $updatedShelter = $shelterUpdateRequest->validated();

        if (isset($updatedShelter['image'])) {
            Storage::disk('local')->delete(config('shelters.images') . '/' . $shelter->primary_image);

            $image = Storage::disk('local')->put(config('shelters.images'), $updatedShelter['image']);
            $updatedShelter['image'] = basename($image);
        }

        $shelter->update($updatedShelter);

        return new ShelterResource($shelter);
    }

    /**
     * Remove the specified shelter from storage.
     *
     * @param  Shelter  $shelter
     *
     * @return int
     */
    public function destroy(Shelter $shelter): int
    {
        Storage::disk('local')->delete(config('shelters.images') . '/' . $shelter->image);

        return $shelter->delete();
    }
}
