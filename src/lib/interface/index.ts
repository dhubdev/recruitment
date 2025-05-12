import type { Role } from '../constants/index';

export type FormatToken =
	| 'YYYY'
	| 'mm'
	| 'MMMM'
	| 'MMM'
	| 'DD'
	| 'dddd'
	| 'ddd'
	| 'HH'
	| 'hh'
	| 'ss'
	| 'a';

export type StatusType = 'error' | 'success';

export type iResult = {
	status: StatusType;
	message: string;
	data?: any;
};

type ModalType = 'job' | 'deleteJob' | 'doc' | 'deleteDoc';

export type MessageRoleType = 'user' | 'assistant';

export type TCollection = 'services' | 'slides' | 'affiliates' | 'blog' | 'schools';

export type TService =
	| 'affiliate program'
	| 'tuition payment'
	| 'accommodation'
	| 'dhub career'
	| 'guardianship'
	| 'immigration & recruitment';

export type TPlayMedia = 'play-video' | 'play-audio' | 'play-image' | 'play-newsletter';

export type FileType = 'audio' | 'video' | 'file' | 'image';

export interface iXata {
	xata_createdat: Date;
	xata_updatedat: Date;
	xata_version: number;
	xata_id: string;
}

export interface iUser extends iXata {
	email: string;
	image: string;
	name: string;
	nameTag: string;
	userId: string;
	firstName: string;
	lastName: string;
	role: Role;
}

export interface iRoute {
	name: string;
	href: string;
	icon?: any;
	isAuthorized?: boolean;
}

export interface iSoMeRoute extends iRoute {
	name: 'facebook' | 'instagram' | 'youtube' | 'twitter' | 'telegram' | 'whatsapp' | 'tiktok';
}

export interface iContactRoute extends iRoute {
	name: 'mail' | 'call' | 'locate';
}

export interface iLegalRoute extends iRoute {
	name: 'terms of use' | 'cookie policy' | 'privacy policy';
}

export type TField = 'job'

export type TActionType = 'create' | 'edit'

export interface iModal {
	type: ModalType;
  title: string;
  description: string;
	open: boolean;
	data?: any;
}

export interface iMeta {
	title: string;
	keywords: string[];
	description: string;
	ogimage: string;
	link: string;
}

export interface iFile extends iXata {
	url: string;
	fileId: string;
	size: string;
}

// export interface iImage extends iXata {
//   url: string;
//   fileId: string;
//   size: string;
// }

export interface iFaq extends iXata {
	category: string;
	question: string;
	answer: string;
}

export interface iAccordion {
	question: string;
	answer: string;
}

export interface iUpload {
	url: string;
	fileType: FileType;
	fileId: string;
}

export interface iSection {
	id: string;
	title: string;
	content: string;
}

export interface iFormModal {
	type: TField,
	open: boolean;
	data?: any,
	title: string;
	action: TActionType
}

export interface iJob extends iXata {
	source: string;
	title: string
	content: string;
	location: string;
	nature: string;
	closingDate: string;
	file: string | iFile;
}

export interface iDoc extends iXata {
	title: string;
	content: string;
	slug: string;
	file?: string | iFile
}

// Content & Social Media Officer
// We’re looking for a creative and passionate Content & Social Media Officer to join our team!
// Location: Remote
// Full time 
// To apply, send your CV to: dhubeducation@gmail.com 