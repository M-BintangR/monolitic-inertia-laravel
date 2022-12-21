<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id');
            $table->foreignId('prouduct_id');
            $table->date('tgl_transaction');
            $table->string('kode_pos');
            $table->string('keterangan');
            $table->string('nama_penerima');
            $table->string('nama_pengirim');
            $table->string('bukti_pemabayaran');
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
        Schema::dropIfExists('transactions');
    }
};