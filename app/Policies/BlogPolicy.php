<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BlogPolicy
{
    /**
     * Determine if the user can view posts.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAllBlogs(User $user)
    {
        return $user->role === 'admin';
    }
}
