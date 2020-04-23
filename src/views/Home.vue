<template>
    <div id="home">
        <div id="1">
            <b-card
                    title="Demandes faites après une date"
                    style="grid-row: 1; grid-column: 1;"
                    class="card mb-2"
            >
                <b-card-text>
                    Chercher et afficher les demandes qui ont été faites après une date donnée saisie par l’agent
                </b-card-text>

                <b-button @click="redirectList('1')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="2">
            <b-card
                    title="Informations sur une demande"
                    style="grid-row: 1; grid-column: 2;"
                    class="card mb-2"
            >
                <b-card-text>
                    Pour une demande donnée, afficher la raison sociale de l'entreprise, la tournée
                    correspondante et la quantité à récupérer pour chaque type de déchet.
                </b-card-text>

                <b-button @click="redirectList('2')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="3">
            <b-card
                    title="Card Title"
                    style="grid-row: 1; grid-column: 3;"
                    class="card mb-2"
            >
                <b-card-text>
                    Afficher la quantité totale récupérée par type de déchet pour un mois/année donné.
                </b-card-text>

                <b-button @click="redirectList('3')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="4">
            <b-card
                    title="Nombre de tournées par employé"
                    style="grid-row: 2; grid-column: 1;"
                    class="card mb-2"
            >
                <b-card-text>
                    Afficher les employés ayant réalisé moins de n tournées.Triez le résultat sur le nombre de
                    tournées.
                </b-card-text>

                <b-button @click="redirectList('4')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="5">
            <b-card
                    title="Entreprises ayant réalisé plus de demandes qu'une autre"
                    style="grid-row: 2; grid-column: 2;"
                    class="card mb-2"
            >
                <b-card-text>
                    Affichez les informations de l'entreprise qui a réalisé plus de demandes que l'entreprise
                    Formalys
                </b-card-text>

                <b-button @click="redirectList('5')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="6">
            <b-card
                    title="Demandes non inscrites"
                    style="grid-row: 2; grid-column: 3;"
                    class="card mb-2"
            >
                <b-card-text>
                    ...
                </b-card-text>

                <b-button @click="redirectList('6')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="7">
            <b-card
                    title="Quantité de déchêts par type et par site"
                    style="grid-row: 3; grid-column: 1;"
                    class="card mb-2"
            >
                <b-card-text>
                    ...
                </b-card-text>

                <b-button @click="redirectList('7')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
        <div id="8">
            <b-card
                    title="Quantité de déchêts par type pour tous les sites"
                    style="grid-row: 3; grid-column: 2;"
                    class="card mb-2"
            >
                <b-card-text>
                    Affichez les informations des demandes qui ne sont pas encore inscrites dans une tournée.
                </b-card-text>

                <b-button @click="redirectList('8')" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            redirectList: function (page) {
                switch (page) {
                    case '1':
                        this.$router.push({path: "/demandeapresdate"})
                        break;
                    case '2':
                        this.$router.push({path: "/demandeInfo"})
                        break;
                    case '3':
                        this.$router.push({path: "/qterecuptypedechet"})
                        break;
                    case '4':
                        this.$router.push({path: "/nbTourneesRealisees"})
                        break;
                    case '5':
                        this.$router.push({path: "/infosEntreprise"})
                        break;
                    case '6':
                        this.$router.push({path: "/demandenoninscrite"})
                        break;
                    case '7':
                        this.$router.push({path: "/quantiteDechetsSite"})
                        break;
                    case '8':
                        this.$router.push({path: "/quantiteDechetsNational"})
                        break;
                    case '9':
                        this.$router.push({path: "/"})
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    #home{
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33% ;
    }
    .card{
        max-width: 30rem;
        margin: 15px auto auto;
    }
</style>