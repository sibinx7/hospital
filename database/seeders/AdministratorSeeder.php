<?php

namespace Database\Seeders;

use App\Models\Administrator;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdministratorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $users = User::where('role', 'administrator')->get();
        foreach ($users as $administrator){        
          Administrator::create([
            "name" => $administrator->name,
            "user_id" => $administrator->id,
            "employee_id" => $administrator->employee->id,                      
          ]);
        }
    }
}
