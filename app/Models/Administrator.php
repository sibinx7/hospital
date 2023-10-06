<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Administrator extends Model
{
  use HasFactory;

  protected $fillable = [
    'name', 'user_id', 'employee_id'
  ];


  public function employee():BelongsTo {
    return $this->belongsTo(Employee::class);
  }

  public function user():BelongsTo {
    return $this->belongsTo(User::class);
  }
}
