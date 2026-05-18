<script setup>
const { success } = useAppToast();

const handleClick = () => {
  success('Hello');
};
</script>

<template>
  <div>
    <h1>Countries page - coming soon</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>
