<template>
  <div id="nav" class="mb-4 navbar-dark bg-dark">
    <div class="container d-flex justify-content-between py-3">
      <router-link to="/" class="nav-link text-light">Home</router-link>
      <div class="d-flex">
        <router-link to="/products" class="nav-link text-light">Products</router-link>
        <router-link to="/carts" class="nav-link text-light">購物車</router-link>
        <router-link to="/dashboardlogin" class="nav-link text-light">
          管理員登入
        </router-link>
      </div>
    </div>
  </div>
  <p class="h4 text-center">這是第六週作業</p>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
