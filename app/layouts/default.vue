<template>
  <div class="min-h-screen flex flex-col bg-light-50 text-gray-900 dark:bg-dark-950 dark:text-gray-100">
    <AppHeader />
    <main class="flex flex-1 flex-col w-full mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 pt-24 pb-6">
      <slot />
    </main>
  </div>
</template>
