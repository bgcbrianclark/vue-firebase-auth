<template>
  <div class="page-home">
    <p v-for="document in documents" :key="document">{{ document.title }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '@/db'

export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      documents: [],
    }
  },
  firestore: {
    documents: db.collection('documents')
  }
};
</script>
