//Storing list of sounds
var SongsList = [{
        id: "1",
        FileName: "electric guitar coutry slide 120bpm - B",
        Name: "Electric Guitar"
    },
    {
        id: "2",
        FileName: "120_stutter_breakbeats_16",
        Name: "Stutter Breakbeats"
    },
    {
        id: "3",
        FileName: "MazePolitics_120_Perc",
        Name: "Maze Politics"
    },
    {
        id: "4",
        FileName: "GrooveB_120bpm_Tanggu",
        Name: "Groove Tanggu"
    },
    {
        id: "5",
        FileName: "PAS3GROOVE1.03B",
        Name: "Groove"
    },
    {
        id: "6",
        FileName: "120_future_funk_beats_25",
        Name: "future Funk Beats"
    },
    {
        id: "7",
        FileName: "SilentStar_120_Em_OrganSynth",
        Name: "Organ Synth"
    },
    {
        id: "8",
        FileName: "FUD_120_StompySlosh",
        Name: "Stompy Slosh"
    },
    {
        id: "9",
        FileName: "Bass Warwick heavy funk groove on E 120 BPM",
        Name: "Bass Warwick"
    }
];

var RecordedSongsList = [];
var audio = new Audio("");

//initialize function to load
function onloadFunction() {
    document.getElementById("Play").disabled = true;
    document.getElementById("Stop").disabled = true;
    LoadGrid();

}

//Load grid from list SongsList and generate the grid
function LoadGrid() {
    var AllSongs = "";
    for (let x in SongsList) {
        AllSongs += "<div class='Pad'><img id='" + SongsList[x].id + "' src='images\\" + SongsList[x].id + ".png' onclick='PlaySound(this.id)'><br>" + SongsList[x].Name + " </div>";
    }
    document.getElementById("grid").innerHTML = AllSongs;
}

//Change buttons status and clear the RecordedSongsList
function RecordFunction() {
    document.getElementById("Record").disabled = true;
    document.getElementById("Play").disabled = false;
    RecordedSongsList = [];
}

//Change buttons status and play audio files
function PlayFunction() {
    document.getElementById("Record").disabled = true;
    document.getElementById("Play").disabled = true;
    document.getElementById("Stop").disabled = false;
    var path;
    //Play record sounds
    for (let x in RecordedSongsList) {
        setTimeout(function() {
            path = "sounds/" + SongsList[RecordedSongsList[x].id - 1].FileName + ".mp3";
            audio = new Audio(path);
            audio.play();
        }, 5000 * x)
    }
}


function StopFunction() {
    document.getElementById("Record").disabled = false;
    document.getElementById("Play").disabled = false;
    document.getElementById("Stop").disabled = true;
    audio.pause();
}

//Play sound file order by user selected ,
//If Record button clicked , restore the id in RecordedSongsList
function PlaySound(clicked_id) {
    //Add new object to RecordedSongsList
    if (document.getElementById("Record").disabled == true) {
        var NewSongId = {
            id: clicked_id
        };
        RecordedSongsList.push(NewSongId);
    }
    //Play selected sound
    var path = "sounds/" + SongsList[clicked_id - 1].FileName + ".mp3";
    audio = new Audio(path);
    audio.play();
}
var url = window.location.href;
var arr = url.split("/");
var result = arr[0] + "//" + arr[2];
alert(result);
console.log(result);
