<template>
  <div class="container">
    <h1 class="text-center">單一產品頁面</h1>
    <div class="row">
      <div class="col-6">
        <img :src="product.imageUrl" alt="" class="img-fluid">
      </div>
      <div class="col-6">
        <span class="badge bg-primary rounded-pill">{{product.category}}</span>
        <p>商品描述：{{product.description}}</p>
        <p>商品內容：{{product.content}}</p>
        <div class="h5"
        v-if="product.origin_price === product.price">{{product.origin_price}} 元</div>
        <div v-else>
          <del class="h6">原價 {{product.origin_price}} 元</del>
          <div class="h5">現在只要 {{product.price}} 元</div>
        </div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" min="1" v-model="qty">
            <button type="button" class="btn btn-primary"
             @click="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      product: {},
      qty: 1,
    };
  },
  methods: {
    getProductId() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addToCart(id, qty = 1) {
      const obj = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`, obj)
        .then(() => {
          this.$router.push('/products');
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProductId();
  },
};
</script>
