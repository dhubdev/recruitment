import type { iFile, iJob } from "$lib/interface";

export const flatten = (job: iJob) => ({
  id: job.xata_id,
  title: job.title,
  location: job.location,
  nature: job.nature,
  source: job.source,
  closingDate: job.closingDate ? job.closingDate : '',
  createdAt: job.xata_createdat.toLocaleString(),
  updatedAt: job.xata_updatedat.toLocaleString(),
  file: job.file ? (job.file as iFile)?.url : ''
});