<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index()
    {
        $users = [
            [
                'nama' => 'Muhammd Bintang',
                'kelas' => 'XII RPL 2'
            ],
            [
                'nama' => 'Zhaka Hidayat',
                'kelas' => 'XII RPL 2'
            ],
        ];
        return Inertia::render('Home', [
            'users' => $users,
        ]);
    }
}