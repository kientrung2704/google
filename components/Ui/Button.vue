<template>
  <div class="center">
    <GoogleSignInButton
      type="icon"
      size="large"
      shape="circle"
      width="40"
      @success="onSuccess"
      @error="onError"
    />
  </div>
</template>

<script setup>
  // eslint-disable-next-line no-console
  const onSuccess = (resp) => alert(resp);
  // eslint-disable-next-line no-console
  const onError = (resp) => console.error(resp);
</script>

<style></style>
