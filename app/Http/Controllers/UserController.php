<?php

namespace App\Http\Controllers;

use App\Filters\UserFilters;
use App\Http\Resources\User\UserCollection;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Display a listing of the users.
     *
     * @param  Request  $request
     *
     * @return UserCollection
     */
    public function index(Request $request, UserFilters $userFilters)
    {
        $users = User::filter($userFilters)->paginate($request->pageSize);

        return new UserCollection($users);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function profile()
    {
        return Auth::user();
    }

    public function profileUpdate(Request $request)
    {
        $userId = Auth::user()->id;
        $user = User::findOrFail($userId);

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
        ]);

        return $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
        ]);
    }

    public function profileDelete()
    {
        $userId = Auth::user()->id;
        $user = User::findOrFail($userId);

        Session::flush();

        return $user->delete();
    }

    public function requestUser(Request $request)
    {
        return $request->user();
    }
}
