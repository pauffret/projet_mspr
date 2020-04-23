<template>
    <div id="home">
        <b-container class="container-grid">
            <b-row>
                <b-col>
                    <div id="1">
                        <b-card
                                title="Demandes faites après une date"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche les demandes qui ont été faites après une date donnée saisie
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('1')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div id="2">
                        <b-card
                                title="Informations sur une demande"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Pour une demande donnée, affichee la raison sociale de l'entreprise, la tournée
                                correspondante et la quantité à récupérer pour chaque type de déchet.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('2')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div id="3">
                        <b-card
                                title="Quantité totale récupérée par type de déchet"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche la quantité totale récupérée par type de déchet pour un mois/année donné.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('3')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div id="4">
                        <b-card
                                title="Nombre de tournées par employé"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche les employés ayant réalisé moins de tournées que le nombre saisi. Le résultat trié par le nombre
                                de tournées réalisées.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('4')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div id="5">
                        <b-card
                                title="Entreprises ayant réalisé plus de demandes qu'une autre"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche les informations des entreprises qui ont réalisé plus de demandes que
                                l'entreprise saisie
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('5')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div id="6">
                        <b-card
                                title="Demandes non inscrites"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche les informations des demandes qui ne sont pas encore inscrites dans une
                                tournée.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('6')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div id="7">
                        <b-card
                                title="Quantité totale de déchêts par type et par site"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche la quantité totale
                                collectée pour un type de déchet sur une période donnée au niveau d'un site.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('7')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div id="8">
                        <b-card
                                title="Quantité totale de déchêts par type pour tous les sites"
                                class="card mb-2"
                                border-variant="secondary"
                        >
                            <hr>
                            <b-card-text>
                                Affiche la quantité
                                totale collectée pour un type de déchet sur une période donnée au niveau national.
                            </b-card-text>

                            <b-button class="btn-demande" @click="redirectList('8')" variant="primary">Accéder</b-button>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
            <br>
            <p>Projet MSPR 2020 - Données et objects connectés, développé par DERRIEN Théo, CHAIGNEAU Paul, HAMON Axel, AUFFRET Pierre</p>
        </b-container>
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

    .container-grid{
        padding-top: 2.5%;
    }

    .card {
        min-height: 250px;
        box-shadow: 3px 2px #888888;
    }

    .btn-demande{
        position: absolute;
        bottom: 10px;
        left: 5%;
        width: 90%;
        box-shadow: 3px 2px #888888;
    }
    p{
        text-align: center;
    }

</style>