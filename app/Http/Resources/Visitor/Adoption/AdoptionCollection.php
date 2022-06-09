<?php

namespace App\Http\Resources\Visitor\Adoption;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AdoptionCollection extends ResourceCollection
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
                    'region' => $item->region,
                    'description' => $item->description,
                    'kind' => $item->kind,
                    'gender' => $item->gender,
                    'age' => $item->age,
                    'primaryImageUrl' => $item->getImageUrl($item->primary_image),
                ];
            })
        ];
    }
}
