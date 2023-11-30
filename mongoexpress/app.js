const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/docuabhilala", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));



const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})
//here Playlist is a class
const Playlist = new mongoose.model("Playlist", playlistSchema);


// const reactPlaylist =new Playlist({
//     name: "React Js",
//     ctype: "Front end",
//     videos: 8,
//     author: "abhinav",                       //88888888888888this is one way of doing it
//     active: true,
// })
// reactPlaylist.save();

// const createDocument = async () => {
//     try {
//         const reactPlaylist = new Playlist({
//             name: "React Js",
//             ctype: "Front end",
//             videos: 8,
//             author: "abhinav",
//             active: true,                                     // this is optimum way of doing it  but can only add one document at once
//         })
//         const result = reactPlaylist.save();
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

const createDocument = async () => {
    try {
        const  cPlaylist = new Playlist({
            name: "c playlist",
            ctype: "problem",
            videos: 8,
            author: "abhinav",
            active: true,
        })
        const jsPlaylist = new Playlist({
            name: "Js",
            ctype: "Front end",
            videos: 8,
            author: "abhinav",
            active: true,
        })
        const expressPlaylist = new Playlist({
            name: "Express Js",
            ctype: "Back end",
            videos: 8,
            author: "abhinav",
            active: true,
        })
        const nodePlaylist = new Playlist({
            name: "node Js",
            ctype: "Back end",
            videos: 8,
            author: "abhinavd",
            active: true,
        })
        const result =await Playlist.insertMany([cPlaylist,jsPlaylist,expressPlaylist,nodePlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
// createDocument()

const getdocument= async()=>{
    const result=await Playlist.find({ctype:"Front end"})
    // .select({name:1});
    console.log(result);
}
getdocument()



// there are various logical and other type of quereis that can be applied here you just need to see from Brave