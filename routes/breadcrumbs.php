<?php // routes/breadcrumbs.php

// Note: Laravel will automatically resolve `Breadcrumbs::` without
// this import. This is nice for IDE syntax and refactoring.
use Diglactic\Breadcrumbs\Breadcrumbs;

// This import is also not required, and you could replace `BreadcrumbTrail $trail`
//  with `$trail`. This is nice for IDE type checking and completion.
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Dashboard 
Breadcrumbs::for('dashboard', function (BreadcrumbTrail $trail) {
  $trail->push('Dashboard', route('dashboard'));
});
Breadcrumbs::for('dashboard.doctor.show', function (BreadcrumbTrail $trail, $id) {
    $trail->parent('dashboard', route('dashboard'));    
    $trail->push('Doctor', route('dashboard.doctor.show', $id));
});