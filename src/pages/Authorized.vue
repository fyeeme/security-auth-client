<template>
  <div>authorized</div>
  {{ route.query }}
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
console.log();
const { code } = route.query;
//获取 accessToken and refreshToken
axios
  .post(
    "/api/oauth2/token?grant_type=authorization_code&code=" + code,
    {},
    {
      auth: {
        username: "client",
        password: "client",
      },
    }
  )
  .then((res) => {
    console.log(26, res.data);
    // 刷新 accessToken and refreshToken
    axios
      .post(
        "/api/oauth2/token?grant_type=refresh_token&refresh_token=" +
          res.data.refresh_token
      )
      .then((res) => {
        console.log(28, "refresh token", res.data);
      });
  });
// http://localhost:8080/oauth2/token?grant_type=refresh_token&refresh_token=
</script>

<style lang="scss" scoped></style>
