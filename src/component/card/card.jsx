const Card =({item, onSelectTrack})=>{
         const {album, artists, name: songName, isSelected, uri} =item
         // const {isSelected} = id;
       
           // const selectSong=(e)=>{
         //   setStatus('Deselect');
         // }
       
       
           return(
             <div className="song-section">
       @@ -15,33 +9,9 @@ const Card =({item, onSelectTrack})=>{
                   <p className="sTitle">{songName}</p>
                   <p className="sArtist">{artists.map(artist => artist.name).join(', ')}</p>
                   <button className="btn select" onClick= {() => onSelectTrack(uri)}> {isSelected ? 'Deselect':'Select'} </button>
                   {/* <button className="btn select" onClick= {selectSong}> {selected && <button>Deselect</button>} </button> */}
                 </div>
               </div>
             </div>   
           )
       }