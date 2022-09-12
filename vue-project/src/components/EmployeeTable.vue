<script lang="ts">
import type { User } from "@/models/user.model";
import { defineComponent, render, resolveDynamicComponent } from "vue";
import HelloWorld from "./HelloWorld.vue";


export default defineComponent({
    // components: {
    //     HelloWorld
    // },
    data() {
        return {
            employees: [
                {firstName: 'John', lastName: 'Doe', dateOfBirth: '1990-10-01', startDate:'2020-01-01', role: 'Developer', salary:'50000'},
                {firstName: 'Steve', lastName: 'Jobs', dateOfBirth:'1960-09-01', startDate:'2020-02-01', role: 'Developer', salary:'70000'},
                {firstName: 'Jeff', lastName: 'Bezos', dateOfBirth: '1980-08-01', startDate:'2020-03-01', role: 'Tester', salary:'30000'},
                {firstName: 'Jane	', lastName: 'Smith', dateOfBirth: '1995-07-01', startDate:'2020-04-01', role: 'Developer', salary:'40000'},
                {firstName: 'Joe', lastName: 'Bloggs', dateOfBirth:'1975-06-01', startDate:'2020-05-01', role: 'Tester', salary:'60000'},
            ] as User[],
        };
    },
    computed: {
        totalSalary() {
            let total = 0
            for (let index = 0; index < this.employees.length; index++) {
                if (this.employees[index].salary === undefined) {
                    break
                } else {
                    total += +this.employees[index].salary;
                }
            }
            return total
        }
    },
    methods: {
        logEmployees() {
            console.log(this.employees)
                },
        addEmployee() {
            this.employees.push({} as User)
        },
    },
});
</script>

<template>
    <!-- <HelloWorld msg='Employees'/> -->
    <br/>
    <table id="employeeTable" border="" title="Employees">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Start Date</th>
                <th>Role</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(employee, index) in employees" :key="index">
                <td>
                    <input type="text" v-model="employee.firstName"/>
                </td> 
                <td>
                    <input type="text" v-model="employee.lastName"/>
                </td>
                <td>
                    <input type="date" v-model="employee.dateOfBirth"/>
                </td>
                <td>
                    <input type="date" v-model="employee.startDate"/>
                </td>
                <td>
                    <input type="text" v-model="employee.role"/>
                </td>
                <td>
                    <input type="text" v-model="employee.salary"/>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total Salary</td>
                <td colspan="2">{{totalSalary}}</td>
            </tr>
            <tr class="table-buttons">
                <td colspan="3"><button type="button" v-on:click="addEmployee()">Add Employee</button></td>
                <td colspan="3"><button type="button" v-on:click="logEmployees">Submit</button></td>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped>
    #employeeTable {
        display: inline-table;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        height:auto;
        background-color: white;
    }

    table td input {
        display: inline-block;
        /* min-width: fit-content; */
        width:100%;
        background: transparent;
        border: none;
    }

    table td input:focus {
        outline: none;
    }

    th {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        background-color: #54585d;
        color: white;
        font-weight: bold;
    }

    tbody {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color:black;
    }

    tr:nth-child(even) {background-color: lightgrey;}

    tfoot{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: red;
        font-variant: small-caps;
        font-weight:bold;
        background-color: hsla(160, 100%, 37%, 1);
        text-align: center;
    }

    .table-buttons{
        background-color: white;
        width: 100%;
        vertical-align: bottom;
    }
    td button{
        width: 100%;
        height: 30px;
        cursor: pointer;
        border: none;
    }
    td button:hover {
        background-color: rgb(215, 57, 37);
        color: white;
    }

</style>