<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Department extends Model
{
    use HasFactory;

		protected $fillable = [
			'name', 'key', 'description', 'image'
		];



		public static function department_with_doctors(){
			$doctors = Doctor::all();
			if(sizeof($doctors) > 0){
				return DB::table('departments')
						->join('doctors', 'departments.id', '=', 'doctors.department_id')
						->select('departments.*')
						->distinct()
						->get()
						->transform(fn($department) => [
							'department_id' => $department->id,
							'department_name' => $department->name,
							'department_key' => $department->key,

						]);
			}else{
				// Return all departments
				return Department::all()->transform(fn($department)=> [
					'department_id' => $department->id,
					'department_name' => $department->name,
					'department_key' => $department->key,
				]);
			}
			return [];
		}


		public function doctors(): HasMany {
			return $this->hasMany(Doctor::class);
		}
}
