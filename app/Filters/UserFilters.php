<?php

namespace App\Filters;

use App\Filters\QueryFilters;

class UserFilters extends QueryFilters
{
    public function search($search = null)
    {
        return $this->builder->where('name', 'like', '%' . $search . '%');
    }
}
