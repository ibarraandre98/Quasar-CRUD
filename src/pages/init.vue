<template>
<q-page class="page-padding">
    <div class="init-height ">
    <div style="height: 60%" class="row justify-center items-center">
      <div class="text-center">
        <q-img
      src="../assets/logo.png"
      style="width: 50%"
      class="q-mb-lg"
       />
       <p class="text-weight-light wc-color-title">Descubre nuevas tendencias en construcciones</p>
      </div>
    </div>
    
    <div style="height:40%" class="text-center">
      <div class="row q-mb-lg justify-center">
      <q-btn class="full-width" color="red" icon="mail" icon-right="send" label="Registrarse" />
      </div>
      <div class="row q-mb-lg justify-center">
      <q-btn @click="login" 
      class="full-width" outline color="red" icon="mail" icon-right="send" label="Iniciar Sesión" />
      </div>
    </div>
    </div>
</q-page>
</template>

<script>
export default {
   name: 'init',
  data(){
    return{
      
    }
  },
  methods: {
    login(){
      this.$router.push({ name: 'login'});
    },
  }
}
</script>

}
<style>
.page-padding{
  padding: 0 10% 0 10%;
}

.init-height{
  height: 100vh;
  
}
.wc-color-title{
  color:rgb(139, 139, 139);
}
</style>