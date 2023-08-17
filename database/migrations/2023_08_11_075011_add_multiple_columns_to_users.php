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
        Schema::table('users', function (Blueprint $table) {
          // Personal details
          $table->integer('age')->nulllable();
          $table->enum('gender', ['male','female', 'other'])->nullable();
          $table->string('phone')->nullable();
          $table->string('state')->nullable();
          $table->string('country')->nullable();
          $table->text('address');
          $table->string('pin')->nullable();
          // Role
          $table->enum('role', ['client', 'doctor','administrator'])->default('client');
          // Admin/Super Admin
          $table->boolean('admin')->default(false);
          $table->boolean('super_admin')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
          $table->dropColumn(['age','gender','phone','state','country','pin','role','admin', 'super_admin']);
        });
    }
};
