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

async function fetchLanyard() {
    const res = await fetch('https://api.lanyard.rest/v1/users/272388882539085824');
    const data = await res.json();
    console.log(data);
    
    const box = document.getElementById('discordBox');
    const discordStatus = document.getElementById('discordStatus');
    const discordUser = document.getElementById('discordUser');
    const spotify = document.getElementById('spotify');

    discordUser.innerHTML = `${data.data.discord_user.username}#${data.data.discord_user.discriminator}`;
    try {
        if (data.data.spotify.album) {
            spotify.innerHTML = `Listening to: ${data.data.spotify.artist} - ${data.data.spotify.song}`;
            document.getElementById('pfp').src = data.data.spotify.album_art_url;
            document.getElementById('discordBox').href = `https://open.spotify.com/track/${data.data.spotify.track_id}`
        }
    } catch (error) {};

    switch (data.data.discord_status) {
        case "online":
            box.classList.replace('border-gray-800', 'border-green-500');

        case "idle":
            box.classList.replace('border-gray-800', 'border-yellow-500');
        case "dnd":
            box.classList.replace('border-gray-800', 'border-red-500');
        case "offline":
            box.classList.replace('border-gray-800', 'border-gray-900');
    };
    if (data.data.discord_status === 'online') {
        discordStatus.innerHTML = "Online";
    } else if (data.data.discord_status === 'idle') {
        discordStatus.innerHTML = "Idle";
    } else if (data.data.discord_status === 'dnd') {
        discordStatus.innerHTML = "Do Not Disturb";
    } else if (data.data.discord_status === 'offline') {
        discordStatus.innerHTML = "Offline / Invisible";
    }

    try {
        data.data.activities.forEach(activity => {
            if (activity.name === 'Custom Status') {
                document.getElementById('customStatus').innerHTML = `${activity.emoji.name} ${activity.state}`;
            }
            else if (activity.name === 'Visual Studio Code') {
                document.getElementById('vscode').innerHTML = `${activity.state} - ${activity.details}`;
            }
        })
    } catch(error) {};
}