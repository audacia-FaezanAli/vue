<script lang="ts">
  import type { User } from "@/models/user";
  import router from "@/router";
  import { defineComponent } from "vue";
  import SignUp from './SignUp.vue';

  export default defineComponent({
    components: {
      SignUp,
    },

    data(){
      return {
        usernameInput: '',
        usersList: [] as User[],
        currentUser: {},
      }
      
    },
    methods: {
      getUser(newUser:User):void {
        console.log('getUser function called')
        this.usersList.push(newUser)
        console.log(this.usersList)
      },

      logIn(username: string){
        let userIndex = this.usersList.map(user => user.userName).indexOf(username)
        if (userIndex === -1) {
          console.log(`${username} DOES NOT EXIST!`)
        } else {
          this.currentUser = this.usersList[userIndex]
          router.push('./Dashboard') 
        }
        
      }
    }
  })
</script>

<template>
  <fieldset name="log-in">
    <legend >Log In</legend>
    <label name="username">Username</label><br/>
    <input class="log-in-input" type="text" v-model="usernameInput"><br/>
    <label name="password">Password</label><br/>
    <input class="password-input" type="text" disabled value="Password">
    <br/><br/>
    <button class="log-in-button" @click="logIn(usernameInput)">LOG IN</button>
  </fieldset>
  <SignUp @newSignUp="getUser"/>
</template>

<style>
  fieldset {
    display: block;
    margin: 1.0em auto;
    text-align: center;
    border-color:hsla(160, 100%, 37%, 1) ;
  }
  
  legend {
    text-align: left;
    font-size: larger;
  }

  .log-in-input, .password-input{
    width: 50%;
    border-radius: 5px;
  }

  .log-in-button {
    margin-left: 5px;
    cursor: pointer;
    width: 50%;
    height: 1.5;
    border-radius: 5px;
    background-color: azure;
  }

  .log-in-button:hover {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
  }
/* 
  .item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
} */
</style>