<template></template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default defineComponent({
  setup() {
    const doSignout = () => {
      signOut(auth).then(() => {
        window.location.href = "https://task-manage-app/signin";
      });
    };
    onMounted(() => {
      doSignout();
    });
  },
});
</script>
