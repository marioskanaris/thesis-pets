<?php

namespace App\Http\Controllers\Visitor;

use App\Filters\BlogFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\Visitor\Blog\BlogCollection;
use App\Http\Resources\Visitor\Blog\BlogResource;
use App\Http\Resources\Visitor\Blog\LatestPostsCollection;
use App\Models\Blog;
use App\Models\Post;
use Illuminate\Http\Request;

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
        $blogs = Blog::filter($blogFilters)->get();

        return new BlogCollection($blogs);
    }

    /**
     * Display a blog.
     *
     * @param  Blog  $blog
     *
     * @return BlogResource
     */
    public function show(Blog $blog): BlogResource
    {
        return new BlogResource($blog);
    }

    /**
     * Get the three latest posts of the blog.
     *
     * @param  Blog  $blog
     *
     * @return LatestPostsCollection
     */
    public function latestPosts(Blog $blog): LatestPostsCollection
    {
        $posts = Post::where('blog_id', $blog->id)->latest()->take(3)->get();

        return new LatestPostsCollection($posts);
    }
}
