<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Doctor extends Model
{
    use HasFactory;

		protected $fillable = [
			'name', 'speciality', 'avatar', 'user_id', 'department_id', 'employee_id'
		];

		public function department():BelongsTo {
			return $this->belongsTo(Department::class);
		}


		public function employee():BelongsTo {
			return $this->belongsTo(Employee::class);
		}
}
