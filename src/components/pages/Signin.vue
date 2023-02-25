<template>
  <div class="container">
    <div class="signin-form">
      <div class="app-name">
        <p>タスク管理アプリ</p>
      </div>
      <div class="card">
        <form id="form">
          <div class="mb-3">
            <label class="form-label">メールアドレス</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="メールアドレス"
              id="form-email"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">パスワード</label>
            <input
              type="password"
              class="form-control"
              placeholder="パスワード"
              id="form-pass"
            />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label" id="form-save-signin-info"
              >ログイン情報を保存する</label
            >
          </div>
        </form>
        <p id="err-msg"></p>
        <button id="submit-btn" class="btn btn-primary" onClick="submit()">
          ログイン
        </button>
      </div>
      <div class="link-group">
        <router-link to="/signup">アカウント新規作成</router-link>
        <router-link to="/forget">パスワードを忘れた場合はこちら</router-link>
      </div>
    </div>
  </div>
</template>
