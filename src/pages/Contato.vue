<template>
  <main>
    <section class="container">
      <h1>Contato</h1>
      <section class="contacts">
        <ul v-for="(contact, index) in contacts" :key="index">
          <li>
            <p>{{ contact.title }}</p>
            <a :href="contact.link" target="_blank">
              <span>{{ contact.label }}</span>
            </a>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    api.get("/contacts.json").then((response) => {
      this.contacts = response.data;
    });
  },
  name: "Contato",
};
</script>

<style scoped>
main {
  align-items: center;
}

.contacts {
  margin-bottom: 40px;
  color: var(--color-text-dark);
}

p {
  font-size: 18px;
  color: var(--color-text-dark);
  font-weight: 600;
  margin: 5px 0;
}

span {
  font-size: 18px;
  color: var(--color-text-dark);
  font-weight: normal;
}

li {
  list-style: none;
  margin-bottom: 20px;
}
</style>
