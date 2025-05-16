import type { iDoc, iDocumentCategory, iHTMLSection } from "$lib/interface";
import { writable } from "svelte/store";

const docStore = writable<iDoc[]>([])

const htmlSectionStore = writable<iHTMLSection[]>([])

const currentSectionStore = writable<Element>()

function createGroupedDocs() {
  const { subscribe, set, update } = writable<Map<string, iDoc[] | undefined>>(new Map());

  function group(docs: iDoc[]) {
    // Object.groupBy is supported in modern environments
    const grouped = Object.groupBy(docs, (doc) => (doc.category as iDocumentCategory).category);
    set(new Map(Object.entries(grouped)));
  }

  return {
    subscribe,
    group,
    update
  };
}

const groupedDocs = createGroupedDocs();


export { docStore, groupedDocs, htmlSectionStore, currentSectionStore }