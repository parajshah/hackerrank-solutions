def miniMaxSum(arr):
    minSum = sum(arr) - max(arr)
    maxSum = sum(arr) - min(arr)
    print(minSum,maxSum)
    return