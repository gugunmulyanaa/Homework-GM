const FormSubmission = ({addPlaylist, handleAddPlaylistChange, handleAddPlaylistSubmit}) => {
         return (
             <div className="form-container">
                 <form className="playlistForm" onSubmit={handleAddPlaylistSubmit}>
                 <h1 className="formTitle">Create Playlist</h1>
                     <label className="formSubhead" htmlFor="nameInput">Playlist Title</label>
                     <input
                     className="formName"
                     type="text"
                     placeholder="Name your playlist"
                     id="name"
                     name="name"
                     onChange={handleAddPlaylistChange}
                     value={addPlaylist.name}
                     required minLength="10"/>
                     <label className="formSubhead" htmlFor="descInput">Description</label>
                     <textarea
                     className="formDescription"
                     type="text"
                     placeholder="What's your playlist about?"
                     id="description"
                     name="description"
                     onChange={handleAddPlaylistChange}