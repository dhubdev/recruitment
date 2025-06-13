import type { iApplication, iFile, iJob } from "$lib/interface";

export const flatten = (application: iApplication) => ({
  id: application.xata_id,
  name: application.name,
  email: application.email,
  title: (application.job as iJob).title,
  location: (application.job as iJob).location,
  nature: (application.job as iJob).nature,
  source: (application.job as iJob).source,
  closingDate: (application.job as iJob).closingDate ? (application.job as iJob).closingDate : '',
  createdAt: application.xata_createdat.toLocaleString(),
  updatedAt: application.xata_updatedat.toLocaleString(),
  applicationLetter: (application.applicationLetter as iFile).url,
  resume: (application.cv as iFile).url
});