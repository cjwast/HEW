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
        </div>
      </div>
    </nav>

    <!-- MAIN LISTINGS -->
    <section id="mainListing">
      <div class="container pt-5 mt-5">
        <div class="row">
          <div class="col">
            <h2 class="py-2">Submissions: First Friday Show</h2>
          </div>
        </div>

        <div class="row">
          <!-- SHOW LISTINGS & CREATE NEW SHOW-->
          <div class="col-md-8">
            <!-- CARD WITH NAV -->

            <div class="card">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">New (10)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Accepted (3)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Maybe (22)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Rejected (14)</a>
                  </li>
                </ul>
              </div>
              <div id="accordion">
                <div v-for="(submission, i) of submissions" :key="i">
                  <div class="card-body" id="headingOne">
                    <div class="row d-flex justify-content-between">
                      <div class="col">
                        <h3>{{submission.artistName}}</h3>
                      </div>
                      <div class="col text-right">
                        <button
                          class="btn btn-sm btn-danger"
                          @click="updateSubmission(submission._id, 3)"
                        >Reject</button>
                        <button
                          class="btn btn-sm btn-warning mx-3"
                          @click="updateSubmission(submission._id, 4)"
                        >Maybe</button>
                        <button
                          class="btn btn-sm btn-success"
                          @click="updateSubmission(submission._id, 2)"
                        >Accept</button>
                      </div>
                    </div>
                    <div class="row d-flex left-content-between py-3 px-3">
                      <h6>
                        <a v-bind:href="submission.website" target="_blank" class>
                          <i class="fas fa-external-link-square-alt mr-1"></i>Website
                        </a>
                        &
                      </h6>
                      <h6>
                        <a v-bind:href="submission.instagram" target="_blank" class>
                          <i class="fas fa-external-link-square-alt mr-1"></i>Instagram
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">{{submission.fullyDescription}}</div>
                  </div>
                  <hr class="p-0 m-0" />
                </div>
                <hr class="p-0 m-0" />
              </div>
            </div>

            <!-- LISTING CARD START-->
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4>Message Artists (1)</h4>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Thanks for your submission"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Body</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-end">
                <button class="btn-outline-success btn-sm text-right">Send</button>
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
  name: "reviewApplications",
  props: ["id"],
  data() {
    return {
      submissions: []
    };
  },
  methods: {
    updateSubmission(id, status) {
      console.log(
        `this the ID => ${id}, and this one is the status => ${status}`
      );
      const resultado = axios({
        method: "PUT",
        url: `https://hewbk1.herokuapp.com/shows/submissions/${id}/${status}`,
        responseType: "json"
      });

      resultado
        .then(response => {
          this.$router.go();
        })
        .catch(err => {
          console.log(`Este es el error => ${err}`);
        });
    }
  },
  created() {
    axios({
      method: "GET",
      url: `https://hewbk1.herokuapp.com/shows/${this.id}/submissions`,
      responseType: "json"
    })
      .then(response => {
        this.submissions = response.data.submissions;
      })
      .catch(err => {
        console.log(`Este es el error => ${err}`);
      });
  }
};
</script>
