<?php

namespace Database\Seeders;

use App\Models\Appointment;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\Slot;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

			$range = range(0,5);
			$appointments = [];
			foreach ($range as $key){
				$patient = Patient::all()->random(1)->first();
				$slot = Slot::all()->random(1)->first()->id;
//				var_dump($patient);
//				dd($patient->user);
				$appointments[] = [
					"doctor_id" => Doctor::all()->random(1)->first()->id,
					"department_id" => Department::all()->random(1)->first()->id,
					"slot_id" => $slot->id,
					"subject" => "General checkup",
					"description" => "Total health checkup",
					"selected_date" => date("y-m-d"),
					"selected_time" => date("H:i:s", strtotime("")),
					"name" => $patient->user->name,
					"email" => $patient->user->email,
					"phone" => $patient->user->phone,
					"patient_id" => $patient->id
				];
			}


			foreach ($appointments as $appointment){
				Appointment::create($appointment);
			}
    }
}
