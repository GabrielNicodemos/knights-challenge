<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
  },
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
  },
  hero: {
    type: Boolean,
  }
});

const deleteKnight = async () => {
  const router = useRouter();

  try {
    const response = await fetch(`api/knights/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao excluir cavaleiro');
    }
    console.log('Cavaleiro excluído com sucesso');
    console.log(response);
    window.location.reload();
  } catch (error) {
    console.error('Erro ao excluir cavaleiro:', error.message);
  }
};


</script>

<template>
    <div class="card" v-if="id">
        <div v-if="props.hero" class="card-header text-center bg-warning text-dark">Herói</div>
        <div v-else class="card-header text-center bg-primary text-light">Guerreiro</div>
        {{}}
        <img
            src="https://images.vexels.com/media/users/3/320573/isolated/preview/6eeb1016b121bd4875176b8e0279620f-cavaleiro-brandindo-uma-espada.png"
            class="card-img-top"
            alt="..."
            height="300"
            width="50"
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
            <hr v-if="!props.hero">
            <div v-if="!props.hero">
                <button type="button" class="btn btn-danger" @click="deleteKnight">Virar herói</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>