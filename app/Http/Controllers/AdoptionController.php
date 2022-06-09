<?php

namespace App\Http\Controllers;

use App\Filters\AdoptionFilters;
use App\Http\Requests\AdoptionRequest;
use App\Http\Requests\AdoptionUpdateRequest;
use App\Http\Resources\Adoption\AdoptionCollection;
use App\Http\Resources\Adoption\AdoptionResource;
use App\Models\Adoption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdoptionController extends Controller
{
    /**
     * Display a listing of the adoptions.
     *
     * @param  Request  $request
     *
     * @return AdoptionCollection
     */
    public function index(Request $request, AdoptionFilters $adoptionFilters): AdoptionCollection
    {
        $adoptions = Adoption::filter($adoptionFilters)->paginate($request->pageSize);

        return new AdoptionCollection($adoptions);
    }

    /**
     * Store a newly created adoption in storage.
     *
     * @param  AdoptionRequest  $adoptionRequest
     *
     * @return AdoptionResource
     */
    public function store(AdoptionRequest $adoptionRequest): AdoptionResource
    {
        $adoption = $adoptionRequest->validated();

        $primaryImage = Storage::disk('local')->put(config('images.adoptions'), $adoption['primary_image']);
        $adoption['primary_image'] = basename($primaryImage);

        if (isset($adoption['secondary_image'])) {
            $secondaryImage = Storage::disk('local')->put(config('images.adoptions'), $adoption['secondary_image']);
            $adoption['secondary_image'] = basename($secondaryImage);
        }

        if (isset($adoption['thirdary_image'])) {
            $thirdaryImage = Storage::disk('local')->put(config('images.adoptions'), $adoption['thirdary_image']);
            $adoption['thirdary_image'] = basename($thirdaryImage);
        }

        $adoption = Adoption::create($adoption);

        return new AdoptionResource($adoption);
    }

    /**
     * Display the specified adoption.
     *
     * @param  Adoption  $adoption
     *
     * @return AdoptionResource
     */
    public function show(Adoption $adoption): AdoptionResource
    {
        return new AdoptionResource($adoption);
    }

    /**
     * Update the specified adoption in storage.
     *
     * @param  AdoptionUpdateRequest  $adoptionUpdateRequest
     * @param  Adoption  $adoption
     *
     * @return AdoptionResource
     */
    public function update(AdoptionUpdateRequest $adoptionUpdateRequest, Adoption $adoption): AdoptionResource
    {
        $updatedAdoption = $adoptionUpdateRequest->validated();

        if (isset($updatedAdoption['primary_image'])) {
            Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->primary_image);

            $primaryImage = Storage::disk('local')->put(config('images.adoptions'), $updatedAdoption['primary_image']);
            $updatedAdoption['primary_image'] = basename($primaryImage);
        }

        if (isset($updatedAdoption['secondary_image'])) {
            Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->secondary_image);

            $secondaryImage = Storage::disk('local')->put(config('images.adoptions'), $updatedAdoption['secondary_image']);
            $updatedAdoption['secondary_image'] = basename($secondaryImage);
        }

        if (isset($updatedAdoption['thirdary_image'])) {
            Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->thirdary_image);

            $thirdaryImage = Storage::disk('local')->put(config('images.adoptions'), $updatedAdoption['thirdary_image']);
            $updatedAdoption['thirdary_image'] = basename($thirdaryImage);
        }

        $adoption->update($updatedAdoption);

        return new AdoptionResource($adoption);
    }

    /**
     * Remove the specified adoption from storage.
     *
     * @param  Adoption  $adoption
     *
     * @return int
     */
    public function destroy(Adoption $adoption): int
    {
        Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->primary_image);

        if ($adoption->secondary_image) {
            Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->secondary_image);
        }

        if ($adoption->thirdary_image) {
            Storage::disk('local')->delete(config('images.adoptions') . '/' . $adoption->thirdary_image);
        }

        return $adoption->delete();
    }
}
