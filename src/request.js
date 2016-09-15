'use strict';

// try superagent in node environment

import request from 'superagent';

const data = {
  message: 'Hi',
  items: [
    {
      name: 'item 1',
      tags: [
        'tag-1', 'tag-2', 'tag-3'
      ],
      photos: [
        {
          src: '/path/to/photo-1.jpg',
          label: 'photo 1'
        },
        {
          src: '/path/to/photo-2.jpg',
          label: 'photo 2'
        }
      ]
    }
  ]
};

request
  .post('http://localhost:3000/echo')
  .send(data)
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err || !res.ok) {
      return console.error(err);
    }
    console.log(JSON.stringify(res.body, null, 2));
  });
