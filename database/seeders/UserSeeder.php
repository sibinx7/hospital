<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
//			$users = [
//				[
//					'name' => 'Antony P Pathadan', 'age' => 35, 'email' => 'antony_p@rajagiri.com', 'gender' => 'male', 'role' => 'doctor', 'password' => 'antony_53_doctor_mbbs'
//				],
//				[
//					'name' => 'Dr. Preethy Harrison', 'age' => 31, 'email' => 'preethy_h@rajagiri.com', 'gender' => 'female', 'role' => 'doctor', 'password' => 'preethy_12_doctor_mbbs'
//				],
//				[
//					'name' => 'Dr. Jayasankar S', 'age' => 37, 'email' => 'jayasankar_s@rajagiri.com', 'gender' => 'male', 'role' => 'doctor', 'password' => 'jayasankar_73_doctor_mbbs'
//				],
//				[
//					'name' => 'Dr. Sneha P Simon', 'age' => 32, 'email' => 'sneha_p@rajagiri.com', 'gender' => 'female', 'role' => 'doctor', 'password' => 'sneha_23_doctor_mbbs'
//				]
//			];

			// $users = [
			// 	[
			// 		'name' => 'John Doe', 'age' => 27, 'email' => 'john_doe@gmail.com', 'gender' => 'male', 'role' => 'patient', 'password' => 'john_doe@password123'
			// 	],
			// 	[
			// 		'name' => 'Sumna', 'age' => 31, 'email' => 'sumna@gmail.com', 'gender' => 'female', 'role' => 'patient', 'password' => 'sumna@password123'
			// 	],
			// 	[
			// 		'name' => 'Rahul Joe', 'age' => 24, 'email' => 'rahul_joe@gmail.com', 'gender' => 'male', 'role' => 'patient', 'password' => 'rahul_joe@password123'
			// 	],
			// 	[
			// 		'name' => 'Helen', 'age' => 32, 'email' => 'helen@gmail.com', 'gender' => 'female', 'role' => 'patient', 'password' => 'helen@password123'
			// 	]
			// ];

        $users = [
          [
            'name'=> 'Admin', 'age' => 27, 'email' => 'admin@gmail.com', 'gender' => 'male', 'role' => 'administrator', 'password' => 'admin@password123'
          ]
        ];

			foreach ($users as $user){
				User::create($user);
			}
    }
}
