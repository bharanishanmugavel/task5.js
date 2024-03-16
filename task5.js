let resumeData = {
  name: "Bharani s",
  gender: "male",
  job: "Full stack developer",
  email: "bharanibharani9609@gmail.com",
  address: {
    houseNo: 1 / 2,
    area: "mainroad,ayyampettai.",
    city: "thiruvarur",
    district: "thiruvarur",
    state: "Tamilnadu",
    pincode: 614101,
  },
  skills: {
    WebDevelopment: "JAVASCRIPT",
  },
  education: [
    {
      degree: "BE-Agriculture Engineering",
      college: "Paavai Engineering College,Namakkal",
      yearOfPassing: 2022,
    },
  ],
};

// Using for...in loop
for (let key in resumeData) {
  console.log(key, ":", resumeData[key]);
}

// Using for loop
for (let i = 0; i < resumeData.education.length; i++) {
  console.log("education:", resumeData.education[i]);
}

// Using for...of loop (for arrays)
for (let education of resumeData.education) {
  console.log("degree:", education.degree);
  console.log("yearOfPassing:", education.yearOfPassing);
}

// Using forEach loop (for arrays)
resumeData.education.forEach((edu) => {
  console.log("Degree:", edu.degree);
});
