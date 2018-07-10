<template>
    <div>
        <div class="form-group">
            <label>Email address</label>
            <input type="email"
                   class="form-control"
                   v-model="email"
                   placeholder="Email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password"
                   class="form-control"
                   v-model="password"
                   placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2">
            <label class="form-check-label" for="dropdownCheck2">
                Remember me
            </label>
        </div>
        <button @click="login" class="btn btn-primary">Sign in</button>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
      methods:{
          login () {
            var data = {
              client_id: 2,
              client_secret :'J0LUOjqFkCCy2qJwvVG1qcLNxhBVWopurkvfk3VL',
              grant_type:"password",
              username: this.email,
              password: this.password
            }

            this.$http.post("oauth/token", data)
              .then(response =>{
                this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                this.$router.push("/feed")
              })
          }
      }

    }

</script>

<style>

</style>
