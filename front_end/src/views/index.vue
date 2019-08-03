<template>
  <div class="hello">
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

    <!-- JUMBOTRON -->

    <div class="jumbotron bg-secondary text-light text-center mt-5">
      <h1 class="display-4">Open Calls for Art</h1>
    </div>

    <!-- MAIN LISTINGS -->
    <section id="mainListing">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-left">
            <h2 class="py-2">
              Art Shows in:
              <u>Mexico City</u>
              <i class="fas fa-caret-down text-muted"></i>
            </h2>
          </div>
          <div class="col-md-6 align-text-bottom text-right">
            <p class="align-bottom mt-4">
              Sort by:
              <u>Application Deadline</u>
              <i class="fas fa-caret-down text-muted"></i>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <!-- LISTING CARD START-->
            <div class="card mb-5">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-7 text-left">
                    <h5 class="text-muted">Coffice</h5>
                    <h3>First Friday Show</h3>
                  </div>

                  <div class="col-sm-5 ml-auto text-right">
                    <p class="text-muted">Group Show</p>
                    <p>August 6th, 2019</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md card-text text-left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero porro ratione illum dolores culpa odio excepturi, quis nesciunt non ad.</p>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row d-flex justify-content-between px-3">
                  <div class="text-left">
                    <p class="my-0 py-0">
                      <strong>27</strong> Submissions
                      <i class="fas fa-fire-alt text-danger"></i>
                    </p>
                    <p class="text-muted my-0 py-0">Deadline: July 24th</p>
                  </div>
                  <div class="row">
                    <router-link
                      to="/show-details"
                      class="btn btn-outline-primary btn-lg mx-3"
                    >Artist Submission</router-link>
                    <!-- <button class="btn btn-outline-primary btn-lg mx-3">Artist Submission</button> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- LISTING CARD START-->
            <div class="card mb-5">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-8 text-left">
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
                  <div class="col-md card-text text-left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero porro ratione illum dolores culpa odio excepturi, quis nesciunt non ad.</p>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row d-flex justify-content-between px-3">
                  <div class="text-left">
                    <p class="my-0 py-0">
                      <strong>27</strong> Submissions
                      <i class="fas fa-fire-alt text-danger"></i>
                    </p>
                    <p class="text-muted my-0 py-0">Deadline: July 24th</p>
                  </div>
                  <div class="row">
                    <a
                      href="show-details.html"
                      class="btn btn-outline-primary btn-lg mx-3"
                    >Artist Submission</a>
                    <!-- <button class="btn btn-outline-primary btn-lg mx-3">Artist Submission</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PAGINATION WITH ARROWS -->
    <div class="d-flex row justify-content-center">
      <nav>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              <span>&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span>&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

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
  name: "index.vue",
  data() {
    return {
      shows: []
    };
  },
  methods: {
    getShows() {
      fetch("http://localhost:3000/shows")
        .then(res => res.json())
        .then(data => {
          this.shows = data;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getShows();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
