import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList = [
    {
      _id : '1',	
      title: 'Post 1',
      date: '6/23/19',
      audience: 'all',
      image: 'Image for Post 1',
      message: 'This is message 1'	
    },
    {
      _id: '2',	
      title: 'Post 2',
      date: '5/2/19',
      audience: 'them',
      image: 'Image for Post 2',
      message: 'This is message 2'	
    },
    {
      _id: '3',	
      title: 'Post 3',
      date: '5/27/19',
      audience: 'us',
      image: 'Image for Post 3',
      message: 'This is message 3'	
    }
  ];

  constructor() { }

  listPosts(){
    return this.postList;
  }
}
