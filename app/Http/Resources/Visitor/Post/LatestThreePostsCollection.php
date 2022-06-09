<?php

namespace App\Http\Resources\Visitor\Post;

use Illuminate\Http\Resources\Json\ResourceCollection;

class LatestThreePostsCollection extends ResourceCollection
{
    /**
     * Transform the resource into an array.
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
                    'date' => $item->created_at->format('Y-m-d'),
                    'blog_id' => $item->blog_id,
                    'description' => $item->description,
                ];
            })
        ];
    }
}
