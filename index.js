// code your solution here

  function superbowlWin(recordsArray) {
    const result = recordsArray.find(record => record.result === "W");
    if(result !== undefined){
        return result.year
    }
    else{
        return result
    }
  }