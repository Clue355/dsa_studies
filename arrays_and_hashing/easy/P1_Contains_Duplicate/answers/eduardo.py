def containsDuplicates(nums):
    hset = set()
    for idx in nums:
        if idx in hset:
            return True
        else:
            hset.add(idx)

print(containsDuplicates([1, 2, 3, 1]))
