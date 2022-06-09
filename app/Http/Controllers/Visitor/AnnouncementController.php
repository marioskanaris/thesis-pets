<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\AnnouncementFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\Announcement\AdoptionResource;
use App\Http\Resources\Visitor\Announcement\LostPetResource;
use App\Http\Resources\Visitor\Announcement\AnnouncementCollection;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of pets for adoption.
     *
     * @param  Request  $request
     * @param  AnnouncementFilters  $announcementFilters
     *
     * @return AnnouncementCollection
     */
    public function petsForAdoption(Request $request, AnnouncementFilters $announcementFilters): AnnouncementCollection
    {
        $pets = Announcement::where('category', 'Υιοθεσία')->filter($announcementFilters)->get();

        return new AnnouncementCollection($pets);
    }

    /**
     * Display a pet for adoption.
     *
     * @param  Request  $request
     * @param  Announcement  $announcement
     *
     * @return AdoptionResource
     */
    public function petForAdoption(Announcement $announcement): AdoptionResource
    {
        if (!$announcement->isAdoption()) {
            return abort(403, 'Adoption not found.');
        }

        return new AdoptionResource($announcement);
    }

    /**
     * Display the first three pets for adoption.
     *
     * @return AnnouncementCollection
     */
    public function threePetsForAdoption(): AnnouncementCollection
    {
        $pets = Announcement::where('category', 'Υιοθεσία')->take(3)->get();

        return new AnnouncementCollection($pets);
    }

    /**
     * Display a listing of lost pets.
     *
     * @param  Request  $request
     * @param  AnnouncementFilters  $announcementFilters
     *
     * @return AnnouncementCollection
     */
    public function lostPets(Request $request, AnnouncementFilters $announcementFilters): AnnouncementCollection
    {
        $pets = Announcement::where('category', 'Χάθηκε')->filter($announcementFilters)->get();

        return new AnnouncementCollection($pets);
    }

    /**
     * Display a lost pet.
     *
     * @param  Request  $request
     * @param  Announcement  $announcement
     *
     * @return LostPetResource
     */
    public function lostPet(Announcement $announcement): LostPetResource
    {
        if (!$announcement->isLost()) {
            return abort(403, 'Lost pet not found.');
        }

        return new LostPetResource($announcement);
    }

    /**
     * Display a listing of founded pets.
     *
     * @param  Request  $request
     * @param  AnnouncementFilters  $announcementFilters
     *
     * @return AnnouncementCollection
     */
    public function foundedPets(Request $request, AnnouncementFilters $announcementFilters): AnnouncementCollection
    {
        $pets = Announcement::where('category', 'Βρέθηκε')->filter($announcementFilters)->get();

        return new AnnouncementCollection($pets);
    }
}
