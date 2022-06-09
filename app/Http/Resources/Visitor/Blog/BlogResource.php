<?php

namespace App\Http\Resources\Visitor\Blog;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'imageUrl' => $this->getImageUrl(),
            'posts' => $this->posts->transform(function ($item, $key) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'user' => $item->user->name,
                    'description' => $item->description,
                    'imageUrl' => $item->getImageUrl(),
                ];
            }),
        ];
    }
}
