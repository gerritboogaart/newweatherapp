import React, { useState} from 'react';
import { Icon } from 'semantic-ui-react';
import './Photos.css';

export const Photos = () => {
  const [photo, setPhoto] = useState(1);

  const moveLeft = () => setPhoto(photo - 1 < 1 ? 7 : photo - 1);

  const moveRight = () => setPhoto(photo + 1 > 7 ? 1 : photo + 1);

  const QUERY = {
    1: { name: 'virginia+beach+rudee+inlet', zoom: 8 },
    2: { name: 'venice+beach', zoom: 8 },
    3: { name: 'nationals+park+washington+DC', zoom: 8 },
    4: { name: 'cliffs+of+moher', zoom: 7 },
    5: { name: 'grand-canyon+west', zoom: 6 },
    6: { name: 'kerry+park+seattle+washington', zoom: 7 },
    7: { name: 'monticello+trail+charlottesville+va', zoom: 8 }
  }

  const getSrcUrl = () => {
    if (!photo) return <div />
    const base = 'https://www.google.com/maps/embed/v1/place?key=';
    const api = 'AIzaSyB1HZVz7L6ls6xNQsNxU-j7-MiaGZvgeAo';
    return base + api + '&q=' + QUERY[photo]['name'] + '&zoom=' + QUERY[photo]['zoom'];
  }

  return (
    <div className='photos-page'>

        <div className='photo-columns'>
        <div className='photo-holder'>
          <div className={`photo photo${photo}`}></div>
          <Icon onClick={() => moveRight()} className='right-angle' size='big' name='chevron circle right'></Icon>
          <Icon onClick={() => moveLeft()}className='left-angle' size='big' name='chevron circle left'></Icon>
          </div>
          <div className='right-side'>
          <iframe
              width="500"
              title="Where is this picture taken"
              height="400"
              frameBorder="0"
              src={getSrcUrl()} >
            </iframe>
          </div>
        </div>
        <div className='photos-text'>
          All pictures are my personal photos captured on either my wife's iPhone 6s , or my Samsung Galaxy S9.
        </div>

    </div>


  )
}