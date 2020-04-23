<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
        <div class="title">
            <h2>Demandes faites après une date</h2>
        </div>

        <div>
            <div class="search">
                <input type="date" v-model="dateDonnee" name="dateDonnee">
                <button @click="recherche">Rechercher</button>
            </div>
            <table>
                <tr>
                    <th>N° demande</th>
                    <th>Date demande</th>
                    <th>Date enlèvement prévu</th>
                    <th>Id de l'entreprise</th>
                    <th>N° de site</th>
                    <th>Id état</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.nodemande}}</td>
                    <td>{{i.datedemande}}</td>
                    <td>{{i.dateenlevementprevu}}</td>
                    <td>{{i.identreprise}}</td>
                    <td>{{i.nosite}}</td>
                    <td>{{i.idetat}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "DemandeApresDate",
        data() {
            return {
                dateDonnee: '',
                infos: [],
                errors: ''
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            },
            recherche: function () {
                axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/1demandedate/` + this.dateDonnee)
                    .then(response => {
                        this.infos = response.data.items
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
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

    .search {
        text-align: center;
        padding-bottom: 20px;
    }

    h2 {
        text-align: center;
        padding: 20px;
    }

    table {
        margin: auto;
    }

    th {
        color: white;
        background-color: dodgerblue;
    }

    th, td {
        border: 1px solid black;
        padding: 20px;
        text-align: center;
    }

</style>
