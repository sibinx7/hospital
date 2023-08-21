<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    //
	public function index(Request $request): Response
	{
		$departments = Department::department_with_doctors();
		return Inertia::render('Welcome', [
			'departments' => $departments
		]);
	}
}
