<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
			$departments = [
				[ 'name' => 'Cardiology', 'key' => 'cardiology'],
				[ 'name' => 'Neurology', 'key' => 'neurology'],
				[ 'name' => 'Radiology', 'key' => 'radiology'],
				[ 'name' => 'Surgery', 'key' => 'surgery'],
				[ 'name' => 'Pathology', 'key' => 'pathology'],
				[ 'name' => 'Medicine', 'key' => 'medicine'],
				[ 'name' => 'Obstetrics and Gynaecology', 'key' => 'obstetrics_and_gynaecology'],
				[ 'name' => 'Internal Medicine', 'key' => 'internal_medicine'],
				[ 'name' => 'Orthopedics', 'key' => 'orthopedics'],
				[ 'name' => 'Nephrology', 'key' => 'nephrology'],
				[ 'name' => 'Otorhinolaryngology', 'key' => 'otorhinolaryngology'],
				[ 'name' => 'Gastroenterology', 'key' => 'gastroenterology'],
				[ 'name' => 'Physiotherapy', 'key' => 'physiotherapy'],
				[ 'name' => 'Neurosurgery', 'key' => 'neurosurgery'],
				[ 'name' => 'Pulmonology', 'key' => 'pulmonology'],
				[ 'name' => 'General Surgery', 'key' => 'general_surgery'],
				[ 'name' => 'Dermatology', 'key' => 'dermatology'],
				[ 'name' => 'Pediatrics', 'key' => 'pediatrics'],
				[ 'name' => 'Anaesthetics', 'key' => 'anaesthetics'],
				[ 'name' => 'Haematology', 'key' => 'haematology'],
				[ 'name' => 'Intensive care Medicine', 'key' => 'intensive_care_medicine'],
			];

			foreach ($departments as $department){
				Department::create($department);
			}

    }
}
