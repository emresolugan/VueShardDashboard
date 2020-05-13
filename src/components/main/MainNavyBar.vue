<template>
  <nav
    class="navbar align-items-stretch navbar-light flex-md-nowrap p-0"
    aria-labelledby="mainnavheading"
  >
    <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input
          class="navbar-search form-control"
          type="text"
          placeholder="Search for something..."
          aria-label="Search"
        />
      </div>
    </form>
    <!--
      <li class="nav-item border-right dropdown notifications">
        <a
          class="nav-link nav-link-icon text-center"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div class="nav-link-icon__wrapper">
            <em class="material-icons">&#xE7F4;</em>
            <span class="badge badge-pill badge-danger">2</span>
          </div>
        </a>
        
          <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">
              <div class="notification__icon-wrapper">
                <div class="notification__icon">
                  <em class="material-icons">&#xE6E1;</em>
                </div>
              </div>
              <div class="notification__content">
                <span class="notification__category">Analytics</span>
                <p>
                  Your website’s active users count increased by
                  <span
                    class="text-success text-semibold"
                  >28%</span> in the last week. Great job!
                </p>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification__icon-wrapper">
                <div class="notification__icon">
                  <em class="material-icons">&#xE8D1;</em>
                </div>
              </div>
              <div class="notification__content">
                <span class="notification__category">Sales</span>
                <p>
                  Last week your store’s sales count decreased by
                  <span
                    class="text-danger text-semibold"
                  >5.52%</span>. It could have been worse!
                </p>
              </div>
            </a>
            <a class="dropdown-item notification__all text-center" href="#">View all Notifications</a>
          </div>
      </li>
    -->
    <ul class="navbar-nav border-left flex-row">
      <li class="nav-item">
        <div v-if="isProfileLoaded">
          <li class="nav-item">
            <img
              class="user-avatar rounded-circle mr-2"
              src="@/assets/images/avatars/0.jpg"
              alt="User Avatar"
            />
          </li>
          <li class="nav-item">
            <span class="d-none d-md-inline-block">{{ name }}</span>
          </li>
        </div>
      </li>

      <li class="nav-item" v-if="isAuthenticated" @click="logout">
        <a class="nav-link" href="#">
          <em class="material-icons text-danger">&#xE879;</em>Logout
        </a>
      </li>
      <li class="nav-item" v-if="!isAuthenticated && !authLoading">
        <router-link to="/login">
          <span class="fas fa-user"></span>Login
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "navigation",
  methods: {
    logout: function() {
      debugger;
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  }
};
</script>