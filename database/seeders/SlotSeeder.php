<?php

namespace Database\Seeders;

use App\Models\Slot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SlotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

			$slots = [
				[
					"slot" => 1, "slot_start" => date("g:i a", strtotime("9:00")), "slot_stop" => date("g:i a", strtotime("9:45"))
				],
				[
					"slot" => 2, "slot_start" => date("g:i a", strtotime("9:45")), "slot_stop" => date("g:i a", strtotime("10:30"))
				],
				[
					"slot" => 3, "slot_start" => date("g:i a", strtotime("10:30")), "slot_stop" => date("g:i a", strtotime("11:15"))
				],
				[
					"slot" => 4, "slot_start" => date("g:i a", strtotime("11:15")), "slot_stop" => date("g:i a", strtotime("12:00"))
				],
				[
					"slot" => 5, "slot_start" => date("g:i a", strtotime("13:00")), "slot_stop" => date("g:i a", strtotime("13:45"))
				],
				[
					"slot" => 6, "slot_start" => date("g:i a", strtotime("13:45")), "slot_stop" => date("g:i a", strtotime("14:30"))
				],
				[
					"slot" => 7, "slot_start" => date("g:i a", strtotime("14:30")), "slot_stop" => date("g:i a", strtotime("15:15"))
				],
				[
					"slot" => 8, "slot_start" => date("g:i a", strtotime("15:15")), "slot_stop" => date("g:i a", strtotime("16:00"))
				],
				[
					"slot" => 9, "slot_start" => date("g:i a", strtotime("16:00")), "slot_stop" => date("g:i a", strtotime("16:45"))
				],
				[
					"slot" => 10, "slot_start" => date("g:i a", strtotime("16:45")), "slot_stop" => date("g:i a", strtotime("17:30"))
				]
			];

			foreach ($slots as $slot){
				Slot::create($slot);
			}
    }
}
