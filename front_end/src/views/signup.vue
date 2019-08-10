<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">Hew</router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- UNVERIFIED - NOT LOGGED IN -->

          <ul class="navbar-nav ml-auto">
            <li class="nav-item px-2">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/signup" class="nav-link">Signup</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/signup" class="btn btn-success">Curators: Create A Show</router-link>
            </li>
          </ul>

          <!-- VERIFIED - LOGGED IN USER -->
          <!-- <ul class="navbar-nav ml-auto">
          <li class="nav-item px-2">
            <router-link to="/dashboard" class="btn btn-outline-light">Dashboard<span class="badge badge-light ml-2">27</span></router-link>
          </li>

          <li class="nav-item px-2">
            <router-link to="/new-show" class="btn btn-success">Create A Show</router-link>
          </li>
          </ul>-->
        </div>
      </div>
    </nav>

    <!-- LOGIN / SIGN -->

    <section id="login-signup">
      <div class="container">
        <div class="row h-100 d-flex justify-content-center align-items-stretch">
          <div class="col-md-6 login-form my-5">
            <div class="card bg-light text-dark mt-5">
              <div class="card-body">
                <h1>Curators & Venues</h1>
                <h5>Sign up to create a show and start receiving artist submissions.</h5>
                <form>
                  <div class="form-group mt-3">
                    <div class="row">
                      <div class="col-sm-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" />
                      </div>
                      <div class="col-sm-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="form-group mb-4">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>

                  <div class="d-flex justify-content-between align-items-center text-light">
                    <p class="align-items-bottom text-secondary">
                      Already have an account?
                      <a href="login.html">Log In.</a>
                    </p>
                    <a href="dashboard.html" class="btn btn-secondary">Sign Up</a>
                    <!-- <button type="submit" class="btn btn-secondary">Sign Up</button> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="page-footer font-small pt-4 mt-5 bg-light">
      <div class="container">
        <!--Grid row-->
        <div class="row text-dark">
          <!--Grid column-->
          <div class="col-md-7 mb-4">
            <h5>Want to be notified when new shows are available?</h5>
          </div>
          <div class="col-md-5 mb-4">
            <form class="input-group">
              <input
                type="text"
                class="form-control-sm form-control"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-sm btn-secondary my-0" type="button">Notify me</button>
              </div>
            </form>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>

      <!-- Copyright -->

      <div class="footer-copyright d-flex bg-secondary text-light justify-content-around py-2">
        <router-link to="/about" class="nav-link">About</router-link>
        <span>
          © Hew
          <span id="year"></span>
        </span>
        <a class="nav-link" href="mailto:holahew@gmail.com">Contact</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
