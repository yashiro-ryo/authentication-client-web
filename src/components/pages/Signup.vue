<template>
  <div class="container">
    <div class="app-name">
      <p>アカウント作成</p>
    </div>
    <div class="card">
      <form id="form">
        <div class="mb-3">
          <label class="form-label">メールアドレス</label>
          <input
            type="email"
            class="form-control"
            id="form-email"
            aria-describedby="emailHelp"
            placeholder="メールアドレス"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">パスワード</label>
          <input
            type="password"
            class="form-control"
            id="form-pass"
            placeholder="パスワード"
            v-model="pass"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">パスワード確認</label>
          <input
            type="password"
            class="form-control"
            id="form-pass-confirm"
            placeholder="パスワード"
            v-model="confirmPass"
          />
        </div>
      </form>
      <p id="err-msg">{{ errorText }}</p>
      <button
        type="submit"
        class="btn btn-primary"
        id="submit-btn"
        @click="doSignup"
      >
        登録
      </button>
    </div>
    <div class="link-group">
      <router-link to="/signin">ログインはこちら</router-link>
      <router-link to="/forget">パスワードを忘れた場合はこちら</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  setup() {
    const email = ref("");
    const pass = ref("");
    const confirmPass = ref("");
    const errorText = ref("");

    const validateForm = () => {
      if (pass.value !== confirmPass.value) {
        console.log("パスワードが一致しない");
        return false;
      }
      return true;
    };

    const doSignup = () => {
      if (!validateForm()) {
        return;
      }
      createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // TODO redirect to /home
          window.location.href = "https://task-manage-app.com/home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          errorText.value =
            "アカウント作成に失敗しました。再度お試しください。";
          // ..
        });
    };

    return {
      email,
      pass,
      confirmPass,
      errorText,
      doSignup,
    };
  },
});
</script>
