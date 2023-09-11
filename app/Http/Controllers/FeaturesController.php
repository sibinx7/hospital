<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FeaturesController extends Controller
{
    //
	public function telemedicine(){

		return Inertia::render('Dashboard/TeleMedicine/Index',[

		]);
	}
}
