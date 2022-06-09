<?php

namespace App\Http\Controllers;

use App\Filters\BlogFilters;
use App\Http\Requests\BlogRequest;
use App\Http\Requests\BlogUpdateRequest;
use App\Http\Resources\Blog\BlogCollection;
use App\Http\Resources\Blog\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the blogs.
     *
     * @param  Request  $request
     *
     * @return BlogCollection
     */
    public function index(Request $request, BlogFilters $blogFilters): BlogCollection
    {
        $this->authorize('viewAllBlogs', Blog::class);

        $blogs = Blog::filter($blogFilters)->paginate($request->pageSize);

        return new BlogCollection($blogs);
    }

    /**
     * Store a newly created blog in storage.
     *
     * @param  \Illuminate\Http\BlogRequest  $blogRequest
     *
     * @return \Illuminate\Http\Response
     */
    public function store(BlogRequest $blogRequest): BlogResource
    {
        $blog = $blogRequest->validated();

        $image = Storage::disk('local')->put(config('blogs.images'), $blog['image']);
        $blog['image'] = basename($image);

        $blog = Blog::create($blog);

        return new BlogResource($blog);
    }

    /**
     * Display the specified blog.
     *
     * @param  Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog): BlogResource
    {
        return new BlogResource($blog);
    }

    /**
     * Update the specified blog in storage.
     *
     * @param  \Illuminate\Http\BlogUpdateRequest  $blogUpdateRequest
     * @param  Blog  $blog
     *
     * @return \Illuminate\Http\Response
     */
    public function update(BlogUpdateRequest $blogUpdateRequest, Blog $blog): BlogResource
    {
        $updatedBlog = $blogUpdateRequest->validated();

        if (isset($updatedBlog['image'])) {
            Storage::disk('local')->delete(config('blogs.images') . '/' . $blog->image);

            $image = Storage::disk('local')->put(config('blogs.images'), $updatedBlog['image']);
            $updatedBlog['image'] = basename($image);
        }

        $blog->update($updatedBlog);

        return new BlogResource($blog);
    }

    /**
     * Remove the specified blog from storage.
     *
     * @param  Blog  $blog
     * @return int
     */
    public function destroy(Blog $blog)
    {
        Storage::disk('local')->delete(config('blogs.images') . '/' . $blog->image);

        return $blog->delete();
    }
}
