<script>
	import clsx from 'clsx';

	let linkStyle = clsx('text-sm inline-block p-2 text-primary hover:underline');
</script>

<title>NOGL | Next Open-source Gag Language</title>
<main class="flex justify-center h-screen w-screen items-center flex-col gap-4 bg-gray-100">
	<div
		class="flex justify-center items-center flex-col gap-4 w-4/5 h-4/5 bg-white rounded-lg border border-gray-200"
	>
		<img src="/svelte-icon.svg" alt="Logo" class="w-32" />
		<h1 class="text-5xl font-bold text-gray-600 relative">
			<span class=" -rotate-12 inline-block hover:-translate-y-1 transition-transform select-none"
				>😊</span
			>
			<span class="text-2xl">
				下一代开源 <span class="bg-primary text-white p-1 mx-1">玩笑</span>语言
			</span>
			<span
				class="text-8xl absolute left-full -top-full rotate-12 select-none hover:-rotate-12 translate-x-2 transition-transform"
				>🤡</span
			>
		</h1>
		<p class="text-gray-600 font-bold text-lg">Next Open-source Gag Language</p>
		<p class="text-gray-500">
			以及基于 " <span class="text-primary">Svelte Kit</span> " 开发的低代码平台
		</p>
		<a
			href="/auth/login"
			class="select-none min-w-44 align-middle text-center inline-block bg-primary text-white font-bold rounded-md h-12 leading-[3rem] active:bg-red-500 hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-red-500"
		>
			开始
		</a>
		<div class="flex gap-4 justify-center">
			<a href="/home" class={linkStyle} title="直接进入控制中心"> 首页 </a>
			<a href="/dashboard" class={linkStyle} title="直接进入控制中心"> 仪表盘 </a>
			<a href="/dashboard" class={linkStyle} title="直接进入控制中心"> 文档 </a>
			<a href="/designer/app" class={linkStyle} title="直接进入控制中心"> 测试 </a>
		</div>
	</div>
</main>
