<template>
    <div>
        <button @click="redirectAccueil()" type="button" class="buttonAccueil btn btn-info">Accueil</button>
        <div class="title">
            <h2>Demandes pas encore inscrites dans une tournée</h2>
        </div>
        <div>
            <ul>
                <li v-for="(i,key) in infos" :key="key">
                    <p>{{i}}</p>
                </li>
            </ul>
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

</style>