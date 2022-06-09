<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    /**
     * Determine if the user can view posts.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function viewAllPosts(User $user)
    {
        return $user->role === 'admin';
    }
}
