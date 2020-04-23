<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
        <div class="title">
            <h2>Informations des entreprises ayant réalisé plus de demandes qu'une autre</h2>
        </div>
        <div>
            <div class="search">
                <select v-model="nomEntreprise">
                    <option v-for="(e,key) in entreprises" :key="key">{{e.raisonsociale}}</option>
                </select>
                <button @click="recherche">Rechercher</button>
            </div>
            <table>
                <tr>
                    <th>Id entreprise</th>
                    <th>N° Siret</th>
                    <th>Raison sociale</th>
                    <th>N° rue</th>
                    <th>Rue</th>
                    <th>Code postal</th>
                    <th>Ville</th>
                    <th>N° téléphone</th>
                    <th>Contact</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.identreprise}}</td>
                    <td>{{i.siret}}</td>
                    <td>{{i.raisonsociale}}</td>
                    <td>{{i.norueentr}}</td>
                    <td>{{i.rueentr}}</td>
                    <td>{{i.codepostentr}}</td>
                    <td>{{i.villeentr}}</td>
                    <td>{{i.notel}}</td>
                    <td>{{i.contact}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "InfosEntreprise",
        data() {
            return {
                nomEntreprise:'',
                entreprises:[],
                infos: [],
                errors: ''
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            },
            recherche: function(){
                axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/5plusDeDemandes/` + this.nomEntreprise)
                    .then(response => {
                        this.infos = response.data.items
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
        created() {
            axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/entreprise/`)
                .then(response => {
                    this.entreprises = response.data.items
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
    .search{
        text-align: center;
        padding-bottom: 20px;
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