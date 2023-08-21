<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

		protected $fillable = [
			'name', 'key', 'description', 'image'
		];



		public static function department_with_doctors(){
			$doctors = Doctor::all();
			if(sizeof($doctors) > 0){
				//
			}else{
				// Return all departments
				return Department::all()->transform(fn($department)=> [
					'department_id' => $department->id,
					'department_name' => $department->name,
					'department_key' => $department->key
				]);
			}
			return [];
		}
}
