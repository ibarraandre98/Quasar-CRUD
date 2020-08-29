<template>
  <q-page padding>
    <div class="row justify-center q-mt-xl q-mb-xl">
    <q-img
    src="../assets/logo.png"
    style="width: 15%"
    />
    </div>

    <div class="">
    <q-input class="" standout="bg-secondary text-white" v-model="text" label="Correo" />
  <q-input class="q-mt-md" standout="bg-secondary text-white"  label="Correo" />
  <q-input class="q-mt-md" standout="bg-secondary text-white"  label="Correo" />
  <q-btn @click="toPrincipal" class="full-width q-mt-xl" color="red" icon="mail" icon-right="send" label="Registrarse" />
    </div>
  </q-page>
</template>

<script>
export default {
   name: 'login',
  data(){
    return{
      text:'Hola mundo'
    }
  },
  methods: {
    toPrincipal(){
      this.$router.push({name:'principal'});
    }
  }
}
</script>
