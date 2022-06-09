<?php

namespace App\Http\Resources\Visitor\Blog;

use Illuminate\Http\Resources\Json\ResourceCollection;

class LatestPostsCollection extends ResourceCollection
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
                ];
            })
        ];
    }
}
