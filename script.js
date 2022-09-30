function displayTime() {

    const timeNow = new Date();

    let months = timeNow.toLocaleString("default", {
        month: "long"
    });

    let date = timeNow.getDate();
    if (date === 1 || date === 21 || date === 31) {
        date += "st";
    }
    else if (date === 2 || date === 22) {
        date += "nd";
    }
    else if (date === 3 || date === 23) {
        date += "rd";
    } 
    else {
        date += "th";
    }

    if (months == "June" && date == "30th" || months == "June" && date == "29th" || months == "July" && date == "1st" || months == "July" && date == "2nd") {
        document.getElementById('technoblade').style.display = "block";
    } else {
        document.getElementById('technoblade').style.display = "none";
    }
}
displayTime();

//feel free to comment how crappy this code is 💀
async function fetchLanyard() {
    const res = await fetch('https://api.lanyard.rest/v1/users/272388882539085824');
    const data = await res.json();
    
    const box = document.getElementById('discordBox');
    const discordStatus = document.getElementById('discordStatus');
    const discordUser = document.getElementById('discordUser');

    const track = document.getElementById('track');
    const artist = document.getElementById('artist');
    const album = document.getElementById('album');

    discordUser.innerHTML = `${data.data.discord_user.username}#${data.data.discord_user.discriminator}`;
    try {
        if (data.data.spotify.album) {
            document.getElementById('spotify').style.display = "block";
            track.innerHTML = `${data.data.spotify.song}`;
            artist.innerHTML = `${data.data.spotify.artist}`;
            album.innerHTML = `${data.data.spotify.album}`;
            document.getElementById('pfp').src = data.data.spotify.album_art_url;
            document.getElementById('discordBox').href = `https://open.spotify.com/track/${data.data.spotify.track_id}`
        } else {
            document.getElementById('spotify').style.display = "none";
        }
    } catch (error) {};

    //bodge that works lmfaooooooooooo
    const colors = [
        "border-gray-800",
        "border-gray-900",
        "border-green-500",
        "border-yellow-500",
        "border-red-500"
    ]

    colors.forEach(color => {
        if (box.className.match(color)) {
            if (data.data.discord_status === 'online') {
                box.classList.replace(color , 'border-green-500');
                discordStatus.innerHTML = "Online";
            } else if (data.data.discord_status === 'idle') {
                box.classList.replace(color, 'border-yellow-500');
                discordStatus.innerHTML = "Idle";
            } else if (data.data.discord_status === 'dnd') {
                box.classList.replace(color, 'border-red-500');
                discordStatus.innerHTML = "Do Not Disturb";
            } else if (data.data.discord_status === 'offline') {
                box.classList.replace(color, 'border-gray-900');
                discordStatus.innerHTML = "Offline / Invisible";
            }
        }
    })

    try {
        data.data.activities.forEach(activity => {
            if (activity.name === 'Custom Status') {
                document.getElementById('customStatus').innerHTML = `${activity.emoji.name} ${activity.state}`;
            }
            else if (activity.name === 'Visual Studio Code') {
                document.getElementById('vscode').style.display = "block";
                
                const workspace = activity.state.slice(11);
                const file = activity.details.slice(8);
                document.getElementById('workspace').innerHTML = `${workspace}`;
                document.getElementById('file').innerHTML = `${file}`;
            }
        })
    } catch(error) {};
}