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
              <router-link to="/dashboard" class="nav-link active">Dashboard</router-link>
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

    <!-- DASHBOARD -->
  <section id="mainListing">
    <div class="container pt-5 mt-5">
      <div class="row">
        <div class="col">
          <h2 class="py-2">My Shows</h2>
        </div>
      </div>
 
      <div class="row">
    <!-- SHOW LISTINGS & CREATE NEW SHOW-->
          <div class="col-md-8">
            <div class="card mb-5">
              <div class="card-header">
                <div class="row">
                    <div class="col-sm-8">
                        <h5 class="text-muted">Coffice</h5>
                        <h3>First Friday Show</h3>
                    </div>

                    <div class="col-sm-4 ml-auto text-right">
                        <p class="text-muted">Group Show</p>
                        <p>August 6th, 2019</p>
                    </div>

                </div>

              </div>
              <div class="card-body">
                <div class="row">
                    <div class="col-md card-text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero porro ratione illum dolores culpa odio excepturi, quis nesciunt non ad.</p>
                    </div>
                </div>
              </div>
            <div class="card-footer">
                <div class="row d-flex justify-content-between px-3">
                  <div class="text-left">
                    <p class=" my-0 py-0"><strong>27</strong> Submissions <i class="fas fa-fire-alt text-danger"></i></p> 
                    <p class="text-muted my-0 py-0">Deadline: July 24th</p>
                  </div>
                  <div class="row">
                    <router-link to="/review-application" class="btn btn-lg btn-success">Review Submissions</router-link>
                    <!-- <button class="btn btn-outline-success btn-lg mx-3">Review Submissions</button> -->
                  </div>
                </div>
            </div>
          </div>

    <!-- LISTING CARD START-->
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h4>Your Profile</h4>
        </div>
        <div class="card-body">
          <h6>Name</h6>
          <p>Juan Smith</p>

          <h6>Email</h6>
          <p>JuanSmith@Example.com</p>

          <h6>Password</h6>
          <p>* * * * * * *</p>

        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn-outline-secondary btn-sm text-right">Edit Profile</button>
          <button class="btn-outline-danger btn-sm text-right">Logout</button>
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
import axios from "axios";

export default {
  name: "dashboard",
  data() {
    return {
      shows: []
    };
  }
  // created(e) {
  //   e.preventDefault();

  //   const result = axios({
  //     method: "POST",
  //     url: ""
  //   });
  // }
};
</script>
