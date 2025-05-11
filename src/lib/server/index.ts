import { json } from '@sveltejs/kit';
import { onError, type iResult } from '@toolsntuts/utils';

export const throwIfError = (result: iResult) => {
	if (result.status === 'error') {
		throw new Error(result.message);
	}
};

export const authGuard = (locals: App.Locals) => {
	const user = locals.user

  if (!user) {
    return json(onError("Unauthenticated"))
  }
}