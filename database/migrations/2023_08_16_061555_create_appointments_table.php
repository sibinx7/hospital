<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
						$table->string('subject');
						$table->text('description');
						$table->unsignedBigInteger('slot_id');
						$table->date('selected_date');
						$table->time('selected_time');
						$table->string('name')->nullable(); // Backup, patient not logged
						$table->string('email')->nullable();
						$table->string('phone')->nullable();
						$table->unsignedBigInteger('patient_id');
						$table->unsignedBigInteger('doctor_id');
						$table->unsignedBigInteger('department_id');
            $table->timestamps();
						$table->foreign('slot_id')->references('id')->on('slots');
						$table->foreign('patient_id')->references('id')->on('patients');
						$table->foreign('doctor_id')->references('id')->on('doctors');
						$table->foreign('department_id')->references('id')->on('departments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
