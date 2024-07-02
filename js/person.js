class Person {

    constructor(name,dateofbirth,address, email,place,phonenumber,qualification,bloodGroup,
        height,weight,job,skills,hobby,
    ){
        this.name=name;
        this.dateofbirth = dateofbirth;
        this.address=address;
        this.email =email;
        this.place=place;
        this.phonenumber=phonenumber;
        this.qualification=qualification;
        this.bloodGroup=bloodGroup;
        this.height = height;
        this.weight =weight;
        this.job=job;
        this.skills=skills;
        this.hobby=hobby;
    }
  
    }
        
    const archu = new Person ("Mohan", 1998,"5/10,villivakkam","mohan@gmail.com","Chennai","9826735765",
        "M.sc","A+","5.8","72","Developper","Dancing,Singing","Books reading"
    );
    console.log(archu);
