function touching(coliding_object,colliding_object2){

    if(colliding_object2.y - coliding_object.y < coliding_object.height/2 + colliding_object2.height/2 &&
      coliding_object.y - colliding_object2.y < coliding_object.height/2 + colliding_object2.height/2 &&
      colliding_object2.x - coliding_object.x < coliding_object.width/2 + colliding_object2.width/2 &&
      coliding_object.x - colliding_object2.x < coliding_object.width/2 + colliding_object2.width/2 ){
    
       return true;
  
  
  
     }
    
    else{ return false;
    
     
    }
  
  }
  
  function bounce(){
  
    if(bounce2.x - bounce1.x < bounce1.width/2 +bounce2.width/2){
      bounce2.velocityX = bounce2.velocityX*-1;
      bounce1.velocityX = bounce1.velocityX*-1;
  
    }
  
  }
  
  