<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
        <div class="title">
            <h2>Demandes non inscrites dans une tournée</h2>
        </div>
        <div>
            <table>
                <tr>
                    <th>N° demande</th>
                    <th>Date demande</th>
                    <th>Date enlèvement prévu</th>
                    <th>Id entreprise</th>
                    <th>N° site</th>
                    <th>Id source</th>
                    <th>Id etat</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.nodemande}}</td>
                    <td>{{i.datedemande}}</td>
                    <td>{{i.dateenlevementprevu}}</td>
                    <td>{{i.identreprise}}</td>
                    <td>{{i.nosite}}</td>
                    <td>{{i.idsource}}</td>
                    <td>{{i.idetat}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "DemandeNonInscrite",
        data() {
            return {
                infos: [],
                errors: ''
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            }
        },
        created() {
            axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/6demandesSansTournees/`)
                .then(response => {
                    this.infos = response.data.items
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style scoped>
    h2{
        text-align: center;
        padding: 20px;
    }
    table{
        margin: auto;
    }
    th{
        color: white;
        background-color: dodgerblue;
    }
    th, td{
        border: 1px solid black;
        padding: 20px;
        text-align: center;
    }
</style>