<template>
    <div class="row">
      <div class="col-md-8 offset-md-2">

          <div class="form-group">
            <label>Name:</label>
            <input name="name" type="text"class="form-control" placeholder="Name"
                   v-model="product.name">
          </div>
        <div class="form-group">
          <label>Price:</label>
          <input name = "price" type="number"
                 class="form-control"
                 placeholder="Price"
                 v-model="product.price">
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea type="text"
                    class="form-control"
                    placeholder="Description"
                    v-model="product.description"></textarea>
        </div>
        <button class="btn btn-primary"
                @click="create"
                v-show="product.name && product.price && product.description">Create</button>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
          return{
            product:{
              name:'',
              price:0,
              description:''
            }
          }
      },
      methods:{
          create(){
            this.$http.post('api/products', this.product)
              .then(response =>{
                this.$router.push('/feed')
              })
          }
      }
    }
</script>


