//problem name createtargetarrayinthegivenorder

var createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
      target.splice(index[i], 0, nums[i]);
    }
    return target;
  };

  let test_1=createTargetArray([0,1,2,3,4], [0,1,2,2,1])
  let test_2=createTargetArray([1,2,3,4,0], [0,1,2,3,0])
  console.log(test_1)
  console.log(test_2)