<template>
  <div>authorized</div>
  {{ route.query }}

  <div>{{ accessToken }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";

const route = useRoute();
const { code } = route.query;
const accessToken = ref(null);
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
      .then((response) => {
        accessToken.value = response.data.access_token;
        console.log(28, "refresh token", response.data);
      });
  });
// http://localhost:8080/oauth2/token?grant_type=refresh_token&refresh_token=
</script>

<style lang="scss" scoped></style>
