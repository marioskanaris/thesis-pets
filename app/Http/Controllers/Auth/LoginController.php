<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\RegisterShelterRequest;
use App\Models\Shelter;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Logout, Clear Session, and Return.
     *
     * @return void
     */
    public function logout()
    {
        Auth::logout();
        Session::flush();

        return response()->json([
            "result" => 'SUCCESS',
            "message" => 'Logged Out Successfully'
        ]);
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Λάθος email ή κωδικός πρόσβασης.'],
            ]);
        }

        if ($user->role == 'shelter' && !$user->shelter->activated) {
            throw ValidationException::withMessages([
                'message' => ['Ο λογαριασμός πρέπει να ενεργοποιηθεί απο τον Διαχειριστή.'],
            ]);
        }

        $this->guard()->login($user, $request->remember);
        return redirect('/admin/home');
    }

    public function register(RegisterRequest $registerRequest)
    {
        return User::create([
            'name' => $registerRequest->name,
            'email' => $registerRequest->email,
            'phone' => $registerRequest->phone,
            'password' => Hash::make($registerRequest->password),
        ]);
    }

    public function registerShelter(RegisterShelterRequest $registerShelterRequest)
    {
        $shelter = $registerShelterRequest->validated();

        $user = User::create([
            'name' => $shelter['name'],
            'email' => $shelter['email'],
            'phone' => $shelter['phone'],
            'role' => 'shelter',
            'password' => Hash::make($shelter['password']),
        ]);

        $image = Storage::disk('local')->put(config('shelters.images'), $registerShelterRequest['image']);
        $shelter['image'] = basename($image);

        return Shelter::create([
            'name' => $shelter['name'],
            'email' => $shelter['email'],
            'phone' => $shelter['phone'],
            'description' => $shelter['description'],
            'address' => $shelter['address'],
            'afm' => $shelter['afm'],
            'region' => $shelter['region'],
            'image' => $shelter['image'],
            'user_id' => $user->id,
        ]);
    }
}
