const mongoose = require('mongoose');

const NifSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        // unique: false
    },
    flatNumber: {
        type: String,
        required: false
    },
    buildingNumber: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },
    supurbName: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },

    passportInformation: {
        surname: {
            type: String,
            required: false
        },
        middleName: {
            type: String,
            required: false
        },
        firstName: {
            type: String,
            required: false
        },
        dob: {
            type: String,
            required: false
        },
        passportIssueCountry: {
            type: String,
            required: false
        },
        passportNumber: {
            type: String,
            required: false
        },
        placeOfBirth: {
            type: String,
            required: false
        }

    },
    isPortuguese: {
        type: Boolean,
        required: false
    },
    portugueseNationality: {
        type: Boolean,
        required: false
    },
    documents: [{
        url: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        }
    }],
    needBankAccount: {
        type: Boolean,
        required: false
    },


}, { timestamps: true });

module.exports = mongoose.model('Nif', NifSchema);
