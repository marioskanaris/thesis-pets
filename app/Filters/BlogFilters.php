<?php

namespace App\Filters;

use App\Filters\QueryFilters;

class BlogFilters extends QueryFilters
{
    public function search($search = null)
    {
        return $this->builder->where('title', 'like', '%' . $search . '%');
    }
}
