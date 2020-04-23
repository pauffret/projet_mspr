<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-primary">Accueil</button>
        <div class="title">
            <h2>Quantité de déchêts par type et par site sur une période</h2>
        </div>
        <div>
            <div class="search">
                <label>Site</label>
                <select v-model="site" style="margin: 10px">
                    <option v-for="(s,key) in sites" :key="key">{{s.nomsite}}</option>
                </select>
                <label>Type de déchêt</label>
                <select v-model="typeDechet" style="margin: 10px">
                    <option v-for="(t,key) in typesDechets" :key="key">{{t.nomtypedechet}}</option>
                </select>
                <label>Entre le :</label>
                <input type="date" v-model="dateDeb" name="dateDeb" style="margin: 10px">
                <label>et le :</label>
                <input type="date" v-model="dateFin" name="dateFin" style="margin: 10px">
                <button @click="recherche">Rechercher</button>
            </div>
            <table>
                <tr>
                    <th>Site</th>
                    <th>Type de déchêt</th>
                    <th>Quantité totale enlevée</th>
                </tr>
                <tr v-for="(i,key) in infos" :key="key">
                    <td>{{i.nomsite}}</td>
                    <td>{{i.nomtypedechet}}</td>
                    <td>{{i.qteenlevee}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "QuantiteDechetsSite",
        data() {
            return {
                site:'',
                typeDechet:'',
                dateDeb:'',
                dateFin:'',
                sites:[],
                typesDechets:[],
                infos: [],
                errors: ''
            }
        },
        methods: {
            redirectAccueil: function () {
                this.$router.push({path: "/"})
            },
            recherche: function(){
                axios.get('https://apex.oracle.com/pls/apex/myspacepc/recycl/7quantiteDechet/'+this.site+'/'+ this.typeDechet+'/'+this.dateDeb+'/'+this.dateFin)
                    .then(response => {
                        this.infos = response.data.items
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
        created() {
            axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/site/`)
                .then(response => {
                    this.sites = response.data.items
                })
                .catch(e => {
                    this.errors.push(e)
                }),
            axios.get(`https://apex.oracle.com/pls/apex/myspacepc/recycl/typedechet/`)
            .then(response => {
                this.typesDechets = response.data.items
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