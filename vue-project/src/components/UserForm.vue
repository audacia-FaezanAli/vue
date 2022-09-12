<script lang="ts">
import { defineComponent, render, resolveDynamicComponent } from "vue";

export default defineComponent({
    
    data() {
        return {
            user: {
                firstName: null,
                lastName: null,
                userName: null,
                email: null,
                dateOfBirth: null,
                eyeColour: null,
                addressL1: null,
                addressL2: null,
                addressL3: null,
                cityTown: null,
                county: null,
                postCode: null,
                phoneNumber: null,
            }
        }
    },
    computed: {

    },
    methods: {
        onSubmit():void {
            console.log(this.user)
        }
    }
});
</script>

<template>
    <body>
        <div class="form">
            <div class="formelement">
                <label>First Name</label>
                <input v-model="user.firstName" class="input" type="text" name="firstname" placeholder="Enter First Name"/>
            </div>
            <div class="formelement">
                <label>Last Name</label> 
                <input v-model="user.lastName" class="input " type="text" name="lastname" placeholder="Enter Last Name"/> 
            </div>
            <div class="formelement">
                <label>Username</label>
                <input v-model="user.userName" class="text-field input" type="text" name="username" placeholder="Enter Username"/>  
            </div>
            <div class="formelement">
                <label>Email</label>
                <input v-model="user.email" class="text-field input" type="email" name="email" placeholder="Enter Email"/> 
            </div>
            <div class="formelement">
                <label >Date of Birth</label> 
                <input v-model="user.dateOfBirth" type="date" class="input " name="dob"/> 
            </div>
            <div class="formelement">
                <label>Eye Colour</label>
                <select v-model="user.eyeColour" class="input" name="eye colour" placeholder="Select Eye Colour">
                    <option>Brown</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Grey</option>
                    <option>Hazel</option>
                    <option>Amber</option>
                </select>
            </div>
            <div class="formelement">
                <label>Address Line 1</label> 
                <input v-model="user.addressL1" type="text" class="input " name="address line 1" placeholder="Enter Address Line 1"/>
            </div>
            <div class="formelement">
                <label>Address Line 2</label> 
                <input v-model="user.addressL2" class="text-field input" type="text" name="address line 2" placeholder="Enter Address Line 2"/>
            </div>
            <div class="formelement">
                <label>Address Line 3</label> 
                <input v-model="user.addressL3" class="text-field input" type="text" name="address line 3" placeholder="Enter Address Line 3"/>
            </div>
            <div class="formelement">
                <label>City/Town</label> 
                <input v-model="user.cityTown" class="text-field input" type="text" name="city/town" placeholder="Enter City/Town"/>
            </div>
            <div class="formelement">
                <label>County</label>
                <input v-model="user.county" class="text-field input" type="text" name="county" placeholder="Enter County"/>
            </div>
            <div class="formelement">
                <label>Postcode</label>
                <input v-model="user.postCode" class="text-field input" type="text" name="postcode" placeholder="Enter Postcode"/>
            </div>
            <div class="formelement">
                <label >Phone Number</label>
                <input max="11" v-model="user.phoneNumber" class="number-field input" type="number" name="phone" placeholder="Enter Phone Number"/>
            </div>
            <div class="formelement">
                <button ref="submitButton" v-on:click="onSubmit()" type="button" class="button">Submit</button>
            </div>
        </div>
    </body>
</template>

<style>
    /* body { */
    /* box-sizing: border-box; */
        /* margin-left:auto;
        margin-right: auto;
        border: 3px;
        border-style: solid;
        border-color: blue;
        height: max-content;;
    } */

    .header {
        display:block;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 0px;
        color: hsla(160, 100%, 37%, 1);
        /* border: 3px;
        border-style: solid;
        border-color: greenyellow; */
    }

    .form{
        top:50px;
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: max-content;
        min-width: fit-content;
        border: 3px;
        border-style:solid;
        border-color: hsla(160, 100%, 37%, 1);
    }

    .formelement{
        flex: 1 1 auto;
        padding: 10px;
        display: block;
        /* align-items: center; */
        /* border: 3px;
        border-style: solid;
        border-color: red;  */
        /* justify-content: space-evenly; */
    }

    label{
        text-align:center;
        display: block;
        /* margin:auto; */
        color: white;
    }
    .input{
        display: block;
        margin:auto;
        width:300px;
        align-self: center;
    }

    select {
        display: block;
        width: 300px;
        height: 20px;
        text-align: center;
    }

    .button{
        display: block;
        margin: 24px auto 0 auto; 
    }

    button{
        width: 300px;
        cursor: pointer;
    }

    button:hover {
        background-color: springgreen;
        color: orangered;
    }

    @media (min-width: 1024px) {
    .formelement {
        align-content: center;
        justify-content: center;
    }
}


</style>