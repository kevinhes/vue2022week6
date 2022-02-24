<template>
      <div class="container">
      <h1 class="text-center">產品列表</h1>
          <div class="mt-4">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>圖片</th>
                  <th>商品名稱</th>
                  <th>價格</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product) in productsData" :key="product.id">
                  <td style="width: 200px">
                    <div style="height: 100px; background-size: cover;
                    background-position: center;width: 100px;"
                    :style="{'backgroundImage': `url(${product.imageUrl})`}"></div>
                  </td>
                  <td>{{product.title}}</td>
                  <td>
                    <div class="h5" v-if="product.origin_price === product.price">
                      {{product.origin_price}}元
                    </div>
                    <div v-else>
                      <del class="h6">原價{{product.origin_price}}元</del>
                      <div class="h5">現在只要{{product.price}}元</div>
                    </div>
                  </td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <router-link type="button" class="btn btn-outline-secondary"
                      :to="`/product/${product.id}`">
                        <i class="fas fa-spinner fa-pulse"></i>
                        查看更多
                      </router-link>
                      <button type="button" class="btn btn-outline-danger"
                       @click="addToCart(product.id)">
                        <i class="fas fa-spinner fa-pulse"></i>
                        加到購物車
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination :pagination="pagination" @page-change="getProductsData"></pagination>
          </div>
      </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      productsData: [],
      pagination: {},
      isLoading: false,
    };
  },
  components: { Pagination },
  methods: {
    getProductsData(page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.productsData = res.data.products;
          this.pagination = res.data.pagination;
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
        .then(() => {})
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  mounted() {
    this.getProductsData();
  },
};
</script>
