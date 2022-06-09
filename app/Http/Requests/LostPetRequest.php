<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class LostPetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => ['required', 'string', 'min:1', 'max:255'],
            'region' => ['required', 'string', Rule::in(config('regions'))],
            'name' => ['nullable', 'string', 'min:1', 'max:255'],
            'shelter_id' => ['nullable', 'exists:shelters,id'],
            'vaccinated' => ['required', 'boolean'],
            'neutered' => ['required', 'boolean'],
            'published' => ['required', 'boolean'],
            'kind' => ['required', 'string', Rule::in(config('animal_kinds'))],
            'size' => ['required', 'string', Rule::in(config('animal_sizes'))],
            'age' => ['nullable', 'integer', 'min:1', 'max:20'],
            'race' => ['nullable', 'string', 'min:1', 'max:255'],
            'gender' => ['required', Rule::in(config('gender'))],
            'primary_image' => ['required', 'image', 'mimes:png,jpeg,jpg', 'max:2048'],
            'secondary_image' => ['image', 'mimes:png,jpeg,jpg', 'max:2048'],
            'thirdary_image' => ['image', 'mimes:png,jpeg,jpg', 'max:2048'],
            'user_id' => ['required', 'exists:users,id'],
        ];
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => Auth::user()->id,
        ]);
    }
}
