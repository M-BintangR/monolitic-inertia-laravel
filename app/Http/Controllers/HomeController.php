<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index()
    {
        return Inertia::render('Home');
    }

    function  product($query)
    {
        return Inertia::render('Product');
    }
}