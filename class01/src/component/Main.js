'use strict';

import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

class Main extends React.Component {

  render() {
    return (
      <div>
        <HornedBeast
          name='UniWhal'
          imgUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
          description='A unicorn and a narwhal nuzzling their horns'


        />

        <HornedBeast
          name='Rhino Family'
          imgUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'
          description='Mother (or father) rhino with two babies'

        />

        <HornedBeast
          name='Smaug'
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg'
          description='Fan illustration of Smaug from The Hobbit'

        />

        <HornedBeast
          name='Horned Lizard'
          imgUrl='https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false'
          description='Fave food: ants'

        />

        <HornedBeast
          name='Serious Jackson s Chameleon'
          imgUrl='https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg'
          description='These are really common in Hawaii'

        />
      </div>
    );
  }
}
export default Main;