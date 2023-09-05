<?php

namespace Database\Seeders;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
			$patients = User::where('role','patient')->get();
//			dd($patients);
			foreach ($patients as $patient){
				Patient::create([
					"user_id" => $patient->id,
					"name" => $patient->name,
					"avatar" => "https://i.pravatar.cc/150?img=".$patient->id
				]);
			}
    }
}
