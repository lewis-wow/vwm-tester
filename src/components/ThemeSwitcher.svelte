<script>
    import { onMount } from 'svelte';

    let theme = "light";

    onMount(()=>{
        theme = localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        localStorage.setItem('theme', theme);
        if (theme === 'dark')
            document.documentElement.classList.add('dark');
    });

    const changeTheme = () => {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark');
    };
</script>

<div class="absolute bottom-0 right-0 m-2">
    <button
        class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800"
        on:click={changeTheme}
    >
        <span class="text-2xl">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
</div>