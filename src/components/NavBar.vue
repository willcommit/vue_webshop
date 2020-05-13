<template>
    <div>
    <b-navbar  toggleable="lg" class="navbar navbar-light" style="background-color: #FFFFF; padding: 1.5em;">
        <b-navbar-brand href="/">
            <img src="../../logo.png" alt="Furuno" width="250px" height="auto">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" style="background-color: #004EA2;">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right style="padding-left: 1em;">
              <template v-slot:button-content>
                  <b-icon icon="flag-fill"></b-icon>
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">SE</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div> 
</template>

<script>
import { BIcon, BIconFlagFill} from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconFlagFill
  },
  props: {
    // ...
  }
  // ...
}
</script>

