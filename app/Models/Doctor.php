<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

		protected $fillable = [
			'name', 'speciality', 'avatar', 'user_id', 'department_id', 'employee_id'
		];
}
