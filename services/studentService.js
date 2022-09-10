const readXlsxFile = require("read-excel-file/node");
const Student = require('../models/student');

module.exports.get = async (req) => {
    let filter = req.body || {}
    req.response.data = await Student.find(filter)
    return req
}

module.exports.create = async (req) => {
    try {
        let student = req.body;
        console.log(req.body)
        if (student.id == "0") {
            let count = await Student.find({ admissionForStd: student.admissionForStd });
            student.id = student.admissionForStd + "-" + (count.length + 1).toString();
            let stdObj = new Student(student);
            const s = await stdObj.save()
            req.response.data = s
        }
        req.response.message = 'Created successfully.'
        return req;
    } catch (err) {
        req.response.error = true
        req.response.success = false
        req.response.data = err
        req.response.message = 'Creation failed.'
        return req;
    }
};

module.exports.update = async (req) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        req.response.data = savedUser;
        return req;
    } catch (err) {
        return req;
    }
};

module.exports.delete = async (req) => {
    try {
        let filter = req.body
        req.response.data = await Student.deleteOne(filter)
        req.response.message = 'Removed successfully.'
        return req;
    } catch (err) {
        req.response.error = true
        req.response.success = false
        req.response.data = err
        req.response.message = 'Removing process failed.'
        return req;
    }
}

module.exports.uploadStudentDetails = async (req) => {
    try {
        if (req.file == undefined) {
            req.response.message = "Please upload an excel file!"
            return req
        }

        let path =
            "./../../uploadexcels/" + req.file.filename;

        await readXlsxFile(path).then(async (rows) => {
            // skip header
            rows.shift();

            let students = [];
            let results = []

            rows.forEach((row) => {
                let student = {
                    id: "0",
                    firstName: row[0],
                    middleName: row[1],
                    lastName: row[2],
                    dateOfBirth: row[3],
                    motherName: row[4],
                    gender: row[5],
                    placeOfBirth: row[6],
                    admissionForStd: row[7],
                    nationality: row[8],
                    caste: row[9],
                    religion: row[10],
                    motherTongue: row[11],
                    fatherOrGuardianFullName: row[12],
                    permanentAddress: row[13],
                    occupationOfParentOrGuardian: row[14],
                    parentOfficeAddress: row[15],
                    parentAnnualIncome: row[16],
                    state: row[17],
                    contactNumber: row[18],
                    zipCode: row[19],
                    admissionInBatch: row[20] || "Batch1",
                    yearOfAdmission: row[21] || "2022-2023"
                };

                students.push(student);
            });

            //console.table(students)

            let count = await Student.find({ admissionForStd: students[0].admissionForStd });
            let n = count.length
            for (let i = 0; i < students.length; i++) {
                let student = students[i];
                student.id = student.admissionForStd + "-" + (n++ + 1).toString();
                const s = await Student.create(student).then((resp) => {
                    results.push({ Name: student.firstName + " " + student.middleName + " " + student.lastName, IsUploaded: true })
                })
                    .catch((error) => {
                        console.log(error);
                        results.push({ Name: student.firstName + " " + student.middleName + " " + student.lastName, IsUploaded: true, error: error })
                    });
            }
            req.response.data = results
            req.response.message = req.file.originalname + " file uploaded successfully."
        });
    } catch (error) {
        console.log(error);
    }
    return req
}