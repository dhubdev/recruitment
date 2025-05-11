import { capitalize } from "$lib/fxns";
import type { iResult } from "@toolsntuts/utils";
import { toast } from "svelte-sonner";


// Loosely define a file type that may be a string or iFile
type FileOrId = { xata_id: string } | string | undefined;

interface HasMaybeFileAndContent {
  file?: FileOrId;
  content?: any;
}

interface SubmitFormOptions<T extends HasMaybeFileAndContent> {
  resource: 'jobs';
  data: Partial<T>;
  entity?: { xata_id: string };
}

export const submitForm = async <T extends HasMaybeFileAndContent>(
  evt: SubmitEvent,
  { resource, data, entity }: SubmitFormOptions<T>
) => {
  const form = evt.target as HTMLFormElement;
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries());

  // Handle the possibility that `file` may be a string or an object
  const fileValue = typeof data.file === 'object' && data.file !== null
    ? data.file.xata_id
    : data.file;

  const payload = {
    ...entries,
    ...data,
    file: fileValue, // Safely assign correct value
  };

  const isUpdating = Boolean(entity?.xata_id);
  const url = isUpdating ? `/api/${resource}/${entity!.xata_id}` : `/api/${resource}`;
  const method = isUpdating ? 'PATCH' : 'POST';

  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { message, status } = (await response.json()) as iResult;

    const action = isUpdating ? 'updating' : 'creating';
    const capitalized = capitalize(resource)

    console.log({ action, message, status })

    if (status === 'error') {
      toast.error(message, {
        description: `Error ${action} ${resource.slice(0, -1)}`,
      });
    } else {
      toast.success(message, {
        description: `${capitalized} ${isUpdating ? 'updated' : 'created'} successfully`,
      });
    }
  } catch (error: any) {
    toast.error(error.message, {
      description: `Error ${isUpdating ? 'updating' : 'creating'} ${resource.slice(0, -1)}`,
    });
  }
};

type AIResource = 'job'
export const aiSubmitForm = async (evt: SubmitEvent, resource: AIResource) => {
  evt.preventDefault()
  const form = evt.target as HTMLFormElement
  const formData = new FormData(form)
  const entries = Object.fromEntries(formData.entries())
  const prompt = entries.prompt as string

  try {
    const url = `/api/ai/${resource}`
    const options: RequestInit = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    }
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error: any) {
    return null
  }
}

interface WithXataID {
  xata_id: string;
}

type DeleteConfig = {
  resource: WithXataID | null | undefined;
  endpoint: string;
  redirect?: string;
  successMessage: string;
  errorMessage?: string;
};

export const deleteResourceApi = async ({
  resource,
  endpoint,
  redirect,
  successMessage,
  errorMessage = 'Ensure you remove fields using this item.'
}: DeleteConfig) => {
  if (!resource) return;

  try {
    const url = `/api/${endpoint}/${resource.xata_id}`;

    const options: RequestInit = {
      method: 'DELETE'
    };

    const response = await fetch(url, options);
    const { status, message } = (await response.json()) as iResult;

    if (status === 'error') {
      toast.error(message);
    } else {
      if (redirect) location.href = redirect;
      toast.success(successMessage);
    }
  } catch (error) {
    console.error(`deleteResourceApi(${endpoint})`, error);
    toast.error(errorMessage);
  }
};
