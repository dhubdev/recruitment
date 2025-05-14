<script lang="ts">
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "./components/app-sidebar.svelte";
	import NavRight from "./components/sidebar/nav-right.svelte";
	import NavTop from "./components/sidebar/nav-top.svelte";
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<NavTop />
		<header class="flex sticky top-9 z-[10] bg-background lg:top-0 h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div class="grid auto-rows-min gap-4 md:grid-cols-3">
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
			</div>
			<!-- <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div> -->
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam commodi harum natus hic quam distinctio nihil nobis temporibus quas in, consectetur, inventore voluptate debitis obcaecati dolore iure nemo nisi?</p>
		</div>
	</Sidebar.Inset>
	<NavRight />
</Sidebar.Provider>