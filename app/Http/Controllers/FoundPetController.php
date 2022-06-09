<?php

namespace App\Http\Controllers;

use App\Filters\FoundPetFilters;
use App\Http\Requests\FoundPetRequest;
use App\Http\Requests\FoundPetUpdateRequest;
use App\Http\Resources\FoundPet\FoundPetCollection;
use App\Http\Resources\FoundPet\FoundPetResource;
use App\Models\FoundPet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FoundPetController extends Controller
{
    /**
     * Display a listing of the foundPets.
     *
     * @param  Request  $request
     *
     * @return FoundPetCollection
     */
    public function index(Request $request, FoundPetFilters $foundPetFilters): FoundPetCollection
    {
        $foundPets = FoundPet::filter($foundPetFilters)->paginate($request->pageSize);

        return new FoundPetCollection($foundPets);
    }

    /**
     * Store a newly created foundPet in storage.
     *
     * @param  FoundPetRequest  $foundPetRequest
     *
     * @return FoundPetResource
     */
    public function store(FoundPetRequest $foundPetRequest): FoundPetResource
    {
        $foundPet = $foundPetRequest->validated();

        $primaryImage = Storage::disk('local')->put(config('images.found-pets'), $foundPet['primary_image']);
        $foundPet['primary_image'] = basename($primaryImage);

        if (isset($foundPet['secondary_image'])) {
            $secondaryImage = Storage::disk('local')->put(config('images.found-pets'), $foundPet['secondary_image']);
            $foundPet['secondary_image'] = basename($secondaryImage);
        }

        if (isset($foundPet['thirdary_image'])) {
            $thirdaryImage = Storage::disk('local')->put(config('images.found-pets'), $foundPet['thirdary_image']);
            $foundPet['thirdary_image'] = basename($thirdaryImage);
        }

        $foundPet = FoundPet::create($foundPet);

        return new FoundPetResource($foundPet);
    }

    /**
     * Display the specified foundPet.
     *
     * @param  FoundPet  $foundPet
     *
     * @return FoundPetResource
     */
    public function show(FoundPet $foundPet): FoundPetResource
    {
        return new FoundPetResource($foundPet);
    }

    /**
     * Update the specified foundPet in storage.
     *
     * @param  FoundPetUpdateRequest  $foundPetUpdateRequest
     * @param  FoundPet  $foundPet
     *
     * @return FoundPetResource
     */
    public function update(FoundPetUpdateRequest $foundPetUpdateRequest, FoundPet $foundPet): FoundPetResource
    {
        $updatedFoundPet = $foundPetUpdateRequest->validated();

        if (isset($updatedFoundPet['primary_image'])) {
            Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->primary_image);

            $primaryImage = Storage::disk('local')->put(config('images.found-pets'), $updatedFoundPet['primary_image']);
            $updatedFoundPet['primary_image'] = basename($primaryImage);
        }

        if (isset($updatedFoundPet['secondary_image'])) {
            Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->secondary_image);

            $secondaryImage = Storage::disk('local')->put(config('images.found-pets'), $updatedFoundPet['secondary_image']);
            $updatedFoundPet['secondary_image'] = basename($secondaryImage);
        }

        if (isset($updatedFoundPet['thirdary_image'])) {
            Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->thirdary_image);

            $thirdaryImage = Storage::disk('local')->put(config('images.found-pets'), $updatedFoundPet['thirdary_image']);
            $updatedFoundPet['thirdary_image'] = basename($thirdaryImage);
        }

        $foundPet->update($updatedFoundPet);

        return new FoundPetResource($foundPet);
    }

    /**
     * Remove the specified foundPet from storage.
     *
     * @param  FoundPet  $foundPet
     *
     * @return int
     */
    public function destroy(FoundPet $foundPet): int
    {
        Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->primary_image);

        if ($foundPet->secondary_image) {
            Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->secondary_image);
        }

        if ($foundPet->thirdary_image) {
            Storage::disk('local')->delete(config('images.found-pets') . '/' . $foundPet->thirdary_image);
        }

        return $foundPet->delete();
    }
}
