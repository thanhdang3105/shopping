
document.onscroll = () =>{
    if (window.pageYOffset == 0){
        document.querySelector('.header').style.background = 'linear-gradient(to bottom, rgb(0,0,0),rgba(0,0,0,0.8),rgba(0,0,0,0.6), rgba(0,0,0,0.3))'
        document.querySelector('.header').style.animation = ''
        document.querySelector('.header').style.transition = 'all 0.3s linear'
    } 
    else if(window.pageYOffset >= 550){
        document.querySelector('.header').style.background = 'var(--header-color)'
        document.querySelector('.header').style.animation = 'fadeIn 0.5s linear'
    }
}


const video = document.querySelector('.best_collection-video');
const btnPlay_video = document.getElementById('play_video');

document.getElementById('play_video').onclick = () =>{
    video.play();
    btnPlay_video.style.display = 'none';
    document.querySelector('.video_colection .overlay_sale').style.opacity = 0;
}

video.onclick = () =>{
    video.pause();
    btnPlay_video.style.display = 'block';
}

video.onended = () =>{
        console.log(video.ended)
        document.querySelector('.video_colection .overlay_sale').style.transform = 'translateX(0)'
        document.querySelector('.video_colection .overlay_sale').style.opacity = 1;
        btnPlay_video.style.display = 'block';
}



    



// if(y == 600){
//     console.log("thanh")
// }

