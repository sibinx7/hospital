<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Employee extends Model
{
    use HasFactory;

		protected $fillable = [
			'join', 'resign'
		];


		public function doctor():HasOne {
			return $this->hasOne(Doctor::class);
		}

    public function administrator():HasOne {
      return $this->hasOne(Administrator::class);
    }


		public function user():BelongsTo {
			return $this->belongsTo(User::class);
		}
}
