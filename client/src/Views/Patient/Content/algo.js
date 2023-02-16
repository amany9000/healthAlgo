import Serv from "@serv-official/vault-sdk";



export default async function getScore() {
    let age;
    await Serv.requestAccess();
    //await Serv.claimCertificate("national-id");
   console.log("vault-sdk") 
   const response3 = await Serv.checkParams(
        "medical",
        "lessThan",
        ["Age"],
        18
    );

    if(response3)
        throw Error("Age under 18 not allowed");
    else{
        const response = await Serv.checkParams(
            "medical",
            "lessThan",
            ["Age"],
            40
        );

        if(response)
            age = 3;
        else{
            const response = await Serv.checkParams(
                "medical",
                "lessThan",
                ["Age"],
                60
            );
            if(response)
                age = 2;
            else
                age = 1
        }
    }


    let BMI;
    const response = await Serv.checkParams(
        "medical",
        "lessThan",
        ["BMI"],
        18.5
    );

    if(response)
        BMI = 4;
    else{
        const response = await Serv.checkParams(
            "medical",
            "lessThan",
            ["BMI"],
            24.9
        );

        if(response)
            BMI = 3;
        else{
            const response = await Serv.checkParams(
                "medical",
                "lessThan",
                ["BMI"],
                29.9
            );
            if(response)
                BMI = 2;
            else
                BMI = 1
        }
    }

    let cholesterol;
    const response1 = await Serv.checkParams(
        "medical",
        "lessThan",
        ["Cholesterol"],
        200
    );

    if(response1)
        cholesterol = 3;
    else{
        const response = await Serv.checkParams(
            "medical",
            "lessThan",
            ["Cholesterol"],
            239
        );

        if(response)
            cholesterol = 2;
        else
            cholesterol = 1
    }

    let hemoglobin;
    const response2 = await Serv.checkParams(
        "medical",
        "lessThan",
        ["Hemoglobin"],
        5.69
    );

    if(response2)
        hemoglobin = 4;
    else{
        const response = await Serv.checkParams(
            "medical",
            "lessThan",
            ["Hemoglobin"],
            6.4
        );

        if(response)
            hemoglobin = 3;
        else{
            const response = await Serv.checkParams(
                "medical",
                "lessThan",
                ["Hemoglobin"],
                7
            );
            if(response)
                hemoglobin = 2;
            else
                hemoglobin = 1
        }
    }


    return algo(BMI, cholesterol, hemoglobin, age)
}

function algo(BMI, cholesterol, hemoglobin, age) {
    return (BMI + 2*cholesterol + hemoglobin + 3*age) / 22.0;
}


