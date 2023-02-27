# LeetCode Patterns

Preparing for coding interviews can be a source of anxiety for many developers as it involves covering a vast amount of material that may feel irrelevant to their daily work, adding to the stress. As a result, it has become common for developers to spend several weeks sifting through numerous interview questions on websites such as LeetCode. One of the most frequent concerns expressed by developers before an interview is whether they have solved enough practice questions and if they could have done more.

There are hundreds of questions on LeetCode and it's nearly impossible to solve all of them, unless of course you spends weeks and hours per day to truly solve and understand all of them. However, if you understand the generic patterns, you can use them as a template to solve a myriad of other problems with slight variations.

Here, I’ve laid out the top 14 patterns that can be used to solve any coding interview question, as well as how to identify each pattern, and some example questions for each.

1. Sliding Window

The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.

Following are some ways you can identify that the given problem might require a sliding window:

- The problem input is a linear data structure such as a linked list, array, or string
- You’re asked to find the longest/shortest substring, subarray, or a desired value
  Common problems you use the sliding window pattern with:
  - Maximum sum subarray of size ‘K’ (easy)
  - Longest substring with ‘K’ distinct characters (medium)
  - String anagrams (hard)

2. Two Pointers or Iterators

Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition. Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

Two pointers are needed because with just 1 pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.

Ways to identify when to use the Two Pointer method:

- It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

3. Fast and Slow pointers

The Fast and Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

How do you identify when to use the Fast and Slow pattern?

- The problem will deal with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of the linked list.

When should I use it over the Two Pointer method mentioned above?

- There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to determine if a linked list is a palindrome.

4. Merge Intervals

The Merge Intervals pattern is an efficient technique to deal with overlapping intervals. In a lot of problems involving intervals, you either need to find overlapping intervals or merge intervals if they overlap.

The pattern works like this: Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other -

![Merge Intervals](/main/imgs/mergeIntervals.png)

Understanding and recognizing these six cases will help you help you solve a wide range of problems from inserting intervals to optimizing interval merges.

How do you identify when to use the Merge Intervals pattern?

- If you’re asked to produce a list with only mutually exclusive intervals
- If you hear the term “overlapping intervals”.

Video Reference: https://www.youtube.com/watch?v=wrNEKxlDWlw
