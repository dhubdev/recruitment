import type { iPricing } from '$lib/interface';
import { authGuard } from '$lib/server';
import { addPricing } from '$lib/xata/pricing';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { iResult } from '@toolsntuts/utils';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const DELETE: RequestHandler = async ({ request, locals }) => {

  return new Response();
};

const saveFile = async (file: File, fetch: any) => {

  const formData = new FormData()
  formData.set("file", file)
  formData.set("fileSize", file.size.toString())

  const options: RequestInit = {
    method: 'POST',
    body: formData
  }
  const response = await fetch(`/api/files`, options)
  const result = await response.json() as iResult
  return result.data
}

export const POST: RequestHandler = async ({ locals, request, fetch }) => {
  authGuard(locals)

  // const partialPricing = await request.json() as Partial<iPricing>

  

  // const result = await addPricing(partialPricing)
  // return json(result)

  const formData = await request.formData()


  const cv = await saveFile(formData.get("cv") as File, fetch)
  const coverLetter = await saveFile(formData.get("coverLetter") as File, fetch) 

  let partialPricing: Partial<iPricing> = {
    fullName: formData.get('fullName') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
		country: formData.get('country') as string,
		experience: formData.get('experience') as string,
		maritalStatus: formData.get('maritalStatus') as string,
		employmentStatus: formData.get('employmentStatus') as string,
		language: formData.get('language') as string,
		ageRange: formData.get('ageRange') as string,
		qualification: formData.get('qualification') as string,
    cv,
    coverLetter
  }

  console.log({ partialPricing })

  const result = await addPricing(partialPricing)

  return json(result)
};