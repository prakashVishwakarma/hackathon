export let constant = {
    credentials: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "", //organizers | participant
    },
    card: [
        {
            id: "",
            // imageUpload: FileReader || {} || ""||Blob,
            challengeName: "",
            startDate: "",
            endDate: "",
            // eventType: "", // Upcoming | Active | Past
            lavelType: "", // Easy | Mediam | Hard
            // paragraph: "",
            // overview: "",
            description: "",
        },
    ]
}

export const myLocalData = 'myLocalData' 