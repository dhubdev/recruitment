import type { iBlog, iFormModal, iJob } from "$lib/interface";

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


export const defaultJob = {
	title: '',
	content: '',
	location: '',
	source: '',
	closingDate: '',
	nature: '',
	file: undefined,
	category: undefined
}

export const defaultDoc = {
	title: '',
	content: '',
	slug: '',
	file: undefined,
	category: undefined
}

export const defaultDocumentCategory = {
	category: ''
}

export const natureOptions: { label: string, value: string }[] = [
	{
		label: 'Full-Time',
		value: 'full-time'
	},
	{
		label: 'Part-Time',
		value: 'part-time'
	}
]

export const docOptions: { label: string, value: string }[] = [
	{
		label: 'Privacy Policy',
		value: 'privacy-policy'
	},
	{
		label: 'Cookie Policy',
		value: 'cookie-policy'
	},
	{
		label: 'Terms of Use',
		value: 'terms-of-use'
	}
]

export const locationOptions: { label: string, value: string }[] = [
	{
		label: 'Onsite',
		value: 'onsite'
	},
	{
		label: 'Remote',
		value: 'remote'
	},
	{
		label: 'Hybrid',
		value: 'hybrid'
	}
]

export const defaultBlog: Partial<iBlog> = {
	title: '',
	description: '',
	content: '',
	file: '',
	category: undefined
}

export enum SocialMediaLinks {
	WHATSAPP = 'https://api.whatsapp.com/send/?phone=%2B447930739927&text=Hello'
}