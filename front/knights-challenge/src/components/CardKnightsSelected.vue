<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
  },
  attributes: {
    type: Object,
    required: true
  }
});

</script>

<template>
    <div class="card">
        <img
            src="https://images.vexels.com/media/users/3/320573/isolated/preview/6eeb1016b121bd4875176b8e0279620f-cavaleiro-brandindo-uma-espada.png"
            class="card-img-top"
            alt="..."
        >
        <div class="card-body">
            <h5 class="card-title text-center">{{name}}</h5>
            <h6 class="card-subtitle text-center">{{nickname}}</h6>
            <hr>
            <div class="row" v-if="props.attributes">
                <section class="col-4">
                    <strong>charisma:</strong>
                    <span>{{props.attributes.charisma}}</span>
                </section>
                <section class="col-4">
                    <strong>constitution:</strong>
                    <span>{{props.attributes.constitution}}</span>
                </section>
                <section class="col-4">
                    <strong>dexterity:</strong>
                    <span>{{props.attributes.dexterity}}</span>
                </section>
                <section class="col-4">
                    <strong>intelligence:</strong>
                    <span>{{props.attributes.intelligence}}</span>
                </section>
                <section class="col-4">
                    <strong>strength:</strong>
                    <span>{{props.attributes.strength}}</span>
                </section>
                <section class="col-4">
                    <strong>wisdom:</strong>
                    <span>{{props.attributes.wisdom}}</span>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>