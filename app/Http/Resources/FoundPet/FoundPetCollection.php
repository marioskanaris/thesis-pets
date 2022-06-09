<?php

namespace App\Http\Resources\FoundPet;

use Illuminate\Http\Resources\Json\ResourceCollection;

class FoundPetCollection extends ResourceCollection
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
                    'name' => $item->name,
                    'category' => $item->category,
                    'published' => $item->published,
                    'shelter_id' => $item->shelter_id,
                ];
            })
        ];
    }
}
