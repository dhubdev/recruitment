import { initialForm } from "$lib/constants";
import type { iJob, iFormModal, iMeta, iModal, iDocument, iDocModal, iDocumentCategory, iHTMLSection } from "$lib/interface";
import { writable } from "svelte/store";

const modalStore = writable<iModal>({
  open: false,
  type: 'job',
  title: '',
  description: '',
  className: ''
})

const docModalStore = writable<iDocModal>({
  open: false,
})

const metaStore = writable<iMeta>({
  title: 'Jordan Recruitments',
  description: 'Jobs at your finger tips',
  ogimage: 'https://www.dhubeducation.com/screenshot-wide.webp',
  link: 'https://www.dhubeducation.com/',
  keywords: [
    "IT jobs",
    "tech careers",
    "software developer",
    "information technology",
    "remote tech jobs",
    "IT support roles",
    "coding jobs",
    "developer opportunities",
    "IT recruitment agency",
    "junior developer",

    "cleaning jobs",
    "housekeeping staff",
    "janitorial work",
    "domestic cleaning",
    "office cleaning roles",
    "cleaner vacancy",
    "part-time cleaning",
    "cleaning careers",
    "residential cleaners",
    "sanitation worker",

    "teaching jobs",
    "school staff recruitment",
    "education careers",
    "teacher assistant",
    "academic positions",
    "tutor roles",
    "early childhood education",
    "educational consultant",
    "classroom assistant",
    "school teacher",

    "care worker jobs",
    "support worker",
    "caregiver vacancy",
    "elderly care careers",
    "health and social care",
    "domiciliary care",
    "nursing assistant",
    "live-in carer",
    "personal support worker",
    "care home staff"
  ]
});

const formsModalStore = writable<iFormModal>(initialForm)

const jobStore = writable<iJob[]>([])

const docStore = writable<iDocument[]>([])

const docCategoryStore = writable<iDocumentCategory[]>([])

export { modalStore, metaStore, formsModalStore, jobStore, docStore, docModalStore, docCategoryStore }