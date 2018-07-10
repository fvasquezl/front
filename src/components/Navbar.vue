<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">

        <li class="nav-item" v-if="! isAuth">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>

        <li class="nav-item" v-if="! isAuth">
          <router-link to="/register" class="nav-link">
            Register
          </router-link>
        </li>

        <li class="nav-item" v-if="isAuth">
          <router-link to="/feed" class="nav-link">
            Feed
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuth">
          <router-link to="/products/create" class="nav-link">
            Create
          </router-link>
        </li>
        <!--<li class="nav-item" v-if="isAuth">-->
          <!--<router-link to="/products/edit" class="nav-link">-->
            <!--Update-->
          <!--</router-link>-->
        <!--</li>-->

        <li class="nav-item" v-if="isAuth">
          <router-link to="/logout" class="nav-link">
            Logout
          </router-link>
        </li>

      </ul>
    </nav>
    <h3 class="text-muted">Project name</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        isAuth:null
      }
    },
    created () {
      this.isAuth = this.$auth.isAuthenticated()
      this.setAuthenticatedUser()

    },
    methods: {
      setAuthenticatedUser () {
        this.$http.get('api/user')
          .then(response=>{
            this.$auth.setAuthenticatedUser(response.body)

            console.log(this.$auth.getAuthenticatedUser())

          })
      }
    }
  }
</script>
