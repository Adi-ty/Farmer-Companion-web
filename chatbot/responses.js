function getBotResponse(input) {
    //quesstion and answers
    if (input == "Crop Disease") {
        return "Crop diseases are a severe threat to plants . Timely preventive measures will help minimize the risk of crop contamination and loss.";
    } else if (input == "Types of Crop Disease") {
        return "Infections’ causal agents include- bacteria ,viruses, fungi, nematodes, parasitic plants."

    } else if (input == "how to prevent crop disease") {
        return "It is complicated to control bacterial diseases of crop plants for several reasons: high spreading rate and protection from exposure to chemicals due to being inside the plants. Preventive measures may include using pathogen-free seeds produced in drought-prone regions, hot water for seed treatment, soil solarization, control of plant diseases with germicidal compounds of seeds.Also, crop diseases can be prevented by spraying. Of course, sanitary measures are imperative, which include weed control, sterilization of tools, proper waste disposal, and avoidance of cultivation under conditions when leaves are wet.";
    }
    else if (input == "bacterial disease") {
        return "Bacterial diseases can be grouped into four broad categories based on the extent of damage to plant tissue and the symptoms that they cause, which may include vascular wilt, necrosis, soft rot, and tumours. Vascular wilt results from the bacterial invasion of the plant's vascular system."
    }
    else if (input == " Viral disease") {
        return "Since then, a large number of diverse viruses have been found in plants, animals, fungi, and bacteria. The current estimate of recognized viruses is approaching 4,000, of which about 1,000 are plant viruses. The main reason that we study plant viruses is the negative impact that viral diseases have on crop production.";
    } else if (input == " Fungal disease ") {
        return "Some fungal diseases occur on a wide range of vegetables. These diseases include Anthracnose; Botrytis rots; Downy mildews; Fusarium rots; Powdery mildews; Rusts; Rhizoctonia rots; Sclerotinia rots; Sclerotium rots."

    } else if (input == " Parasitic Disease") {
        return " the downy mildews, the powdery mildews, and the rusts. Certain fungi form highly specialized parasitic relationships with insects. For example, the fungal genus Septobasidium is parasitic on scale insects (order Homoptera) that feed on trees.";
    } else if (input == "qwerty") {
        return "Couldn't understand please repeat"


    }



    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
