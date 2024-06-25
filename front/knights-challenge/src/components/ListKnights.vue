<script setup>
const props = defineProps({
  knightname: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
  },
  hero: {
    type: Boolean
  }
});

</script>

<template>
    <div class="col-4">
        <div class="card mb-3 p-3 card-list fixed-card">
            <div v-if="props.hero" class="card-header text-center bg-warning text-dark mb-2">Herói</div>
            <div v-else class="card-header text-center bg-primary text-light mb-2">Guerreiro</div>
            <h4 class="text-center text-light mb-2">{{props.knightname}}</h4>
            <p class="text-center text-light">{{nickname}}</p>
        </div>
    </div>
</template>


<style scoped>

.card-list {
background: rgb(131,81,213);
background: radial-gradient(circle, rgba(131,81,213,0.8096385542168675) 0%, rgba(138,191,226,1) 100%);
cursor: pointer;
}

.card-list:hover {
background: rgb(131,81,213);
background: radial-gradient(circle, rgba(131,81,213,0.8096385542168675) 50%, rgba(138,191,226,1) 100%);
cursor: pointer;
}

.fixed-card {
width: 180px;
height: 180px;
overflow: hidden;
}

</style>