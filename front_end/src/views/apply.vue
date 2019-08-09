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
                      <label for="artistName">Your Name</label>
                      <input
                        v-model="submission.artistName"
                        type="text"
                        class="form-control"
                        id="artistName"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="artistEmail">Your Email</label>
                      <input
                        v-model="submission.artistEmail"
                        type="email"
                        class="form-control"
                        id="artistEmail"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="website">Website / Portfolio</label>
                      <input
                        v-model="submission.website"
                        type="url"
                        class="form-control"
                        id="website"
                        placeholder="Website / Portfolio"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="instagram">Instagram</label>
                      <input
                        v-model="submission.instagram"
                        type="url"
                        class="form-control"
                        id="instagram"
                        placeholder="Instagram!!"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="imagesLink">Link to Photos of Submitted Work</label>
                  <input
                    v-model="submission.imagesLink"
                    type="url"
                    class="form-control"
                    id="imagesLink"
                    placeholder="Dropbox, Google Drive, etc..."
                  />
                </div>
                <div class="form-group">
                  <label for="additinalLink">Link to Supplemental Material</label>
                  <input
                    v-model="submission.additionalLink"
                    type="url"
                    class="form-control"
                    id="additinalLink"
                    placeholder="Dropbox, Google Drive, etc..."
                  />
                </div>
                <div class="form-group">
                  <label for="fullyDescription">Additional Submission Information</label>

                  <textarea
                    v-model="submission.fullyDescription"
                    type="url"
                    class="form-control"
                    id="fullyDescription"
                    rows="10"
                    placeholder="Dropbox, Google Drive, etc..."
                  ></textarea>
                </div>
                <div class="card-footer d-flex justify-content-center">
                  <button @click="postSubmission()" class="btn btn-primary">Submit Application</button>
                </div>
              </form>
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
  name: "apply",
  props: ["id"],
  data() {
    return {
      submission: {
        artistName: "",
        artistEmail: "",
        website: "",
        instagram: "",
        fullyDescription: "",
        imagesLink: "",
        additionalLink: "",
        status: "",
        isSummited: false
      }
    };
  },
  methods: {
    postSubmission() {
      fetch(`http://localhost:3000/shows/${this.id}/submissions`, {
        method: "POST",
        body: JSON.stringify(this.submission),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });

      //Para cambiar de ruta a la de agradecimiento
      //router.push({ name: 'user', params: { userId: 123 }})
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
