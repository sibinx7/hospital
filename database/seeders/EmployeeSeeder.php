<?php

namespace Database\Seeders;


use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
			$doctor_employees = User::where('role', 'administrator')->get()->toArray();
			if(sizeof($doctor_employees)){
				foreach ($doctor_employees as $employee){
					Employee::create([
						"user_id" => $employee['id'],
						"join" => date('Y/m/d')
					]);
				}
			}
    }
}
