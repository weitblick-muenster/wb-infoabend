<template>
  <section
    id="about"
    key="about"
  >
    <h1></h1>
    <h1>{{ title }}</h1>
    <p>
      {{ textAboveVideo }}
    </p>
    <div class="yt-video lazyload">
      <iframe
        title="Weitblick Vorstellungsvideo"
        :src="videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>
    <p>
      {{ textBelowVideo }}
      <a
        class="is-underlined"
        href="https://weitblicker.org/muenster/projects/"
        target="_blank"
        rel="noreferrer"
      >
        weitblicker.org/muenster/projects
      </a>
    </p>
  </section>
</template>
<script>
/* eslint-disable */
import {createClient} from '~/plugins/contentfulClient.js';

const client = createClient();

export default {
  mounted () {
      return Promise.all([
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'about',
        })
      ]).then((entries) => {
        // return data that should be available
        // in the template
        const entry = entries[0].items[0].fields
        this.title = entry.title;
        this.textAboveVideo = entry.textAboveVideo;
        this.textBelowVideo = entry.textBelowVideo;
        this.videoSource = entry.videoSource;
      }).catch(console.error);
  },
  data() {
    return {
      title: '',
      textAboveVideo: '',
      textBelowVideo: '',
      videoSource: '',
    }
  }
}
</script>
