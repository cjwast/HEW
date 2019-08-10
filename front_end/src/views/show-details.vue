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

    <div class="container pt-5 mt-5">
      <div class="row">
        <div class="col">
          <h2 class="py-2">Show Details</h2>
        </div>
      </div>

      <div class="row">
        <!-- SHOW LISTINGS & CREATE NEW SHOW-->
        <div class="col-md-8">
          <div class="card mb-5">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <h5>Show Title</h5>
                  <p>{{show.title}} @ {{show.venue.name}}</p>
                </div>
                <div class="col-sm-6">
                  <h5>Show Type</h5>
                  <p>{{show.showType==1?'Solo Show':'Group Show'}}</p>
                </div>

                <div class="col-sm-6">
                  <h5>Start Date</h5>
                  <p>{{show.startDate}}</p>
                </div>
                <div class="col-sm-6">
                  <h5>End Date</h5>
                  <p>{{show.endDate}}</p>
                </div>
              </div>

              <h5>Show Overview</h5>
              <p>{{show.overview}}</p>

              <div class="form-group">
                <h5>Full Description</h5>
                {{show.fullDescription}}
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <h5>Venue Name</h5>
                  <p>{{show.venue.name}}</p>
                </div>
                <div class="col-sm-6">
                  <h5>Venue Website</h5>
                  <a href>{{show.venue.webSite}}</a>
                </div>

                <div class="col-sm-6">
                  <h5>Venue Address</h5>
                  <p>{{show.venue.address1}}</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <router-link
                class="btn btn-primary"
                :to="{name:'apply', params:{id:show._id}}"
              >Arists: Submit Your Work</router-link>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h4 class="pt-3">Application Info</h4>
            </div>
            <div class="card-body">
              <h5>Application Deadline</h5>
              <p>{{show.applicationDeadLine}}</p>
              <h5>What to include...</h5>
              <p class="text-justify">{{show.applicationInstructions}}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <router-link to="/apply" class="btn btn-primary">Artist Submission</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-details",
  props: ["id"],
  data() {
    return { show: {} };
  },
  mounted() {
    fetch("http://localhost:3000/shows/" + this.id)
      .then(data => data.json())
      .then(res => (this.show = res));
  }
};
</script>