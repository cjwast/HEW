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
        </div>
      </div>
    </nav>

   <!-- NEW SHOW -->
  
    <div class="container pt-5 mt-5">
      <div class="row">
        <div class="col">
          <h2 class="py-2">New Show</h2>
        </div>
      </div>
 
      <div class="row">
    <!-- SHOW LISTINGS & CREATE NEW SHOW-->
          <div class="col-md-8">
            <div class="card mb-5">
              <div class="card-body">
                <h4>Show Details</h4>
                
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Show Title</label>
                        <input type="text" class="form-control" id="showTitle" placeholder="Title" v-model="show.title">
                      </div>
                    </div>
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Show Type</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="showTypeSolo" value="1" v-model="show.showType">
                          <label class="form-check-label" for="showTypeSolo">Solo Show</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="showTypeGroup" value="2" v-model="show.showType">
                          <label class="form-check-label" for="showTypeGroup">Group Show</label>
                        </div>
                    </div>
    
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Start Date</label>
                        <input type="date" class="form-control" id="showStartDate" placeholder="" v-model="show.startDate">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">End Date</label>
                        <input type="date" class="form-control" id="showEndDate" placeholder="" v-model="show.endDate">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Show Overview</label>
                    <textarea class="form-control" id="showOverview" rows="3" v-model="show.overview"></textarea>
                  </div>
                  <div class="form-group">
                      <label for="exampleFormControlTextarea1">Full Description</label>
                      <textarea class="form-control" id="showFullDescription" rows="10" v-model="show.fullDescription"></textarea>
                  </div>


          <h4 class="pt-3">Venue Info</h4>
          <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlInput1">Venue Name</label>
              <input type="text" class="form-control" id="venueName" placeholder="Name of the cool venue you like" v-model="show.name">
            </div>
          </div>
          <div class="col-sm-6">
          <div class="form-group">
                <label for="exampleFormControlInput1">Venue Website</label>
                <input type="url" class="form-control" id="venueWebSite" placeholder="https://" v-model="show.webSite">
              </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Venue Address</label>
              <textarea class="form-control" id="venueAddress" rows="5" v-model="show.address1"></textarea>
            </div>
          </div>
        </div> 

                
                <h4 class="pt-3">Application Info</h4>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Application Deadline</label>
                  <input type="date" class="form-control" id="showAppicationDeadLine" v-model="show.applicationDeadLine">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Include In Submission...</label>
                    <textarea class="form-control" id="showApplicationInstruccions" rows="5" v-model="show.applicationInstructions"></textarea>
                </div>
      
              </div>
              <div class="card-footer d-flex justify-content-between">
                <!-- <button class="btn-dark btn text-right">Preview</button> -->
                <button @click="postShow" class="btn-success btn text-right">Publish Show</button>



              </div>
              </form>

              </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                Your Previous Shows
              </div>
              <div class="card-body">
    
                <h5>Previous Show Title 1</h5>
                <div class="d-flex justify-content-between">
                  <a href="#">View Details</a>
                  <a href="#">Duplicate Show</a>
                </div>
              
                <hr class="">

                <h5>Previous Show Title 2</h5>
                <div class="d-flex justify-content-between">
                  <a href="#">View Details</a>
                  <a href="#">Duplicate Show</a>
                </div>
              
                <hr class="">

                <h5>Previous Show Title 3</h5>
                <div class="d-flex justify-content-between">
                  <a href="#">View Details</a>
                  <a href="#">Duplicate Show</a>
                </div>
              
                <hr class="">

                <h5>Previous Show Title 4</h5>
                <div class="d-flex justify-content-between">
                  <a href="#">View Details</a>
                  <a href="#">Duplicate Show</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



    <!-- FOOTER -->
  
    
    


</template>

<script>

import axios from "axios";

export default {
  name: "new-show",
  data() {
    return {
      show: {
        title: "",
        showType: "",
        name: "",
        address1: "",
        webSite:"",
        applicationDeadLine: new Date,
        overview: "",
        fullDescription: "",
        applicationInstructions: "",
        startDate:  new Date,
        endDate:  new Date
      }
    }
  },
  methods: {
    postShow(e){
      e.preventDefault();
      
      const resultado = axios({
        method:"POST",
        url: "http://localhost:3000/shows",
        data: {
          show: this.show,
          token: localStorage.getItem("token"),
        },
        responseType : "json"
      });

      resultado
      .then(response =>{
        if (response.data.status !== undefined) {
          //caso que no haya error
          this.$router.push("/dashboard");
        } else {
          //si el error es por la session, habrá que remover el token
          if (response.data.message === "jwt expired") {
            localStorage.setItem("token", '');
            this.$router.push("/login");
          } else {
            console.log(response)            
          }
        }
      })
      .catch(err => {
          console.log(`Este es el error => ${err}`);
        });
    }
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
