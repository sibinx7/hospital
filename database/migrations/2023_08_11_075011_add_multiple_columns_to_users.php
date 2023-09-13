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
          $table->integer('age')->nullable()->after('email');
          $table->enum('gender', ['male','female', 'other'])->nullable()->after('age');
          $table->string('phone')->nullable()->after('gender');
					// Role
					$table->enum('role', ['patient', 'doctor','administrator'])->default('patient')->after('phone');
					$table->text('avatar')->nullable()->after('role');
					$table->string('state')->nullable()->after('avatar');
          $table->string('country')->nullable()->after('state');
          $table->text('address')->nullable()->after('country');
          $table->string('pin')->nullable()->after('address');

          // Admin/Super Admin
          $table->boolean('admin')->default(false)->after('pin');
          $table->boolean('super_admin')->default(false)->after('admin');

					$table->boolean('is_online')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
          $table->dropColumn(['age','gender','phone','state','country','pin','role','admin', 'super_admin', 'is_online']);
        });
    }
};
