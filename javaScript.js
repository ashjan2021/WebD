var videos = document.querySelectorAll('video');
var menu = document.querySelector('.menu');
var sidebar = document.querySelector('.sidebar');
var mainContainer = document.querySelector(".mainContainer");
var elems = document.querySelectorAll(".elem");
var anchors = document.querySelectorAll(".mainContainer a");
var upperscroll = document.querySelector(".upperscroll");
var sidebar_bottom_text = document.querySelector('.sidebar-bottom-text');
var profile_img = document.querySelector('.profile-img');
var profile_div = document.querySelector('.profile-open-div-collapse');
var videopagevideo = document.querySelector('.video-div');
var mic = document.querySelector('.mic-div');
var notification = document.querySelector('.notification');
var create = document.querySelector('.create');
var create_div = document.querySelector('.create-collapse')






const videoData = [
    {
        src: './videos/drone video.mp4',
        thumbnail: './videos/drone video.mp4',
        channelLogo: './Images/Tech Burner.jpeg',
        title: 'Best Budget Drones Camera 2024 | DJI Drones',
        channelName: 'Tech Burner',
        views: '5.3M views',
        uploadTime: '4 months ago'
    },
    {
        src: './videos/The mountain.mp4',
        thumbnail: './videos/The mountain.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'Meghalaya: World’s Wettest Place | Mawsynram Village | North East India',
        channelName: 'Ashish Jangid',
        views: '100K views',
        uploadTime: '1 month ago'
    },
    {
        src: './videos/stadium video.mp4',
        thumbnail: './videos/stadium video.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: 'Cricket Stadium Drone Shoot by Devansh Joshi',
        channelName: 'Knock King DJ',
        views: '2M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/unordinary studios video.mp4',
        thumbnail: './videos/unordinary studios video.mp4',
        channelLogo: './Images/unordinary studios logo.png',
        title: 'SECRET to the Cinematic Look 🎥🎬 How Hollywood Does it',
        channelName: 'Unordinary Studios',
        views: '264K views',
        uploadTime: '1 year ago'
    },
    {
        src: './videos/bgmi gameplay.mp4',
        thumbnail: './videos/bgmi gameplay.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: '60 Kills 🔥 IN 20 MINUTES | BATTLEGROUNDS MOBILE INDIA',
        channelName: 'Knock King DJ',
        views: '3.4M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/sheryians coding school video.mp4',
        thumbnail: './videos/sheryians coding school video.mp4',
        channelLogo: './Images/sheryians coding school logo.jpeg',
        title: '🚀Animated Websites with HTML, CSS, and JS | Responsive | Front-End',
        channelName: 'Sheriyans Coding School',
        views: '600K views',
        uploadTime: '7 days ago'
    },
    {
        src: './videos/The mountain.mp4',
        thumbnail: './videos/The mountain.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'Meghalaya: World’s Wettest Place | Mawsynram Village | North East India',
        channelName: 'Soumya Mittal',
        views: '100K views',
        uploadTime: '1 month ago'
    },
    {
        src: './videos/night road.mp4',
        thumbnail: './videos/night road.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'ASMR Highway Driving at Night (Only Music) - Busan to Seoul, Korea',
        channelName: 'Piyush Vlogs',
        views: '200K views',
        uploadTime: '5 days ago'
    },

    {
        src: './videos/drone video.mp4',
        thumbnail: './videos/drone video.mp4',
        channelLogo: './Images/Tech Burner.jpeg',
        title: 'Best Budget Drones Camera 2024 | DJI Drones',
        channelName: 'Tech Burner',
        views: '5.3M views',
        uploadTime: '4 months ago'
    },
    {
        src: './videos/stadium video.mp4',
        thumbnail: './videos/stadium video.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: 'Cricket Stadium Drone Shoot by Devansh Joshi',
        channelName: 'Knock King DJ',
        views: '2M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/bgmi gameplay.mp4',
        thumbnail: './videos/bgmi gameplay.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: '60 Kills 🔥 IN 20 MINUTES | BATTLEGROUNDS MOBILE INDIA',
        channelName: 'Knock King DJ',
        views: '3.4M views',
        uploadTime: '2 months ago'
    },
    
    {
        src: './videos/sheryians coding school video.mp4',
        thumbnail: './videos/sheryians coding school video.mp4',
        channelLogo: './Images/sheryians coding school logo.jpeg',
        title: '🚀Animated Websites with HTML, CSS, and JS | Responsive | Front-End',
        channelName: 'Sheriyans Coding School',
        views: '600K views',
        uploadTime: '7 days ago'
    },
    
    {
        src: './videos/stadium video.mp4',
        thumbnail: './videos/stadium video.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: 'Cricket Stadium Drone Shoot by Devansh Joshi',
        channelName: 'Knock King DJ',
        views: '2M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/night road.mp4',
        thumbnail: './videos/night road.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'ASMR Highway Driving at Night (Only Music) - Busan to Seoul, Korea',
        channelName: 'Piyush Vlogs',
        views: '200K views',
        uploadTime: '5 days ago'
    },
    {
        src: './videos/The mountain.mp4',
        thumbnail: './videos/The mountain.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'Meghalaya: World’s Wettest Place | Mawsynram Village | North East India',
        channelName: 'Soumya Mittal',
        views: '100K views',
        uploadTime: '1 month ago'
    },
    
    {
        src: './videos/unordinary studios video.mp4',
        thumbnail: './videos/unordinary studios video.mp4',
        channelLogo: './Images/unordinary studios logo.png',
        title: 'SECRET to the Cinematic Look 🎥🎬 How Hollywood Does it',
        channelName: 'Unordinary Studios',
        views: '264K views',
        uploadTime: '1 year ago'
    },
    {
        src: './videos/bgmi gameplay.mp4',
        thumbnail: './videos/bgmi gameplay.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: '60 Kills 🔥 IN 20 MINUTES | BATTLEGROUNDS MOBILE INDIA',
        channelName: 'Knock King DJ',
        views: '3.4M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/sheryians coding school video.mp4',
        thumbnail: './videos/sheryians coding school video.mp4',
        channelLogo: './Images/sheryians coding school logo.jpeg',
        title: '🚀Animated Websites with HTML, CSS, and JS | Responsive | Front-End',
        channelName: 'Sheriyans Coding School',
        views: '600K views',
        uploadTime: '7 days ago'
    },
    {
        src: './videos/The mountain.mp4',
        thumbnail: './videos/The mountain.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'Meghalaya: World’s Wettest Place | Mawsynram Village | North East India',
        channelName: 'Soumya Mittal',
        views: '100K views',
        uploadTime: '1 month ago'
    },
    {
        src: './videos/drone video.mp4',
        thumbnail: './videos/drone video.mp4',
        channelLogo: './Images/Tech Burner.jpeg',
        title: 'Best Budget Drones Camera 2024 | DJI Drones',
        channelName: 'Tech Burner',
        views: '5.3M views',
        uploadTime: '4 months ago'
    },
    {
        src: './videos/stadium video.mp4',
        thumbnail: './videos/stadium video.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: 'Cricket Stadium Drone Shoot by Devansh Joshi',
        channelName: 'Knock King DJ',
        views: '2M views',
        uploadTime: '2 months ago'
    },
    {
        src: './videos/bgmi gameplay.mp4',
        thumbnail: './videos/bgmi gameplay.mp4',
        channelLogo: './Images/DJ PHOTO.jpg',
        title: '60 Kills 🔥 IN 20 MINUTES | BATTLEGROUNDS MOBILE INDIA',
        channelName: 'Knock King DJ',
        views: '3.4M views',
        uploadTime: '2 months ago'
    },
    
    {
        src: './videos/sheryians coding school video.mp4',
        thumbnail: './videos/sheryians coding school video.mp4',
        channelLogo: './Images/sheryians coding school logo.jpeg',
        title: '🚀Animated Websites with HTML, CSS, and JS | Responsive | Front-End',
        channelName: 'Sheriyans Coding School',
        views: '600K views',
        uploadTime: '7 days ago'
    },
    {
        src: './videos/night road.mp4',
        thumbnail: './videos/night road.mp4',
        channelLogo: './Images/Ashish photo.jpg',
        title: 'ASMR Highway Driving at Night (Only Music) - Busan to Seoul, Korea',
        channelName: 'Piyush Vlogs',
        views: '200K views',
        uploadTime: '5 days ago'
    },
];

// Function to get query parameters from the URL for video.html page
function getQueryParams() {
    let params = {};
    window.location.search.substring(1).split("&").forEach(function(param) {
        let pair = param.split("=");
        params[pair[0]] = decodeURIComponent(pair[1]);
    });
    return params;
}

// Extract the 'src' parameter from the URL
let params = getQueryParams();
let videoSrc = params['src'];

// Update the video source
if (videoSrc) {
    let videoElement = document.querySelector('.video-div video');
    let sourceElement = videoElement.querySelector('source');

    // Set the new src value
    sourceElement.src = videoSrc;

    // Load and play the video
    videoElement.load();
    videoElement.play();
}

function updateVideoContent(videos){
    if(window.location.pathname.includes('video.html')){
        videos.forEach(function(video){
            if(videoSrc===video.src){
                document.querySelector('.elements .left-div h3').textContent = video.title;
                document.querySelector('.channel-name p').textContent = video.channelName;
                // document.querySelector('.video-views').textContent = video.views;
                // document.querySelector('.video-upload-time').textContent = video.uploadTime;
                document.querySelector('.bottom-left-div img').src = video.channelLogo;
                // console.log('Image src updated to:', document.querySelector('.bottom-left-div img').src);
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateVideoContent(videoData);
});

//comment box

document.addEventListener("DOMContentLoaded", () => {
    const commentInput = document.querySelector(".write-comment input");
    const previousComments = document.querySelector(".previous-comments");
    const commentCountSpan = document.querySelector(".comment-box-heading p span");

    // Function to update comment count
    function updateCommentCount() {
        const commentCount = previousComments.querySelectorAll(".comment").length;
        commentCountSpan.textContent = commentCount;
    }

    // Add event listener to handle adding comments
    commentInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && commentInput.value.trim() !== "") {
            console.log('Enter key pressed with comment:', commentInput.value);

            // Create a new comment div
            const newComment = document.createElement("div");
            newComment.classList.add("comment");

            // Add HTML content to the new comment
            newComment.innerHTML = `
                <img src="./Images/Ashish photo.jpg" alt="">
                <div class="details">
                    <p>@ashjan2021 <span>Just now</span></p>
                    <p>${commentInput.value}</p>
                </div>
            `;

            // Append the new comment to the previous comments section
            previousComments.appendChild(newComment);

            // Clear the input field
            commentInput.value = "";

            // Update the comment count
            updateCommentCount();
        }
    });

    // Initial count update (in case there are existing comments)
    updateCommentCount();
});


//loader page

var tl = gsap.timeline()

tl.from("#loader-logo",{
    y:400,
    duration:1,
    delay:0.5 
})


tl.to("#loader",{
    opacity:0,
    duration:0.5,
    delay:1.8
})

tl.from("#homepage",{
    delay:0,
    y:0,
    opacity:1
})

tl.to("#loader",{
    display:"none"
})


//profile-open-div
profile_img.addEventListener('click', function() {
    if (profile_div.style.display === 'none' || profile_div.style.display === '') {
        profile_div.style.display = 'block';
        profile_div.classList.add('profile-open-div-expand');
    } else {
        profile_div.style.display = 'none';
        profile_div.classList.remove('profile-open-div-expand');
    }
});












const container = document.querySelector('.mainContainer');
const input = document.querySelector(".search-box input");
const searchIcon = document.querySelector(".search-box i.ri-search-line"); // Select the search icon

// Function to render video items
function renderVideos(videos) {
    container.innerHTML = ''; // Clear existing content
    videos.forEach(video => {
        // Create the anchor tag
        const a = document.createElement('a');
        a.href = `video.html?src=${encodeURIComponent(video.src)}`;

        // Create the video element structure
        a.innerHTML = `
            <div class="elem">
                <div class="thumbnailContainer">
                    <video controls muted loop src="${video.thumbnail}"></video>
                </div>
                <div class="detailsContainer d-flex">
                    <div class="logoContainer d-flex">
                        <div class="channelLogo">
                            <img src="${video.channelLogo}" alt="">
                        </div>
                    </div>
                    <div class="details">
                        <div class="name d-flex">
                            <h4>${video.title}</h4>
                            <i class="ri-more-2-line"></i>
                        </div>
                        <p>${video.channelName} <i class="ri-checkbox-circle-fill"></i></p>
                        <p>${video.views} • ${video.uploadTime}</p>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(a);
    });
}

// Render all videos initially
renderVideos(videoData);

// Function to handle search
function handleSearch() {
    const searchTerm = input.value.toLowerCase();
    const matchingVideos = videoData.filter(video => 
        video.title.toLowerCase().includes(searchTerm)
    );
    renderVideos(matchingVideos);
}

// Search on clicking the search icon
searchIcon.addEventListener('click', handleSearch);

// Search on pressing Enter key
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Optional: Clear search and show all videos if input is cleared
input.addEventListener('input', function() {
    if (input.value === '') {
        renderVideos(videoData);
    }
});




//rebind events

function rebindEvents() {
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(elem){
        if (mainContainer.classList.contains('mainContainer-expand')) {
            elem.classList.add('elem-collapse');
        } else {
            elem.classList.remove('elem-collapse');
        }
    });

    var videos = document.querySelectorAll('.mainContainer video');
    videos.forEach(function(video) {
        var playtimeout;
        video.addEventListener('mouseenter',function(){
            playtimeout = setTimeout(() => {
                video.currentTime = 0;
                video.play();
            }, 700);
        });
        video.addEventListener('mouseleave',function(){
            clearTimeout(playtimeout);
            video.pause();
        });
    });
}

// Update your menu click handler to rebind events after the toggle
menu.addEventListener("click", function(){
    sidebar.classList.toggle('sidebar-collapse');
    mainContainer.classList.toggle('mainContainer-expand');
    upperscroll.classList.toggle('upperscroll-expand');
    sidebar_bottom_text.classList.toggle('sidebar-bottom-text-collapse');

    // Rebind events after toggling classes
    rebindEvents();
});

// Call rebindEvents right after the initial render
renderVideos(videoData);
rebindEvents();



mic.addEventListener("click",function(){
    alert("Youtube wants to access your microphone")
})

notification.addEventListener("click",function(){
    alert("There are no notifications right now")
})

create.addEventListener("click",function(){
    if (create_div.style.display === 'none' || create_div.style.display === '') {
        create_div.style.display = 'block';
        create_div.classList.add('create-expand');
    } 
    else {
        create_div.style.display = 'none';
        create_div.classList.remove('create-expand');
    }
})


















