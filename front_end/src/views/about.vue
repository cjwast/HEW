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

    <!-- ABOUT -->

    <section id="about">
      <div class="container mt-5">
        <div class="row center">
          <div class="col">
            <h1 class="mt-5">About Us</h1>
            <p class="lead">We are a team of artists and technologists based in Mexico City.</p>
            <h3 class="mt-4">Our Mission</h3>
            <p>
              We exist to
              <strong>elevate emerging artists</strong> by
              <strong>supporting independent curators and art spaces</strong> around the world.
            </p>
            <p>
              We believe our work will help
              <strong>grow the primary art market</strong> and, ultimately,
              <strong>increase public interest in and accessibility to unique works created by living artists.</strong>
            </p>
            <p>
              We will support the creation of
              <strong>100,000 art shows</strong> around the world in 5 years.
            </p>
            <h3 class="mt-4">Care to Join Us?</h3>
            <p>
              We work with passionate individuals to help support our mission, whether that means
              <strong>joining our team full-time to support our existing cities</strong> or
              <strong>partnering with us to help launch Hew in your city.</strong>
            </p>
            <h3 class="mt-4">Contact</h3>
            <p>
              Contact us to learn more:
              <a href="mailto:holahew@gmail.com">holahew@gmail.com</a>
            </p>
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
  name: "about"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
