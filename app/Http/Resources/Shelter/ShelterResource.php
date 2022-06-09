<?php

namespace App\Http\Resources\Shelter;

use Illuminate\Http\Resources\Json\JsonResource;

class ShelterResource extends JsonResource
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
            'name' => $this->name,
            'address' => $this->address,
            'description' => $this->description,
            'region' => $this->region,
            'afm' => $this->afm,
            'email' => $this->email,
            'phone' => $this->phone,
            'activated' => $this->activated,
            'imageUrl' => $this->getImageUrl(),
        ];
    }
}
