import type { iFormModal, iJob } from "$lib/interface";

export enum Role {
	ADMIN = 'admin',
	CHILD = 'child',
	TEACHER = 'teacher',
	PARENT = 'parent',
	GUEST = 'guest'
}

export const footerExclusionList = [
	'/blogs/*',
	'/courses/*',
	'/campaigns/*',
	'/services/*',
	'/partners/*'
];

export function isExcludedFromFooter(path: string): boolean {
	return footerExclusionList.some((pattern) => {
		if (pattern.endsWith('/*')) {
			const basePath = pattern.slice(0, -2); // Remove /* from the end
			return path.startsWith(basePath);
		}
		return path === pattern;
	});
}

export const initialForm = {
  type: 'job',
  open: false,
  data: null,
  title: '',
  action: 'create'
} satisfies iFormModal


export const defaultJob: Partial<iJob> = {
	title: '',
	content: '',
	location: '',
	nature: '',
	file: ''
}