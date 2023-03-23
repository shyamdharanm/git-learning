const pets = {
  
    "pet1": {
       
    "Name": "Clownfish",
        
    "color": "Orange with white",
        
    "price": Rs260
      },
      
    "pet2": {
        
    "Name": "Beagle Dog",
        
    "color": "Multi",
        
    "price": Rs12000
      },
      
    "pet3": {
        
    "Name": "Parrot",
        
    "color": "white",
        
    "price": Rs8000
      
    }
    
    };
    
    for (let pet in pets) {
      
    console.log(pets[pet].Name + " " + pets[pet].color + " " + pets[pet].price);
    
    }
    
    for (let pet in petss) {
      
    if (pets.hasOwnProperty(pet)) {
        
    console.log(pets[pet].Name + " " + pets[pet].color + " " + pets[pet].price);
    
      }
    
    }
    
    const petValues = Object.values(pets);
    
    
    for (let pet of petValues) {
      
    console.log(pet.Name + " " + pet.color + " " + pet.price);
    
    }
    
    Object.values(pets).forEach(pet => {
      
    console.log(pet.Name + " " + pet.color + " " + pet.price);
    
    });