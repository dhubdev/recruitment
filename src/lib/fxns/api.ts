import type { iBlog } from "$lib/interface";
import type { iResult } from "@toolsntuts/utils";
import { toast } from "svelte-sonner";

export const deleteBlogApi = async (blog: iBlog) => {
  if (blog) {
    try {
      const url = `/api/blogs/${blog.xata_id}`;

      const options: RequestInit = {
        method: 'DELETE',
      };

      const response = await fetch(url, options);
      const { status, message } = (await response.json()) as iResult;

      if (status === 'error') {
        toast.error(message);
      } else {
        location.href = `/admin/blogs`;
        toast.success('Blog deleted');
      }
    } catch (error: any) {
      console.log("deleteBlogApi()")
      toast.error('Make sure you remove fields using this blog');
    }
  }
};