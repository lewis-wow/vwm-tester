<div
  class="w-[36rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
>
  <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="mt-1 text-lg text-gray-500 dark:text-gray-500">
      <slot name="title" />
    </h3>
  </div>
  <div class="p-4 md:p-5">
    <slot />
  </div>
</div>
