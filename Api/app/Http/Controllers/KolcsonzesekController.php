<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kolcsonzesek;

class KolcsonzesekController extends Controller
{
    public function index()
    {
        return Kolcsonzesek::all();
    }

    public function store(Request $request)
    {
        return Kolcsonzesek::create($request->all());
    }

    public function show($id)
    {
        return Kolcsonzesek::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $kolcsonzesek = Kolcsonzesek::findOrFail($id);
        $kolcsonzesek->update($request->all());
        return $kolcsonzesek;
    }

    public function destroy($id)
    {
        $kolcsonzesek = Kolcsonzesek::findOrFail($id);
        $kolcsonzesek->delete();
        return 204;
    }
}
