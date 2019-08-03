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

    <!-- MAIN LISTINGS -->

    <div class="container pt-5 mt-5">
      <div class="row">
        <div class="col">
          <h2 class="py-2">Artist Submission</h2>
        </div>
      </div>

      <div class="row">
        <!-- SHOW LISTINGS & CREATE NEW SHOW-->
        <div class="col-md-8">
          <div class="card mb-5">
            <div class="card-body">
              <h4>Show Details</h4>
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Your Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Title"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Website / Portfolio</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Instagram</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Link to Photos of Submitted Work</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Dropbox, Google Drive, etc..."
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Link to Supplemental Material</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Artist Statement PDF, etc..."
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Additional Submission Information</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <router-link to="/" class="btn btn-primary">Submit Application</router-link>
              <!-- <button class="btn-primary btn text-right">Submit Application</button> -->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Application Info</h5>
            </div>
            <div class="card-body">
              <h6>Application Deadline</h6>
              <p>July 27th, 2019</p>
              <h6>What to Include When Applying...</h6>
              <ul>
                <li>Name</li>
                <li>3-4 Pieces of Work (less than 100x100cm)</li>
                <li>Artist Statement</li>
                <li>Why would you be a good fit?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
  name: "apply"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
