<template>
    <div>
        <div class="form-group">
            <label>Name</label>
            <input type="text"
                   class="form-control"
                   v-model="name"
                   placeholder="Name">
        </div>

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
        <button type="submit" class="btn btn-primary">Register</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        }
    }


</script>

<style>

</style>