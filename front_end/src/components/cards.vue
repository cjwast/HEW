<template>
  <div>
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

            <div class="card mb-5" v-for="(show, i) of shows" :key="i">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-8 text-left">
                    <h5 class="text-muted">{{show.venue.name}}</h5>
                    <h3>{{show.title}}</h3>
                  </div>

                  <div class="col-sm-4 ml-auto text-right">
                    <p class="text-muted">{{show.showtype}}</p>
                    <p>{{show.endDate}}</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md card-text text-left">
                    <p>{{show.overview}}</p>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row d-flex justify-content-between px-3">
                  <div class="text-left">
                    <p class="my-0 py-0">
                      <strong>{{(show.numberOfSubmissions==undefined?0:show.numberOfSubmissions)}}</strong> Submissions
                      <i class="fas fa-fire-alt text-danger"></i>
                    </p>
                    <p class="text-muted my-0 py-0">Deadline: {{show.applicationDeadLine}}</p>
                  </div>
                  <div class="row">
                    <router-link
                      class="btn btn-outline-primary btn-lg mx-3"
                      :to="{name:'showDetails', params: {id:show._id}}"
                    >Artist Submission</router-link>
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
  </div>
</template>
<script>
export default {
  name: "cards.vue",
  data() {
    return {
      shows: []
    };
  },
  methods: {
    getShows() {
      fetch("https://hewbk1.herokuapp.com/shows")
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