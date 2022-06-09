<?php

namespace App\Http\Controllers\Visitor;

use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\Post\PostResource;
use App\Http\Resources\Visitor\Post\LatestThreePostsCollection;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a post.
     *
     * @param  Post  $Post
     *
     * @return PostResource
     */
    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * Display the three latest posts.
     *
     * @return LatestThreePostsCollection
     */
    public function threeLatestPosts(): LatestThreePostsCollection
    {
        $posts = Post::latest()->take(3)->get();

        return new LatestThreePostsCollection($posts);
    }
}
