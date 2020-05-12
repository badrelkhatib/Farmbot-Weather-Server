const Settings = require("../models/Settings");

const toExport = {
    initSettings: async () => {
        try {
            let settings = await Settings.findOne({}, { _id: 0 });
            if (settings === null) {
                
                await Settings.create({
                    toolID: 0,
                    valvePin: 0,
                    wateringThreshold: 0.5,
                    weatherThreshold: 0,
                    sensorPin: 0,
                    lat: 48.1214379,
                    long: -1.635091,
                });
                console.log("Réglages initialisés");
                
            } else {
                console.log("Reglages déjà initialisés");
                
            }

        } catch (err) {
            console.log("Erreur initialisation réglages : ", err);

            throw new Error("Erreur lors de l'initialisation des réglages");
        }
    },

    getSettings: async () => {
        try {
            let settings = await Settings.findOne({}, { _id: 0 });
            return settings;
        } catch (err) {
            console.log("Erreur récupération réglages : ", err);

            throw new Error("Erreur lors de la récupération des réglages");
        }
    },

    setSettings: async reglages => {
        try {
            let nouveauReglages = await Settings.findOneAndUpdate(
                {},
                reglages,
                {
                    fields: { _id: 0 },
                    new: true,
                }
            );
            return nouveauReglages;
        } catch (e) {
            throw new Error("Paramètres incorrects");
        }
    },
};

module.exports = toExport;
