<?php

namespace App\Http\Resources\Adoption;

use Illuminate\Http\Resources\Json\JsonResource;

class AdoptionResource extends JsonResource
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
            'category' => $this->category,
            'published' => $this->published,
            'kind' => $this->kind,
            'size' => $this->size,
            'age' => $this->age,
            'vaccinated' => $this->vaccinated,
            'neutered' => $this->neutered,
            'race' => $this->race,
            'shelter_id' => $this->shelter_id,
            'gender' => $this->gender,
            'region' => $this->region,
            'primaryImageUrl' => $this->getImageUrl($this->primary_image),
            'secondaryImageUrl' => $this->getImageUrl($this->secondary_image),
            'thirdaryImageUrl' => $this->getImageUrl($this->thirdary_image),
        ];
    }
}
