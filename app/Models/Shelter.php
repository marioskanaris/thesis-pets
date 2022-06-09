<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shelter extends Model
{
    use Filterable;

    protected $guarded = ['id'];

    public function getImageUrl(): string
    {
        return url('storage/shelters/images/' . $this->image);
    }

    public function pets(): HasMany
    {
        return $this->hasMany(Announcement::class);
    }
}
