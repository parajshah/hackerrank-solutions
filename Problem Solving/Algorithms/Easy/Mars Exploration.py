def marsExploration(s):
    emergencyString = (len(s) // 3) * 'SOS'
    count = 0
    for i in range(len(s)):
        if s[i] != emergencyString[i]:
            count += 1
    return count