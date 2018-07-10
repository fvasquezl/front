<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">

        <div class="form-group">
          <label>Name:</label>
          <input name="name" type="text" class="form-control" placeholder="Name"
                 v-model="product.name">
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input name="price" type="number" class="form-control" placeholder="Price"
                 v-model="product.price">
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea name="description" type="text" class="form-control" placeholder="Description"
                    v-model="product.description">

          </textarea>
        </div>
        <button class="btn btn-primary"
                @click="update"
                v-show="product.name && product.price && product.description">Update
        </button>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert'

  export default {

    created(){
      this.getProduct()
    },

    data() {
      return {
        product: {}
      }
    },
    methods: {
      getProduct(){
          this.$http.get('api/products/' + this.$route.params.product)
            .then(response=>{
              this.product = response.body
            })
            .catch(response=>{
              swal(response.status.toString(),"error","error")
            })
      },
      update() {
        this.$http.put('api/products/'+ this.$route.params.product, this.product)
          .then(response => {
            swal("Updated!", "Your product has been updated!", "success")
          })
      }
  }
  }
</script>




