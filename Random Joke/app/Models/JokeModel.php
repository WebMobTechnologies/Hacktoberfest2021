<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JokeModel extends Model
{
    use HasFactory;
    protected $table = 'joke';
    protected $fillable = [
        'description'
        ];
}
