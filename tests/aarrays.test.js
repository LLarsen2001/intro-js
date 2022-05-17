it('describes array',()=>{
    let nums = [10,20,30];

    // grab an item 
    expect(nums[0]).toBe(10);
    expect(nums[3]).toBe(undefined);

    // something to front of the arrays
    nums.unshift(99);
    console.log(nums);
    expect(nums[0]).toBe(99);

    //removes something from the front array
    let x = nums.shifft();
    expect(x).toBe(99);
    expect(nums[0]).toBe(10);

    // push pop add remove to start



})