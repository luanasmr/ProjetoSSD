<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('processos', function (Blueprint $table) {
            $table->id();
            $table->string('status_processo');
            $table->unsignedBigInteger('vaga_id');
            $table->unsignedBigInteger('candidato_id');
            $table->unsignedBigInteger('fase_id');
            $table->foreign('fase_id')->references('id')->on('fases');
            $table->foreign('vaga_id')->references('id')->on('vagas');
            $table->foreign('candidato_id')->references('id')->on('candidatos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('processos');
    }
}
