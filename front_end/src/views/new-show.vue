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
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title">
                      </div>
                    </div>
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Show Type</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                          <label class="form-check-label" for="inlineRadio1">Solo Show</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                          <label class="form-check-label" for="inlineRadio2">Group Show</label>
                        </div>
                    </div>
    
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Start Date</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">End Date</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Show Overview</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div class="form-group">
                      <label for="exampleFormControlTextarea1">Full Description</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>


          <h4 class="pt-3">Venue Info</h4>
          <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlInput1">Venue Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title">
            </div>
          </div>
          <div class="col-sm-6">
          <div class="form-group">
                <label for="exampleFormControlInput1">Venue Website</label>
                <input type="url" class="form-control" id="exampleFormControlInput1" placeholder="https://">
              </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Venue Address</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlInput1">Venue Social Handle (1)</label>
              <input type="url" class="form-control" id="exampleFormControlInput1" placeholder="https://">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Venue Social Handle (2)</label>
                <input type="url" class="form-control" id="exampleFormControlInput1" placeholder="https://">
              </div>
          </div>
        </div> 

                
                <h4 class="pt-3">Application Info</h4>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Application Deadline</label>
                  <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Include In Submission...</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
      
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button class="btn-dark btn text-right">Preview</button>
                <button class="btn-success btn text-right">Publish Show</button>
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
export default {
  name: "new-show"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
