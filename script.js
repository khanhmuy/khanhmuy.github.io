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

    discordUser.innerHTML = `${data.data.discord_user.username}`;
    try {
        if (data.data.spotify.album) {
            document.getElementById('spotify').style.display = "block";
            track.innerHTML = `${data.data.spotify.song}`;
            artist.innerHTML = `${data.data.spotify.artist}`;
            document.getElementById('pfp').src = data.data.spotify.album_art_url;
            document.getElementById('discordBox').href = `https://open.spotify.com/track/${data.data.spotify.track_id}`
        } else {
            document.getElementById('spotify').style.display = "none";
        }
    } catch (error) {};

    //bodge that works lmfaooooooooooo
    const colors = [
        "border-latte-surface0",
        "border-mocha-surface0",
        "border-mocha-green",
        "border-mocha-yellow",
        "border-mocha-red"
    ]

    try {
        data.data.activities.forEach(activity => {
            if (activity.name === 'Custom Status') {
                document.getElementById('customStatus').style.display = "block";
                if (activity.emoji == undefined) {
                    document.getElementById('customStatus').innerHTML = `${activity.state}`;
                } else {
                    document.getElementById('customStatus').innerHTML = `${activity.emoji.name} ${activity.state}`;
                }
            }
            else if (activity.name === 'Visual Studio Code') {
                document.getElementById('vscode').style.display = "block";
                const workspace = activity.state.slice(11);
                const file = activity.details.slice(8);
                document.getElementById('workspace').innerHTML = `${workspace}`;
                document.getElementById('file').innerHTML = `${file}`;
            }
            else if (activity.name === 'Jellyfin') {
                document.getElementById('jellyfin').style.display = "block";
                document.getElementById('jellyfin').innerHTML = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current h-[1.1em] inline align-middle"><path d="M12 .002C8.826.002-1.398 18.537.16 21.666c1.56 3.129 22.14 3.094 23.682 0C25.384 18.573 15.177 0 12 0zm7.76 18.949c-1.008 2.028-14.493 2.05-15.514 0C3.224 16.9 9.92 4.755 12.003 4.755c2.081 0 8.77 12.166 7.759 14.196zM12 9.198c-1.054 0-4.446 6.15-3.93 7.189.518 1.04 7.348 1.027 7.86 0 .511-1.027-2.874-7.19-3.93-7.19z"/></svg> ${activity.details} | ${activity.state}`;
            }
            else if (activity.name === 'YouTube Music') {
                document.getElementById('ytmusic').style.display = "block";
                document.getElementById('ytmusic').innerHTML = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current h-[1.1em] inline align-middle"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/></svg> Listening to: ${activity.details}`
            }
        })
    } catch(error) {};

    colors.forEach(color => {
        if (box.className.match(color)) {
            if (data.data.discord_status === 'online') {
                box.classList.replace(color , 'border-mocha-green');
                discordStatus.innerHTML = "Online";
            } else if (data.data.discord_status === 'idle') {
                box.classList.replace(color, 'border-mocha-yellow');
                discordStatus.innerHTML = "Idle";
            } else if (data.data.discord_status === 'dnd') {
                box.classList.replace(color, 'border-mocha-red');
                discordStatus.innerHTML = "Do Not Disturb";
            } else if (data.data.discord_status === 'offline') {
                box.classList.replace(color, 'border-latte-surface0');
                discordStatus.innerHTML = "Offline / Invisible";
                document.getElementById('pfp').src = 'https://api.lanyard.rest/272388882539085824.png';
                document.getElementById('customStatus').style.display = "none";
                document.getElementById('spotify').style.display = "none";
                document.getElementById('jellyfin').style.display = "none";
                document.getElementById('vscode').style.display = "none";
            }
        }
    })
}