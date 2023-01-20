import './ArtistsContainer.css';
import React from 'react';
import Artist from '../Artist/Artist';

const ArtistsContainer = (props) => {
    return (
        <div className='ArtistsContainer'>
            <h1>Top Artists</h1>
            {props.artists.map(artist => 
                <Artist
                    key={artist.id}
                    name={artist.name}
                    genres={artist.genres}
                    images={artist.images}
                />
            )}
        </div>
    );
}

export default ArtistsContainer;