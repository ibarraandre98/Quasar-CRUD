<template>
  <q-page padding>
    <!--
    EJEMPLO 1
    <q-input v-model="message"
     @keyup.esc="cleanInput"
     @keyup.enter="alertMessage"
     :style="errorStyle"
      />  :class="{ 'error' : message.length > 25 }"
    <q-btn @click="cleanInput" label="Clean text" />
    <h5 
    class="border border-green" 
    v-if="message.length"
    >{{message}}</h5>

    <p>UpperCase message: {{messageUpperCase}}</p>
    <p>LowerCase Message: {{message | messageLowerCase}}</p> -->

  <ul>
    <Task v-for="(task, index) in tasks"
    :key= "index"
    :task= "task"
    :index= "index"
    ></Task>
  </ul>


  </q-page>
</template>

<script>
import Task from 'components/task'
export default {
  /* 
  EJEMPLO 1
  data(){
    return {
      message: 'I love Vue.js'
    }
  },
  computed:{
    messageUpperCase(){
      return this.message.toUpperCase();
    },
    errorStyle(){
      if(this.message.length > 25){
        return {
          'color' : 'black',
          'background' : 'red'
        }
      }
      return null;
    }
  },
  methods:{
    cleanInput(){
      this.message = '';
    },
    alertMessage(){
      alert(this.message);
    }
  },
  filters:{ //Have no access to data()
    messageLowerCase(value){
      return value.toLowerCase();
    }
  },
  directives: {
      
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted(){

  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){
    
  } */

  
  data(){
    return {
      tasks: [
        {
          name: 'Go to home',
          dueDate: '2019/05/12',
          dueTime: '18:30'
        },
        {
          name: 'Go to cinema',
          dueDate: '2019/05/13',
          dueTime: '18:30'
        },
        {
          name: 'Go to school',
          dueDate: '2019/05/14',
          dueTime: '18:30'
        }
      ]
    }
  },
  methods:{
    deleteTask(index){
      this.tasks.splice(index, 1);
    }
  }, components: {
    Task,
  }
}
</script>

<style>
/* 
EJEMPLO 1
.border-green{
  border: 1px solid green;
}
 
.error{
  color:white !important;
  background-color: red;
} */



</style>