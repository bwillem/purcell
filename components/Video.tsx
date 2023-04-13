
function Video() {
    return (
        <div className='relative max-w-full bg-primary-dark pt-[56.25%]'>
            <iframe 
                className='absolute top-[0px] left-[0px] w-full h-full'
                src="https://player.vimeo.com/video/806498185?h=d0c1767844&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="100%"
                height="auto"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen/>
        </div>)
}

export default Video