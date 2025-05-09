import { initialForm } from "$lib/constants";
import { iJob, type iFormModal, type iMeta, type iModal } from "$lib/interface";
import { writable } from "svelte/store";

const modalStore = writable<iModal>({
  open: false,
  type: 'chat',
})

const metaStore = writable<iMeta>({
  title: 'Jordan Recruitments',
  description: 'Jobs at your finger tips',
  ogimage: 'https://www.dhubeducation.com/screenshot-wide.webp',
  link: 'https://www.dhubeducation.com/',
  keywords: ['study', 'abroad', 'education', 'international', 'masters', 'first degree', 'Study Abroad']
});

const formsModalStore = writable<iFormModal>(initialForm)

const jobsStore = writable<iJob[]>([])

export { modalStore, metaStore, formsModalStore, jobsStore }