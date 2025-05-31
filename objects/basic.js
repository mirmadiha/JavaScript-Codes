const john={
    fName:"John",
    lName:"Doe",
    birthYear:1990,
    job:"teacher",
    hasDriversLicence:false,
    getAge:function(){
        return 2025-this.birthYear;
    },
    getSummary:function(){
        console.log(`${this.fName} is a ${this.getAge()} year old ${this.job} and he ${this.hasDriversLicence?"has":"doesnt have "} a drivers license`);
    }
};

john.getSummary();