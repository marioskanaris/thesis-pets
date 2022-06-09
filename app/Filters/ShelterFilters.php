<?php

namespace App\Filters;

use App\Filters\QueryFilters;

class ShelterFilters extends QueryFilters
{
    public function search($search = null)
    {
        return $this->builder->where('name', 'like', '%' . $search . '%');
    }

    public function regions($regions = null)
    {
        return $this->builder->whereIn('region', $regions);
    }
}
