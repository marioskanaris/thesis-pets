<?php

namespace App\Http\Resources\Shelter;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ShelterCollection extends ResourceCollection
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
                    'afm' => $item->afm,
                    'activated' => $item->activated,
                ];
            })
        ];
    }
}
