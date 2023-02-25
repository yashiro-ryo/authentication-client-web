<template>
  <div class="container">
    <div class="app-name">
      <p>アカウント作成</p>
    </div>
    <div class="card">
      <form id="form">
        <div class="mb-3">
          <label class="form-label">名前</label>
          <input
            type="text"
            class="form-control"
            id="form-name"
            placeholder="名前"
          />
          <p class="error-text" id="name-error"></p>
        </div>
        <div class="mb-3">
          <label class="form-label">メールアドレス</label>
          <input
            type="email"
            class="form-control"
            id="form-email"
            aria-describedby="emailHelp"
            placeholder="メールアドレス"
          />
          <p class="error-text" id="email-error"></p>
        </div>
        <div class="mb-3">
          <label class="form-label">パスワード</label>
          <input
            type="password"
            class="form-control"
            id="form-pass"
            placeholder="パスワード"
          />
          <div id="emailHelp" class="form-text">8文字以上の英数字</div>
          <p class="error-text" id="pass-error"></p>
        </div>
        <div class="mb-3">
          <label class="form-label">パスワード確認</label>
          <input
            type="password"
            class="form-control"
            id="form-pass-confirm"
            placeholder="パスワード"
          />
          <p class="error-text" id="pass-confirm-error"></p>
        </div>
      </form>
      <p id="err-msg"></p>
      <button
        type="submit"
        class="btn btn-primary"
        id="submit-btn"
        onclick="submit()"
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
