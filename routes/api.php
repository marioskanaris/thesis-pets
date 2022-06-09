<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
Route::post('/register', 'Auth\LoginController@register');
Route::post('/register-shelter', 'Auth\LoginController@registerShelter');

Route::get('regions', RegionController::class);

Route::prefix('visitor')->group(function () {
    Route::apiResource('blogs', 'Visitor\BlogController')->only(['index', 'show']);
    Route::get('blog/{blog}/latest-posts', 'Visitor\BlogController@latestPosts');

    Route::get('shelters', 'Visitor\ShelterController@index');
    Route::get('shelters/{shelter}', 'Visitor\ShelterController@show');
    Route::get('shelters/{shelter}/pets', 'Visitor\ShelterController@pets');

    Route::get('posts/three-latest', 'Visitor\PostController@threeLatestPosts');
    Route::get('posts/{post}', 'Visitor\PostController@show');

    Route::get('adoptions', 'Visitor\AdoptionController@index');
    Route::get('adoptions/{adoption}', 'Visitor\AdoptionController@show');
    Route::get('three-adoptions', 'Visitor\AdoptionController@threePets');

    Route::get('lost-pets', 'Visitor\LostPetController@index');
    Route::get('lost-pets/{lostPet}', 'Visitor\LostPetController@show');

    Route::get('found-pets', 'Visitor\FoundPetController@index');
    Route::get('found-pets/{foundPet}', 'Visitor\FoundPetController@show');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('users', 'UserController@index');
    Route::get('users/{user}', 'UserController@show');
    Route::get('profile', 'UserController@profile');
    Route::put('profile-update', 'UserController@profileUpdate');
    Route::delete('profile-delete', 'UserController@profileDelete');

    Route::apiResource('blogs', BlogController::class);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('shelters', ShelterController::class);
    Route::apiResource('adoptions', AdoptionController::class);
    Route::apiResource('lost-pets', LostPetController::class);
    Route::apiResource('found-pets', FoundPetController::class);
});
