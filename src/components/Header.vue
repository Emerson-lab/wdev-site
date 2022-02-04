<template>
  <header>
    <nav class="container">
      <a href="/">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          id="logo"
          alt="Logo site"
          title="Logo site"
        />
      </a>
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        id="menu-button"
        alt="Abrir menu"
        title="Abrir menu"
        v-on:click="openMenu"
      />
      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

      <div id="menu-items" :class="{ active: menuActive }">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          id="menu-logo"
          alt="Abrir menu"
          title="Abrir menu"
        />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Vídeos</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    openMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  width: 130px;
}

#menu-button {
  width: 30px;
}

#menu-overlay {
  width: 40%;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-text-light);
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-items {
    display: flex;
    position: static;
    width: auto;
    height: 60px;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0px;
    margin-left: 20px;
  }
}
</style>
