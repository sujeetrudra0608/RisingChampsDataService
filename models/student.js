const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        min: 1,
        max: 25
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    middleName: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    dateOfBirth: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    motherName: {
        type: String,
        required: true,
        min: 6,
        max: 75
    },
    gender: {
        type: String,
        required: true,
        min: 2,
        max: 6
    },
    placeOfBirth: {
        type: String,
        required: true,
        min: 6,
        max: 25
    },
    admissionForStd: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    admissionInBatch: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    yearOfAdmission: {
        type: String,
        required: true,
        min: 2,
        max: 25
    },
    nationality: {
        type: String,
        required: true,
        max: 15
    },
    caste: {
        type: String,
        required: true,
        min: 2,
        max: 15
    },
    religion: {
        type: String,
        required: true,
        min: 2,
        max: 10
    },
    motherTongue: {
        type: String,
        required: true,
        min: 2,
        max: 15
    },
    fatherOrGuardianFullName: {
        type: String,
        required: true,
        min: 2,
        max: 75
    },
    permanentAddress: {
        type: String,
        required: true,
        min: 2,
        max: 500
    },
    occupationOfParentOrGuardian: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    parentOfficeAddress: {
        type: String,
        max: 500
    },
    parentAnnualIncome: {
        type: String,
        max: 15
    },
    state: {
        type: String,
        required: true,
        max: 25
    },
    contactNumber: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    zipCode: {
        type: String,
        required: true,
        min: 6,
        max: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    chkAgree: {
        type: Boolean,
        default: true
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;




