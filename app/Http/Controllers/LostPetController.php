<?php

namespace App\Http\Controllers;

use App\Filters\LostPetFilters;
use App\Http\Requests\LostPetRequest;
use App\Http\Requests\LostPetUpdateRequest;
use App\Http\Resources\LostPet\LostPetCollection;
use App\Http\Resources\LostPet\LostPetResource;
use App\Models\LostPet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LostPetController extends Controller
{
    /**
     * Display a listing of the lostPets.
     *
     * @param  Request  $request
     *
     * @return LostPetCollection
     */
    public function index(Request $request, LostPetFilters $lostPetFilters): LostPetCollection
    {
        $lostPets = LostPet::filter($lostPetFilters)->paginate($request->pageSize);

        return new LostPetCollection($lostPets);
    }

    /**
     * Store a newly created lostPet in storage.
     *
     * @param  LostPetRequest  $lostPetRequest
     *
     * @return LostPetResource
     */
    public function store(LostPetRequest $lostPetRequest): LostPetResource
    {
        $lostPet = $lostPetRequest->validated();

        $primaryImage = Storage::disk('local')->put(config('images.lost-pets'), $lostPet['primary_image']);
        $lostPet['primary_image'] = basename($primaryImage);

        if (isset($lostPet['secondary_image'])) {
            $secondaryImage = Storage::disk('local')->put(config('images.lost-pets'), $lostPet['secondary_image']);
            $lostPet['secondary_image'] = basename($secondaryImage);
        }

        if (isset($lostPet['thirdary_image'])) {
            $thirdaryImage = Storage::disk('local')->put(config('images.lost-pets'), $lostPet['thirdary_image']);
            $lostPet['thirdary_image'] = basename($thirdaryImage);
        }

        $lostPet = LostPet::create($lostPet);

        return new LostPetResource($lostPet);
    }

    /**
     * Display the specified lostPet.
     *
     * @param  LostPet  $lostPet
     *
     * @return LostPetResource
     */
    public function show(LostPet $lostPet): LostPetResource
    {
        return new LostPetResource($lostPet);
    }

    /**
     * Update the specified lostPet in storage.
     *
     * @param  LostPetUpdateRequest  $lostPetUpdateRequest
     * @param  LostPet  $lostPet
     *
     * @return LostPetResource
     */
    public function update(LostPetUpdateRequest $lostPetUpdateRequest, LostPet $lostPet): LostPetResource
    {
        $updatedLostPet = $lostPetUpdateRequest->validated();

        if (isset($updatedLostPet['primary_image'])) {
            Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->primary_image);

            $primaryImage = Storage::disk('local')->put(config('images.lost-pets'), $updatedLostPet['primary_image']);
            $updatedLostPet['primary_image'] = basename($primaryImage);
        }

        if (isset($updatedLostPet['secondary_image'])) {
            Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->secondary_image);

            $secondaryImage = Storage::disk('local')->put(config('images.lost-pets'), $updatedLostPet['secondary_image']);
            $updatedLostPet['secondary_image'] = basename($secondaryImage);
        }

        if (isset($updatedLostPet['thirdary_image'])) {
            Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->thirdary_image);

            $thirdaryImage = Storage::disk('local')->put(config('images.lost-pets'), $updatedLostPet['thirdary_image']);
            $updatedLostPet['thirdary_image'] = basename($thirdaryImage);
        }

        $lostPet->update($updatedLostPet);

        return new LostPetResource($lostPet);
    }

    /**
     * Remove the specified lostPet from storage.
     *
     * @param  LostPet  $lostPet
     *
     * @return int
     */
    public function destroy(LostPet $lostPet): int
    {
        Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->primary_image);

        if ($lostPet->secondary_image) {
            Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->secondary_image);
        }

        if ($lostPet->thirdary_image) {
            Storage::disk('local')->delete(config('images.lost-pets') . '/' . $lostPet->thirdary_image);
        }

        return $lostPet->delete();
    }
}
