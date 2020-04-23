<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-primary">Accueil</button>
        <div class="title">
            <h2>Infos demandes</h2>
        </div>
        <div>
            <div class="search">
                <input type="number" v-model="noDemande" name="noDemande">
                <button @click="recherche">Rechercher</button>
            </div>
            <table>
                <tr>
                    <th>N° tournée</th>
                    <th>Raison sociale</th>
                    <th>Type de déchêt</th>
                    <th>Quantité enlevée</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.notournee}}</td>
                    <td>{{i.raisonsociale}}</td>
                    <td>{{i.nomtypedechet}}</td>
                    <td>{{i.quantiteenlevee}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "DemandeInfo",
        data() {
            return {
                noDemande:'',
                infos: [],
                errors: ''
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            },
            recherche: function(){
                axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/2demandeInfo/` + this.noDemande)
                    .then(response => {
                        this.infos = response.data.items
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
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