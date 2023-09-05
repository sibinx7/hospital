<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
		protected $fillable = [
			'slot_id',
			'selected_date',
			'selected_time',
			'active',
			'subject',
			'description',
			'department_id',
			'patient_id',
			'doctor_id',
			'name',
			'phone',
			'email'
		];
}
