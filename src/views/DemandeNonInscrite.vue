<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-primary">Accueil</button>
        <div class="title">
            <h2>Demandes non inscrites dans une tournée</h2>
        </div>
        <div>
            <table>
                <tr>
                    <th>N° demande</th>
                    <th>Date demande</th>
                    <th>Date enlèvement prévu</th>
                    <th>Nom de l'entreprise</th>
                    <th>Nom du site</th>
                    <th>Source</th>
                    <th>Etat</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.nodemande}}</td>
                    <td>{{i.datedemande}}</td>
                    <td>{{i.dateenlevementprevu}}</td>
                    <td>{{i.raisonsociale}}</td>
                    <td>{{i.nomsite}}</td>
                    <td>{{i.libellesource}}</td>
                    <td>{{i.libelleetat}}</td>
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

    .title {
        margin-top: 30px;
        grid-row: 1/2;
        grid-column: 2/4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .buttonAccueil {
        margin: 5px;
        width: 10%;
    }

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