<template>
  <div class="col-md-4">
    <div class="card mb-4" >
      <img class="card-img-top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png">
      <div class="card-body">
        <h2 class="card-title">{{product.name}}</h2>
        <h6 class="card-subtitle mb-2 text-muted">{{product.price}}</h6>
        <a href="#" class="btn btn-primary">Wish list</a>
        <a href="#" class="btn btn-success">Buy</a>
        <hr>
        <p v-if="product.user_id == authenticatedUser.id">
          <a href="#" class="btn btn-danger" role="button" @click="$emit('delete-product')">
            Delete
          </a>
          <router-link class="btn btn-success"
            :to="'/products/'+ product.id +'/edit'">
            Edit
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        props:['product','authenticatedUser'],

    }
</script>

<style scoped>

</style>
