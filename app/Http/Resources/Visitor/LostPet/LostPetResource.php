<?php

namespace App\Http\Resources\Visitor\LostPet;

use Illuminate\Http\Resources\Json\JsonResource;

class LostPetResource extends JsonResource
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
            'description' => $this->description,
            'published' => $this->published,
            'kind' => $this->kind,
            'size' => $this->size,
            'age' => $this->age,
            'vaccinated' => $this->vaccinated ? 'Ναι' : 'Όχι',
            'neutered' => $this->neutered ? 'Ναι' : 'Όχι',
            'race' => $this->race,
            'shelter' => $this->shelter,
            'gender' => $this->gender,
            'region' => $this->region,
            'user' => $this->user,
            'primaryImageUrl' => $this->getImageUrl($this->primary_image),
            'secondaryImageUrl' => $this->getImageUrl($this->secondary_image),
            'thirdaryImageUrl' => $this->getImageUrl($this->thirdary_image),
        ];
    }
}
