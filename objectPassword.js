


// figuring it out finally.... barely -- function that checks user id and returns and object


function userIdCheck(str){
  var reason = ""
  var valid = true
  if (str.length < 6){
    valid = false
    reason = reason + "Must be greater than 6 characters, "
  }
  if (str.includes("#")){
    valid = false
    reason = reason + "cannot include #, "
  }
  if (str.includes("$")){
    valid = false
    reason = reason + "cannot include $, "
  }
  if (str.includes("!")){
    valid = false
    reason = reason + "cannot include !, "
  }
  return {
    validId: valid,
    reasonReal: reason
  }
}




//password check, returns and object



function userPassCheck(str){
  var reason = ""
  var valid = true
  if (str.length < 6){
    valid = false
    reason = reason + "Must be greater than 6 characters, "
  }
  if (!str.includes("#")){
    valid = false
    reason = reason + "Must include a #, "
  }
  if (!str.includes("$")){
    valid = false
    reason = reason + "Must include $, "
  }
  if (!str.includes("!")){
    valid = false
    reason = reason + "Must include !, "
  }
  return {
    validId: valid,
    reasonReal: reason
  }
}
