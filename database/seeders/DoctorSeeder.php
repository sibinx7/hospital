<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
			$users = User::where('role', 'doctor')->get();
			$departments = array_column(Department::all()->toArray(), "id");

			foreach ($users as $doctor){
//				var_dump($doctor->user_id);
				Doctor::create([
					"name" => $doctor->name,
					"user_id" => $doctor->id,
					"employee_id" => $doctor->employee->id,
					"department_id" => array_rand($departments),
					"speciality" => "MD"
				]);
			}
    }
}
