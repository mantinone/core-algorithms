def bubbleSort( initialSet ):
    end = len(initialSet)
    while end >1 :
        for i in range (1, end):
            if initialSet[i-1] > initialSet[i]:
                temp = initialSet[i]
                initialSet[i] = initialSet[i-1]
                initialSet[i-1] = temp
        end -= 1
    print initialSet
    return initialSet

bubbleSort([6,2,4,7,1,9,10,5,3,8])
