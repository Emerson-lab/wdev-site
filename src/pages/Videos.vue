<template>
  <main>
    <section class="container">
      <h1>Vídeos</h1>
      <section class="videos">
        <div v-for="(video, index) in videos" class="video" :key="index">
          <a :href="video.link" target="_blank">
            <img :src="video.thumb" :alt="video.title" :title="video.title" />
            <div class="video-text">{{ video.title }}</div>
          </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    api.get("/videos.json").then((response) => {
      this.videos = response.data;
    });
  },
  name: "Videos",
};
</script>

<style scoped>
main {
  align-items: center;
}

.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video {
  width: 80%;
  height: 120px;
  margin-bottom: 30px;
}

.video img {
  object-fit: cover;
  width: 100%;
  height: 100px;
}

.video a {
  color: var(--color-text-dark);
  font-weight: 600;
}

@media (min-width: 700px) {
  .videos {
    flex-direction: row;
    align-items: flex-start;
  }

  .video {
    margin-right: 30px;
    width: 300px;
  }
}
</style>
