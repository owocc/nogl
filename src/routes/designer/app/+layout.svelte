<script>
	import LayoutNavbar from '../components/layout/navbar.svelte';
	export const ssr = false;
</script>

<LayoutNavbar>
	<div slot="left" class="flex items-center">
		<h2 class="inline-flex gap-2 w-[200px] items-center">
			<!-- 默认左侧为返回仪表盘 -->
			<a
				href="/dashboard/application/detail"
				class="hover:bg-slate-100 hover:text-primary text-gray-800 rounded-md h-8 w-8 inline-flex justify-center items-center"
			>
				<span class="i-ph-caret-left-bold text-sm"></span>
			</a>

			<span class="flex-1 text-sm font-bold">Title</span>
		</h2>
		<div class="w-[30px]"></div>
		<div>
			<button>
				<span class="i-ph-arrow-u-up-left-bold"></span>
			</button>
			<button>
				<span class="i-ph-arrow-u-up-right-bold"></span>
			</button>
		</div>
	</div>

	<div slot="right" class="bg-gray-500">hhh</div>
</LayoutNavbar>

<div>
	<!-- 侧栏 -->
	<aside class="h-full-screen min-h-full-screen border-r w-[230px] overflow-y-auto">
		<!-- 菜单按钮 -->
		<div></div>
		<!-- 菜单树 -->
		<div></div>
	</aside>
	<main>
		<!-- 画布 -->
	</main>
</div>
