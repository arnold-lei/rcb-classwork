var userName = prompt("What's your name?");
    var confirmCats = confirm('Do you like cats?');

    var petName = 'Meeses';
    var petType = 'tuxedo cat';
    var petAge = 5;
    var petIsCat = true;

    if (confirmCats){
      alert(petName + petType + petAge)
    }else{
      alert("You don't get my cat's information")
    }

    if (petIsCat == true){
      alert('my pet is a cat')
    }else{
      alert('my pet is not a cat')
    }

    if (petAge !== 7){
      alert('My pet is not 7 years old')
    }

    if (petAge == 5){
      alert('My pet is 5 years old')
    }else if(petAge < 5){
      alert('My pet is less than 5 years old')
    }else if(petAge > 5){
      alert('My pet is older than 5 years old')
    }

    //this replaces the entire page with this - so it's not something you'll normally use - but it's what we'll use for now to be able to print stuff to the page
    document.write('Welcome to our page ' + userName);

    var catAge = prompt('how old is your cat?');

    alert(catAge + 2); //won't work as expected

    alert(parseInt(catAge) + 2); //works as expected