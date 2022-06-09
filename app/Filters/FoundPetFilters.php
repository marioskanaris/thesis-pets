<?php

namespace App\Filters;

use App\Filters\QueryFilters;

class FoundPetFilters extends QueryFilters
{
    public function search($search = null)
    {
        return $this->builder->where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%');
        });
    }

    public function regions($regions = null)
    {
        return $this->builder->whereIn('region', $regions);
    }

    public function genders($genders = null)
    {
        return $this->builder->whereIn('gender', $genders);
    }

    public function kinds($kinds = null)
    {
        return $this->builder->whereIn('kind', $kinds);
    }

    public function sizes($sizes = null)
    {
        return $this->builder->whereIn('size', $sizes);
    }

    public function minAge($minAge = null)
    {
        if (!$minAge) {
            return;
        }

        return $this->builder->where('age', '>=', $minAge);
    }

    public function maxAge($maxAge = null)
    {
        if (!$maxAge) {
            return;
        }

        return $this->builder->where('age', '<=', $maxAge);
    }
}
