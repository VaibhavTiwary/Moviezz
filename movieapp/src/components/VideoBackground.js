import React from 'react'

function VideoBackground() {
    return (
        <div className=' w-screen'>
            <iframe
                className='w-screen aspect-video'
                src="https://www.youtube.com/embed/xcJtL7QggTI?si=7uqapefTOSD_atzI&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allowFullScreen>

            </iframe>
        </div>
    )
}

export default VideoBackground