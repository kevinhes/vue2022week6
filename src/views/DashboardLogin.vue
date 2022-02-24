<template>
  <div class="container">
    <div class="row justify-content-center text-center signup align-items-center">
      <div class="col-8">
        <h1 class="h3 mb-3 font-weight-normal">
          請先登入
        </h1>
        <Form v-slot="{ errors }" @submit="onSubmit" class="form-signin">
          <div class="form-floating mb-3">
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required"
            ></Field>
            <label for="email">Email address</label>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating mb-3">
            <Field
              id="password"
              name="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['password'] }"
              placeholder="請輸入 password" rules="required"
            ></Field>
            <label for="password">password</label>
            <error-message name="password" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button">
            登入
          </button>
        </Form>
        <!-- <Form id="form" class="form-signin" @submit="onSubmit" v-slot="{ errors }">
          <div class="form-floating mb-3">
            <Field type="email" class="form-control" id="email" rules="required"
            placeholder="name@example.com" autofocus :class="{'is-invalid': errors['email'] }"
            name="email"></Field>
            <label for="email">Email address</label>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating">
            <Field type="password" class="form-control" id="password"
            placeholder="Password" required></Field>
            <label for="password">Password</label>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
            登入
          </button>
        </Form> -->
        <div class="back-btn mx-auto">
          <button class="btn btn-lg btn-outline-danger w-100"
          @click="backToIndex">
            回到產品頁
          </button>
        </div>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    backToIndex() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
  .signup {
    height:calc(100vh*0.9);
  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .back-btn {
    width: 100%;
    max-width: 330px;
    padding: 0px 15px 15px 15px;
  }
</style>
