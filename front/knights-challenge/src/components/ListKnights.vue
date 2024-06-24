<script setup>
const props = defineProps({
  knightNickname: {
    type: String,
    required: true
  }
});

</script>

<template>
    <div class="col-4">
        <div class="card mb-3 p-2 card-list">
            <img src="https://images.vexels.com/media/users/3/320573/isolated/preview/6eeb1016b121bd4875176b8e0279620f-cavaleiro-brandindo-uma-espada.png" alt="Bootstrap" height="70" width="70">
            <p class="text-center">{{props.knightNickname}}</p>
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

</style>