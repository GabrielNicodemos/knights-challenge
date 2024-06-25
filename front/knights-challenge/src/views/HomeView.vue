<script setup>
  import { onMounted, ref, computed, reactive } from 'vue';
  import ListKnights from '@/components/ListKnights.vue';
  import CardKnightsSelected from '@/components/CardKnightsSelected.vue';


  const list_knights = ref([]);
  let searchKnightField = ref("");
  let knightsSelected = reactive(ref());

  onMounted(() => {
  fetch('/api/knights')
    .then(response => response.json())
    .then(data => {
      list_knights.value = data;
      console.log(list_knights.value);
    })
    .catch(error => {
      console.log(error);
    });
  });

  const kightsFiltered = computed(() => {
    if(list_knights.value && searchKnightField.value) {
      return list_knights.value.filter(knight => knight.name.toUpperCase().includes(searchKnightField.value.toUpperCase()))
    }

    return list_knights.value;
  });

  const selectKinights = async (knights) => {
    await fetch(`/api/knights/${knights.id}`)
    .then(res => res.json())
    .then(res => knightsSelected.value = res);

    console.log(knightsSelected.value);
  }

</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6">
        <div class="card">
          <div class="card-body row">
            <div class="form-floating mb-3">
              <input v-model="searchKnightField" type="text" class="form-control" id="searchKnightForm" placeholder="Search..">
              <label class="px-4" for="searchKnightForm">Search..</label>
            </div>
            <ListKnights
              v-for="knight in kightsFiltered"
              :key="knight.id"
              :knightname="knight?.name"
              :nickname="knight?.nickname"
              :hero="knight?.hero"
              @click="selectKinights(knight)"
            />
          </div>
        </div>
      </div>
        <div class="col-sm-12 col-md-6">
        <CardKnightsSelected
          :id="knightsSelected?._id"
          :hero="knightsSelected?.hero"
          :name="knightsSelected?.name"
          :nickname="knightsSelected?.nickname"
          :attributes="knightsSelected?.attributes"
        />
      </div>
    </div>
  </div>
</template>
