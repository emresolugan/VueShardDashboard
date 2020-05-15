<template>
  <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
    <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <em class="fas fa-search"></em>
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
    <ul class="navbar-nav border-left flex-row">
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
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap px-3"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            class="user-avatar rounded-circle mr-2"
            src="../../assets/images/avatars/0.jpg"
            alt="User Avatar"
          />
          <span v-if="isProfileLoaded" class="d-none d-md-inline-block">{{ name }}</span>
          <span v-else class="d-none d-md-inline-block">Anonim</span>
        </a>
        <div class="dropdown-menu dropdown-menu-small">
          <a class="dropdown-item" href="user-profile-lite.html">
            <em class="material-icons">&#xE7FD;</em> Profile
          </a>
          <a class="dropdown-item" href="components-blog-posts.html">
            <em class="material-icons">vertical_split</em> Blog Posts
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" v-if="!isAuthenticated && !authLoading" href="/login">
            <em class="material-icons">&#xE7FD;</em> Login
          </a>
          
          <a class="dropdown-item text-danger" v-if="isAuthenticated" @click="logout">
            <em class="material-icons text-danger">&#xE879;</em> Logout
          </a>
        </div>
      </li>
    </ul>
    <nav class="nav" aria-label="Site navigation">
      <a
        href="#"
        class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
        data-toggle="collapse"
        data-target=".header-navbar"
        aria-expanded="false"
        aria-controls="header-navbar"
      >
        <em class="material-icons">&#xE5D2;</em>
      </a>
    </nav>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "navigation",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.name} ${state.user.profile.surname}`
    })
  }
};
</script>