<script lang="ts">
import { computed, ref } from "@vue/reactivity";
import { defineComponent, render, resolveDynamicComponent } from "vue";

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  data() {
    return {
      firstName: "Faezan",
      lastName: "Ali",
      newString: "random string",
      things: [] as any[],
    };
  },
  created() {
    console.log(this.things)
    this.things = [
      { name: "abcd", color: "white" },
      { name: "efgh", color: "white" },
      { name: "hijk", color: "white" },
      { name: "lmno", color: "white" },
    ];
  },
  computed: {
    fullName(): string {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    stringClick(): void {
      if (this.newString === "random string") {
        this.newString = "changed string";
      } else {
        this.newString = "random string";
      }
    },
    colorChange(item: {name: string; color: string}): void {
      console.log("function called");
      if (item.color !== "red") {
        // console.log(index);
        console.log("changing colour to red");
        item.color = "red";
      } else {
        item.color = "white";
      }
    },
  },
});
</script>

<template>
  <div class="tasks">
    <div class="task-1">
      <!-- 1. Display below this comment the string "Hello my name is {{ firstName }} {{ lastName }}" -->
      Hello my name is {{ firstName }} {{ lastName }}
    </div>

    <div class="task-2">
      <!-- 2. Display the same string using a computed property -->
      Hello my name is {{ fullName }}
    </div>

    <div class="task-3">
      <!-- 3. Display any string inside an element, when clicked change the string to something else  -->
      <h1 v-on:click="stringClick()">{{ newString }}</h1>
    </div>

    <div class="task-3">
      <!-- 4. Loop through an array using v-for, when an item is clicked, change the colour of the text to red e.g {'color': 'red'}  -->
      <ul>
        <li
          v-for="thing in things"
          :key="thing.name"
          @click="colorChange(thing)"
          v-bind:style="{color: thing.color}"
        >
          {{ thing.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

.red {
  color: red;
  list-style: none;
}
</style>
