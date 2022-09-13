<script lang="ts">
    import { defineComponent, render, resolveDynamicComponent } from "vue";
    import { User } from './../models/user'
    
    export default defineComponent({
        emits: ['newSignUp'],
        data() {
            return {
                user: new User(),              
                userCount: 0,
            }
        },
        methods: {
            onSubmit():void {
                this.user.userId = this.userCount
                this.userCount += 1
                console.log(this.user)
                this.$emit('newSignUp', this.user)
            },
            resetInput():void {
                this.user = new User()
            },
        }
    });
    </script>
    
    <template>
        <fieldset name="NewUserDetails" class="sign-up-form form">
            <legend>Create New User</legend>
            <div class="formelement">
                <label>First Name</label><br/>
                <input v-model="user.firstName" class="input" type="text" name="firstname" placeholder="Enter First Name"/><br/>
            </div>
            <div class="formelement">
                <label>Last Name</label><br/>
                <input v-model="user.lastName" class="input " type="text" name="lastname" placeholder="Enter Last Name"/><br/>
            </div>
            <div class="formelement">
                <label>Username</label><br/>
                <input v-model="user.userName" class="input " type="text" name="username" placeholder="Enter Username"/><br/>
            </div>
            <div class="formelement">
                <label>Email</label><br/>
                <input v-model="user.email" class="text-field input" type="email" name="email" placeholder="Enter Email"/> 
            </div>
            <div class="formelement">
                <label >Date of Birth</label><br/>
                <input v-model="user.dateOfBirth" type="date" class="input " name="dob"/> 
            </div><br/>
            <div class="formelement">
                <button class="sign-up-button" type="button" @click="onSubmit(), resetInput()">SIGN UP</button>
            </div>
        </fieldset>

    </template>
    
    <style>
        .sign-up-form {
            display: block;
            margin: 1.0em auto;
            text-align: center;
            border-color: orange;
            padding:auto;
        }
        legend {
            text-align: left;
            font-size: larger;
        }
        label {
            text-align: left;
        }
        .input {
            width:50%;
            height: 2em;
            border-radius: 5px;
        }

        .sign-up-button {
            cursor:pointer;
            width: 50%;
            border-radius: 5px;
            background-color:azure;
        }

        .sign-up-button:hover {
            background-color: orange;
            color: white;
        }
    </style>
        


        <!-- <body>
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
        </body> -->
