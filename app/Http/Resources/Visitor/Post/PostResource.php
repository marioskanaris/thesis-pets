<?php

namespace App\Http\Resources\Visitor\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'user' => $this->user->name,
            'date' => $this->created_at->format('Y-m-d'),
            'description' => $this->description,
            'imageUrl' => $this->getImageUrl(),
            'published' => $this->published,
            'blog_id' => $this->blog_id,
        ];
    }
}
