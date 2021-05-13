function GiphyFrame( props ) {

  const giphy = props.giphy;

  return(
    <>
    <div className="frame">
        <img className="giphyGif" src={giphy.images.original.url} />
        <p className="giphyTitle">{giphy.title}</p>
      </div>      
    </>
  )
}

export default GiphyFrame;