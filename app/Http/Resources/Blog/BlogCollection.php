<?php

namespace App\Http\Resources\Blog;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BlogCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function ($item, $key) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'imageUrl' => $item->getImageUrl(),
                    'totalPosts' => $item->posts->count(),
                    'posts' => $item->posts,
                ];
            })
        ];
    }
}
