<?php

namespace App\Http\Controllers;

use App\Filters\PostFilters;
use App\Http\Requests\PostRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Http\Resources\Post\PostCollection;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the posts.
     *
     * @param  Request  $request
     *
     * @return PostCollection
     */
    public function index(Request $request, PostFilters $postFilters): PostCollection
    {
        $this->authorize('viewAllPosts', Post::class);

        $posts = Post::filter($postFilters)->paginate($request->pageSize);

        return new PostCollection($posts);
    }

    /**
     * Store a newly created post in storage.
     *
     * @param  PostRequest  $postRequest
     *
     * @return PostResource
     */
    public function store(PostRequest $postRequest): PostResource
    {
        $post = $postRequest->validated();

        $image = Storage::disk('local')->put(config('posts.images'), $post['image']);
        $post['image'] = basename($image);

        $post = Post::create($post);

        return new PostResource($post);
    }

    /**
     * Display the specified post.
     *
     * @param  Post  $post
     *
     * @return PostResource
     */
    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * Update the specified post in storage.
     *
     * @param  PostUpdateRequest  $postUpdateRequest
     * @param  Post  $post
     *
     * @return PostResource
     */
    public function update(PostUpdateRequest $postUpdateRequest, Post $post): PostResource
    {
        $updatedPost = $postUpdateRequest->validated();

        if (isset($updatedPost['image'])) {
            Storage::disk('local')->delete(config('posts.images') . '/' . $post->image);

            $image = Storage::disk('local')->put(config('posts.images'), $updatedPost['image']);
            $updatedPost['image'] = basename($image);
        }

        $post->update($updatedPost);

        return new PostResource($post);
    }

    /**
     * Remove the specified post from storage.
     *
     * @param  Post  $post
     *
     * @return int
     */
    public function destroy(Post $post): int
    {
        Storage::disk('local')->delete(config('posts.images') . '/' . $post->image);

        return $post->delete();
    }
}
