function isTouching (cursor,red){
    console.log("istouching");
    if(red.x-cursor.x<cursor.width/2+red.width/2 &&
      cursor.x-red.x<cursor.width/2+red.width/2 &&
      red.y-cursor.y<cursor.height/2+red.height/2 &&
      cursor.y-red.y<cursor.height/2+red.height/2)
      {
      return true;
      }
      else {
       return false;
      }
  }