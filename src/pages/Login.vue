<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label class="block">
        用户名
        <input type="text" v-model="form.username" />
      </label>
      <label class="block">
        密码
        <input type="password" v-model="form.password" />
      </label>
      <input type="submit" value="提交" />
    </form>
  </div>
</template>

<script setup>
import qs from "qs";
import { reactive } from "vue";
const form = reactive({ username: null, password: null });
import axios from "axios";

const onSubmit = (e) => {
  console.log(form);
  axios
    .post("/api/login", qs.stringify(form), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((data) => {
      console.log("Success:", data);
      //授权获取授权码
      window.location =
        "/api/oauth2/authorize?response_type=code&client_id=client&scope=read";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style lang="scss" scoped></style>
