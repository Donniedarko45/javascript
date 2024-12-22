promise.all takes arrays of promises
# promise.all([p1,p2,p3])

case 1 if all the promises are successful
 
lets say..
p1-->3 sec
p2-->1 sec
p3-->2 sec

It  will resolve parallely and wait for all of them to finish and collect them and give them in form of array.
I
case 2 if any of them failed

lets say p2 is rejected..
promise.all also through error as an result so output is an error
as soon as error happened it will return error


so, for better handling we use promise.allSettled
# promise.allSetteled([p1,p2,p3])
lets say p2 gives error but it will wait for others to setteled

lets say..
p1-->3 sec
p2-->1 sec
p3-->2 sec

output after 3 sec output will be  [val1,error2,val3]

# promise.race([p1,p2,p3])

lets say..
p1-->3 sec
p2-->1 sec
p3-->2 sec

as soon as anyone promise resolved lets say p2 is resolved in 1 sec it will give you value of first settled promise in 1 sec. it only gives first promise setteled result irrespective of whether it is failed or not

what if p2 is failed :- error will be thrown in 1 sec
it will thrown an result of first setteled promise whether it is failed or resolved 


# promise.any([p1,p2,p3])  it will wait for first promise to be resolved wait for first success

lets say..
p1-->3 sec
p2-->1 sec
p3-->2 sec

suppose all are good promise means every promise gives result then the output will be : (val2)

lets say p2 gives error p2 is rejected then the ouput will be (val3)
whatif every other promise will be failed then the return will be aggregate error [error1,error2,error3]
